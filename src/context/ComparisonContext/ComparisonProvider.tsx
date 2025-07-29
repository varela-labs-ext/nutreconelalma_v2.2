import MixingCenterResultsModel from '@/logic/models/MixingCenterResultsModel';
import { getClassName, Logger } from '@/utils/logger';
import React, { createContext, useContext, useEffect, useState } from 'react';
import useMixingCenterContext from '../MixingCenterContext/useMixingCenterContext';
import ComputerBigGroupModel from '@/logic/models/ComputerBigGroupModel';
import { getAdditionalCostsSummary, getProductionPerMonth, updateAdditionalCostsSummary } from '../MixingCenterContext/MixingCenterUtils';
import AdditionalCostsTotalsModel from '@/logic/models/AdditionalCostsTotalsModel';
import MixingCenterOperatingResourcesModel from '@/logic/models/MixingCenterOperatingResourcesModel';
import { deepClone } from '@/utils/objectUtils';
import MixingCenterSettingsModel from '@/logic/models/common/MixingCenterSettingsModel';
import MixingCenterRawMaterialsModel from '@/logic/models/MixingCenterRawMaterialsModel';
import { BuildTextPlainReport, calculateResources, calculateResourcesTotal } from './ComparisonProviderUtils';
import { padText } from '@/components/business/reporting/textPadding';
import ResultItemModel from '@/logic/models/ResultItemModel';
import JustValueItemModel from '@/logic/models/row_item/OneValueItemRowModel';


// type MixingCenterComparisonState = {
//     manual: MixingCenterResultsModel | null;
//     automated: MixingCenterResultsModel | null;
// };

type ComparisonContextType = {
    startComparision: boolean;
    results: MixingCenterResultsModel;
    printingResults: string[];
    // loadResults: (inData: MixingCenterResultsModel) => void;
    resetResults: () => void;
    setStartComparision: (value: boolean) => void;
};

// const initialState: MixingCenterComparisonState = {
//     manual: null,
//     automated: null,
// };

export const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

// type Props = {
//     children: React.ReactNode;
// };

export const ComparisonProvider = ({ children }: { children: React.ReactNode }) => {
    const { buildBackupPayload } = useMixingCenterContext();

    const [startComparision, setStartComparision] = useState<boolean>(false);
    const [results, setResults] = useState<MixingCenterResultsModel>(new MixingCenterResultsModel());
    const [printingResults, setPrintingResults] = useState<string[]>([]);

    const resetResults = (): void => {
        setResults(new MixingCenterResultsModel());
        setPrintingResults([]);
    };

    const setGeneralSettings = (brandNewResults: MixingCenterResultsModel, settings: MixingCenterSettingsModel): void => {
        brandNewResults.lineasProduccion.value = settings.productionLines;
        brandNewResults.produccionDiaria.value = settings.productionPerDay;
        brandNewResults.produccionMensual.value = getProductionPerMonth(settings);

        brandNewResults.porcentajeAdulto.value = settings.percentPerAdult;
        brandNewResults.porcentajePediatric.value = settings.percentPerPediatric;
        brandNewResults.porcentajeNeonatal.value = settings.percentPerNeonatal;
    }

    const setTotalResourcesManual = (brandNewResults: MixingCenterResultsModel, summaryManual: AdditionalCostsTotalsModel): void => {
        brandNewResults.PersonalProtectiveMaterialsCosts.valueNptManual = summaryManual.protectiveMaterialsTotal;
        brandNewResults.hygieneNCleaningMaterialsCosts.valueNptManual = summaryManual.hygieneNCleanlinessTotal;
        brandNewResults.maintenanceCosts.valueNptManual = summaryManual.maintenanceTotal;
        brandNewResults.productionCosts.valueNptManual = summaryManual.productionTotal;
        brandNewResults.sterileEquipmentCosts.valueNptManual = summaryManual.sterilizedEquipmentTotal;
        brandNewResults.automatedEquipmentCosts.valueNptManual = summaryManual.automatedEquipmentTotal;
    }

    const setTotalResourcesAutomatic = (brandNewResults: MixingCenterResultsModel, summaryAutomatic: AdditionalCostsTotalsModel): void => {
        brandNewResults.PersonalProtectiveMaterialsCosts.valueNptAutomatic = summaryAutomatic.protectiveMaterialsTotal;
        brandNewResults.hygieneNCleaningMaterialsCosts.valueNptAutomatic = summaryAutomatic.hygieneNCleanlinessTotal;
        brandNewResults.maintenanceCosts.valueNptAutomatic = summaryAutomatic.maintenanceTotal;
        brandNewResults.productionCosts.valueNptAutomatic = summaryAutomatic.productionTotal;
        brandNewResults.sterileEquipmentCosts.valueNptAutomatic = summaryAutomatic.sterilizedEquipmentTotal;
        brandNewResults.automatedEquipmentCosts.valueNptAutomatic = summaryAutomatic.automatedEquipmentTotal;
    }

    const setTotalStaffManual = (brandNewResults: MixingCenterResultsModel, resourcesManual: MixingCenterOperatingResourcesModel): void => {
        brandNewResults.chemicalStaffHours.valueNptManual = resourcesManual.staffChemistSalary.horasPersonalFarmaceuticoPorNP.value;
        brandNewResults.costPerChemicalStaff.valueNptManual = resourcesManual.staffChemistSalary.costoPersonalFarmaceuticoPorPreparacion.value;

        brandNewResults.auxiliaryStaffHours.valueNptManual = resourcesManual.staffAssistantSalary.horasPersonalFarmaceuticoPorNP.value;
        brandNewResults.costPerAuxiliaryStaff.valueNptManual = resourcesManual.staffAssistantSalary.costoPersonalFarmaceuticoPorPreparacion.value;
        brandNewResults.automatedEquipmentCosts.valueNptManual = 0;
    }

    const setTotalStaffAutomatic = (brandNewResults: MixingCenterResultsModel, resourcesAutomatic: MixingCenterOperatingResourcesModel): void => {
        brandNewResults.chemicalStaffHours.valueNptAutomatic = resourcesAutomatic.staffChemistSalary.horasPersonalFarmaceuticoPorNP.value;
        brandNewResults.costPerChemicalStaff.valueNptAutomatic = resourcesAutomatic.staffChemistSalary.costoPersonalFarmaceuticoPorPreparacion.value;

        brandNewResults.auxiliaryStaffHours.valueNptAutomatic = resourcesAutomatic.staffAssistantSalary.horasPersonalFarmaceuticoPorNP.value;
        brandNewResults.costPerAuxiliaryStaff.valueNptAutomatic = resourcesAutomatic.staffAssistantSalary.costoPersonalFarmaceuticoPorPreparacion.value;
    }

    const setTotals1NptAdultManual = (brandNewResults: MixingCenterResultsModel, rawMaterials: MixingCenterRawMaterialsModel, operationResourcesAndStaff: number): void => {
        if (brandNewResults.porcentajeAdulto.value > 0) {
            // Costos 1 NPT adulto
            brandNewResults.cost1NptAdult.valueNptManual =
                rawMaterials.adultoRawMaterial.total *
                rawMaterials.adultoRawMaterial.cantidad;

            brandNewResults.costoTotalPreparacionNptAdult.valueNptManual =
                brandNewResults.cost1NptAdult.valueNptManual +
                operationResourcesAndStaff;
        } else {
            brandNewResults.cost1NptAdult.valueNptManual = 0;
            brandNewResults.costoTotalPreparacionNptAdult.valueNptManual = 0;
        }
    }

    const setTotals1NptAdultAutomatic = (brandNewResults: MixingCenterResultsModel, rawMaterialsAutomatic: MixingCenterRawMaterialsModel, operationResourcesAndStaff: number): void => {
        if (brandNewResults.porcentajeAdulto.value > 0) {
            brandNewResults.cost1NptAdult.valueNptAutomatic =
                rawMaterialsAutomatic.adultoRawMaterial.total *
                rawMaterialsAutomatic.adultoRawMaterial.cantidad;

            brandNewResults.costoTotalPreparacionNptAdult.valueNptAutomatic =
                brandNewResults.cost1NptAdult.valueNptAutomatic +
                operationResourcesAndStaff;
        } else {
            brandNewResults.cost1NptAdult.valueNptAutomatic = 0;
            brandNewResults.costoTotalPreparacionNptAdult.valueNptAutomatic = 0;
        }
    }

    const setTotals1NptPediatricManual = (brandNewResults: MixingCenterResultsModel, rawMaterials: MixingCenterRawMaterialsModel, operationResourcesAndStaff: number): void => {
        if (brandNewResults.porcentajePediatric.value > 0) {
            brandNewResults.cost1NptPediatric.valueNptManual =
                rawMaterials.pediatricoRawMaterial.total *
                rawMaterials.pediatricoRawMaterial.cantidad;

            brandNewResults.costoTotalPreparacionNptPediatric.valueNptManual =
                brandNewResults.cost1NptPediatric.valueNptManual +
                operationResourcesAndStaff;
        } else {
            brandNewResults.cost1NptPediatric.valueNptManual = 0;
            brandNewResults.costoTotalPreparacionNptPediatric.valueNptManual = 0;
        }
    }

    const setTotals1NptPediatricAutomatic = (brandNewResults: MixingCenterResultsModel, rawMaterialsAutomatic: MixingCenterRawMaterialsModel, operationResourcesAndStaff: number): void => {
        if (brandNewResults.porcentajePediatric.value > 0) {
            brandNewResults.cost1NptPediatric.valueNptAutomatic =
                rawMaterialsAutomatic.pediatricoRawMaterial.total *
                rawMaterialsAutomatic.pediatricoRawMaterial.cantidad;

            brandNewResults.costoTotalPreparacionNptPediatric.valueNptAutomatic =
                brandNewResults.cost1NptPediatric.valueNptAutomatic +
                operationResourcesAndStaff;
        } else {
            brandNewResults.cost1NptPediatric.valueNptAutomatic = 0;
            brandNewResults.costoTotalPreparacionNptPediatric.valueNptAutomatic = 0;
        }
    }

    const setTotals1NptNeonatalManual = (brandNewResults: MixingCenterResultsModel, rawMaterials: MixingCenterRawMaterialsModel, operationResourcesAndStaff: number): void => {
        if (brandNewResults.porcentajeNeonatal.value > 0) {
            brandNewResults.cost1NptNeonatal.valueNptManual =
                rawMaterials.neonatalRawMaterial.total *
                rawMaterials.neonatalRawMaterial.cantidad;

            brandNewResults.costoTotalPreparacionNptNeonatal.valueNptManual =
                brandNewResults.cost1NptNeonatal.valueNptManual +
                operationResourcesAndStaff;
        } else {
            brandNewResults.cost1NptNeonatal.valueNptManual = 0;
            brandNewResults.costoTotalPreparacionNptNeonatal.valueNptManual = 0;
        }
    }

    const setTotals1NptNeonatalAutomatic = (brandNewResults: MixingCenterResultsModel, rawMaterialsAutomatic: MixingCenterRawMaterialsModel, operationResourcesAndStaff: number): void => {
        if (brandNewResults.porcentajeNeonatal.value > 0) {
            brandNewResults.cost1NptNeonatal.valueNptAutomatic =
                rawMaterialsAutomatic.neonatalRawMaterial.total *
                rawMaterialsAutomatic.neonatalRawMaterial.cantidad;

            brandNewResults.costoTotalPreparacionNptNeonatal.valueNptAutomatic =
                brandNewResults.cost1NptNeonatal.valueNptAutomatic +
                operationResourcesAndStaff;
        } else {
            brandNewResults.cost1NptNeonatal.valueNptAutomatic = 0;
            brandNewResults.costoTotalPreparacionNptNeonatal.valueNptAutomatic = 0;
        }
    }

    const setTotalsByPopulationManual = (brandNewResults: MixingCenterResultsModel, rawMaterials: MixingCenterRawMaterialsModel): void => {
        brandNewResults.valorTotalAdult.valueNptManual = (
            brandNewResults.produccionDiaria.value *
            (brandNewResults.porcentajeAdulto.value / 100)) *
            rawMaterials.adultoRawMaterial.total;

        brandNewResults.valorTotalPediatric.valueNptManual = (
            brandNewResults.produccionDiaria.value *
            (brandNewResults.porcentajePediatric.value / 100)) *
            rawMaterials.pediatricoRawMaterial.total;

        brandNewResults.valorTotalNeonatal.valueNptManual = (
            brandNewResults.produccionDiaria.value *
            (brandNewResults.porcentajeNeonatal.value / 100)) *
            rawMaterials.neonatalRawMaterial.total;
    }

    const setTotalsByPopulationAutomatic = (brandNewResults: MixingCenterResultsModel, rawMaterialsAutomatic: MixingCenterRawMaterialsModel): void => {
        brandNewResults.valorTotalAdult.valueNptAutomatic = (
            brandNewResults.produccionDiaria.value *
            (brandNewResults.porcentajeAdulto.value / 100)) *
            rawMaterialsAutomatic.adultoRawMaterial.total;

        brandNewResults.valorTotalPediatric.valueNptAutomatic = (
            brandNewResults.produccionDiaria.value *
            (brandNewResults.porcentajePediatric.value / 100)) *
            rawMaterialsAutomatic.pediatricoRawMaterial.total;

        brandNewResults.valorTotalNeonatal.valueNptAutomatic = (
            brandNewResults.produccionDiaria.value *
            (brandNewResults.porcentajeNeonatal.value / 100)) *
            rawMaterialsAutomatic.neonatalRawMaterial.total;
    }

    const startProcess = (): void => {
        try {
            Logger.info("Start Results Process", getClassName(this));

            const brandNewResults: MixingCenterResultsModel = new MixingCenterResultsModel();


            const dataBackupPayload: ComputerBigGroupModel = buildBackupPayload();

            const summaryManual: AdditionalCostsTotalsModel = calculateResources(dataBackupPayload.backup_MC_Manual_Resources);
            calculateResourcesTotal(summaryManual, true);

            const summaryAutomatic: AdditionalCostsTotalsModel = calculateResources(dataBackupPayload.backup_MC_Automatic_Resources);
            calculateResourcesTotal(summaryAutomatic, false);

            if (dataBackupPayload.mixingCenterSettings !== null) {
                // const settings: MixingCenterSettingsModel = dataBackupPayload.mixingCenterSettings;

                setGeneralSettings(brandNewResults, dataBackupPayload.mixingCenterSettings);

                // brandNewResults.lineasProduccion.value = settings.productionLines;
                // brandNewResults.produccionDiaria.value = settings.productionPerDay;
                // brandNewResults.produccionMensual.value = getProductionPerMonth(settings);
                // brandNewResults.porcentajeAdulto.value = settings.percentPerAdult;
                // brandNewResults.porcentajePediatric.value = settings.percentPerPediatric;
                // brandNewResults.porcentajeNeonatal.value = settings.percentPerNeonatal;
            }

            setTotalResourcesManual(brandNewResults, summaryManual);

            // brandNewResults.PersonalProtectiveMaterialsCosts.valueNptManual = summaryManual.protectiveMaterialsTotal;
            // brandNewResults.hygieneNCleaningMaterialsCosts.valueNptManual = summaryManual.hygieneNCleanlinessTotal;
            // brandNewResults.maintenanceCosts.valueNptManual = summaryManual.maintenanceTotal;
            // brandNewResults.productionCosts.valueNptManual = summaryManual.productionTotal;
            // brandNewResults.sterileEquipmentCosts.valueNptManual = summaryManual.sterilizedEquipmentTotal;
            // brandNewResults.automatedEquipmentCosts.valueNptManual = summaryManual.automatedEquipmentTotal;

            setTotalResourcesAutomatic(brandNewResults, summaryAutomatic);


            // brandNewResults.PersonalProtectiveMaterialsCosts.valueNptAutomatic = summaryAutomatic.protectiveMaterialsTotal;
            // brandNewResults.hygieneNCleaningMaterialsCosts.valueNptAutomatic = summaryAutomatic.hygieneNCleanlinessTotal;
            // brandNewResults.maintenanceCosts.valueNptAutomatic = summaryAutomatic.maintenanceTotal;
            // brandNewResults.productionCosts.valueNptAutomatic = summaryAutomatic.productionTotal;
            // brandNewResults.sterileEquipmentCosts.valueNptAutomatic = summaryAutomatic.sterilizedEquipmentTotal;
            // brandNewResults.automatedEquipmentCosts.valueNptAutomatic = summaryAutomatic.automatedEquipmentTotal;

            if (dataBackupPayload.backup_MC_Manual_Resources !== null) {
                // const resourcesManual: MixingCenterOperatingResourcesModel = dataBackupPayload.backup_MC_Manual_Resources;

                setTotalStaffManual(brandNewResults, dataBackupPayload.backup_MC_Manual_Resources);

                // brandNewResults.chemicalStaffHours.valueNptManual = resourcesManual.staffChemistSalary.horasPersonalFarmaceuticoPorNP.value;
                // brandNewResults.costPerChemicalStaff.valueNptManual = resourcesManual.staffChemistSalary.costoPersonalFarmaceuticoPorPreparacion.value;

                // brandNewResults.auxiliaryStaffHours.valueNptManual = resourcesManual.staffAssistantSalary.horasPersonalFarmaceuticoPorNP.value;
                // brandNewResults.costPerAuxiliaryStaff.valueNptManual = resourcesManual.staffAssistantSalary.costoPersonalFarmaceuticoPorPreparacion.value;
                // brandNewResults.automatedEquipmentCosts.valueNptManual = 0;
            }

            if (dataBackupPayload.backup_MC_Automatic_Resources !== null) {
                // const resourcesAutomatic: MixingCenterOperatingResourcesModel = dataBackupPayload.backup_MC_Automatic_Resources;

                setTotalStaffAutomatic(brandNewResults, dataBackupPayload.backup_MC_Automatic_Resources);

                // brandNewResults.chemicalStaffHours.valueNptAutomatic = resourcesAutomatic.staffChemistSalary.horasPersonalFarmaceuticoPorNP.value;
                // brandNewResults.costPerChemicalStaff.valueNptAutomatic = resourcesAutomatic.staffChemistSalary.costoPersonalFarmaceuticoPorPreparacion.value;

                // brandNewResults.auxiliaryStaffHours.valueNptAutomatic = resourcesAutomatic.staffAssistantSalary.horasPersonalFarmaceuticoPorNP.value;
                // brandNewResults.costPerAuxiliaryStaff.valueNptAutomatic = resourcesAutomatic.staffAssistantSalary.costoPersonalFarmaceuticoPorPreparacion.value;

            }

            if (dataBackupPayload.backup_MC_Manual_RawMaterials !== null) {
                const rawMaterials: MixingCenterRawMaterialsModel = dataBackupPayload.backup_MC_Manual_RawMaterials;

                const operationResourcesAndStaff: number = summaryManual.totalSinStaff +
                    brandNewResults.costPerChemicalStaff.valueNptManual +
                    brandNewResults.costPerAuxiliaryStaff.valueNptManual;

                setTotals1NptAdultManual(brandNewResults, rawMaterials, operationResourcesAndStaff);
                setTotals1NptPediatricManual(brandNewResults, rawMaterials, operationResourcesAndStaff);
                setTotals1NptNeonatalManual(brandNewResults, rawMaterials, operationResourcesAndStaff);

                // if (brandNewResults.porcentajeAdulto.value > 0) {
                //     // Costos 1 NPT adulto
                //     brandNewResults.cost1NptAdult.valueNptManual =
                //         rawMaterials.adultoRawMaterial.total *
                //         rawMaterials.adultoRawMaterial.cantidad;

                //     brandNewResults.costoTotalPreparacionNptAdult.valueNptManual =
                //         brandNewResults.cost1NptAdult.valueNptManual +
                //         operationResourcesAndStaff;
                // } else {
                //     brandNewResults.cost1NptAdult.valueNptManual = 0;
                //     brandNewResults.costoTotalPreparacionNptAdult.valueNptManual = 0;
                // }

                // if (brandNewResults.porcentajePediatric.value > 0) {
                //     brandNewResults.cost1NptPediatric.valueNptManual =
                //         rawMaterials.pediatricoRawMaterial.total *
                //         rawMaterials.pediatricoRawMaterial.cantidad;

                //     brandNewResults.costoTotalPreparacionNptPediatric.valueNptManual =
                //         brandNewResults.cost1NptPediatric.valueNptManual +
                //         operationResourcesAndStaff;
                // } else {
                //     brandNewResults.cost1NptPediatric.valueNptManual = 0;
                //     brandNewResults.costoTotalPreparacionNptPediatric.valueNptManual = 0;
                // }

                // if (brandNewResults.porcentajeNeonatal.value > 0) {
                //     brandNewResults.cost1NptNeonatal.valueNptManual =
                //         rawMaterials.neonatalRawMaterial.total *
                //         rawMaterials.neonatalRawMaterial.cantidad;

                //     brandNewResults.costoTotalPreparacionNptNeonatal.valueNptManual =
                //         brandNewResults.cost1NptNeonatal.valueNptManual +
                //         operationResourcesAndStaff;
                // } else {
                //     brandNewResults.cost1NptNeonatal.valueNptManual = 0;
                //     brandNewResults.costoTotalPreparacionNptNeonatal.valueNptManual = 0;
                // }

                setTotalsByPopulationManual(brandNewResults, rawMaterials);

                // brandNewResults.valorTotalAdult.valueNptManual = (
                //     brandNewResults.produccionDiaria.value *
                //     (brandNewResults.porcentajeAdulto.value / 100)) *
                //     rawMaterials.adultoRawMaterial.total;

                // brandNewResults.valorTotalPediatric.valueNptManual = (
                //     brandNewResults.produccionDiaria.value *
                //     (brandNewResults.porcentajePediatric.value / 100)) *
                //     rawMaterials.pediatricoRawMaterial.total;

                // brandNewResults.valorTotalNeonatal.valueNptManual = (
                //     brandNewResults.produccionDiaria.value *
                //     (brandNewResults.porcentajeNeonatal.value / 100)) *
                //     rawMaterials.neonatalRawMaterial.total;

                brandNewResults.valorTotalNutriciosDia.valueNptManual =
                    brandNewResults.valorTotalAdult.valueNptManual +
                    brandNewResults.valorTotalPediatric.valueNptManual +
                    brandNewResults.valorTotalNeonatal.valueNptManual;
            }

            if (dataBackupPayload.backup_MC_Automatic_RawMaterials !== null) {
                const rawMaterialsAutomatic: MixingCenterRawMaterialsModel = dataBackupPayload.backup_MC_Automatic_RawMaterials;

                const operationResourcesAndStaff: number = summaryManual.totalSinStaff +
                    brandNewResults.costPerChemicalStaff.valueNptAutomatic +
                    brandNewResults.costPerAuxiliaryStaff.valueNptAutomatic;

                setTotals1NptAdultAutomatic(brandNewResults, rawMaterialsAutomatic, operationResourcesAndStaff);

                // brandNewResults.cost1NptAdult.valueNptAutomatic =
                //     rawMaterialsAutomatic.adultoRawMaterial.total *
                //     rawMaterialsAutomatic.adultoRawMaterial.cantidad;

                // brandNewResults.costoTotalPreparacionNptAdult.valueNptAutomatic =
                //     brandNewResults.cost1NptAdult.valueNptAutomatic +
                //     operationResourcesAndStaff;

                setTotals1NptPediatricAutomatic(brandNewResults, rawMaterialsAutomatic, operationResourcesAndStaff);

                // brandNewResults.cost1NptPediatric.valueNptAutomatic =
                //     rawMaterialsAutomatic.pediatricoRawMaterial.total *
                //     rawMaterialsAutomatic.pediatricoRawMaterial.cantidad;

                // brandNewResults.costoTotalPreparacionNptPediatric.valueNptAutomatic =
                //     brandNewResults.cost1NptPediatric.valueNptAutomatic +
                //     operationResourcesAndStaff;

                setTotals1NptNeonatalAutomatic(brandNewResults, rawMaterialsAutomatic, operationResourcesAndStaff);

                // brandNewResults.cost1NptNeonatal.valueNptAutomatic =
                //     rawMaterialsAutomatic.neonatalRawMaterial.total *
                //     rawMaterialsAutomatic.neonatalRawMaterial.cantidad;

                // brandNewResults.costoTotalPreparacionNptNeonatal.valueNptAutomatic =
                //     brandNewResults.cost1NptNeonatal.valueNptAutomatic +
                //     operationResourcesAndStaff;


                // brandNewResults.valorTotalAdult.valueNptAutomatic = (
                //     brandNewResults.produccionDiaria.value *
                //     (brandNewResults.porcentajeAdulto.value / 100)) *
                //     rawMaterialsAutomatic.adultoRawMaterial.total;

                // brandNewResults.valorTotalPediatric.valueNptAutomatic = (
                //     brandNewResults.produccionDiaria.value *
                //     (brandNewResults.porcentajePediatric.value / 100)) *
                //     rawMaterialsAutomatic.pediatricoRawMaterial.total;

                // brandNewResults.valorTotalNeonatal.valueNptAutomatic = (
                //     brandNewResults.produccionDiaria.value *
                //     (brandNewResults.porcentajeNeonatal.value / 100)) *
                //     rawMaterialsAutomatic.neonatalRawMaterial.total;

                setTotalsByPopulationAutomatic(brandNewResults, rawMaterialsAutomatic);

                brandNewResults.valorTotalNutriciosDia.valueNptAutomatic =
                    brandNewResults.valorTotalAdult.valueNptAutomatic +
                    brandNewResults.valorTotalPediatric.valueNptAutomatic +
                    brandNewResults.valorTotalNeonatal.valueNptAutomatic;
            }


            const _printingResults = BuildTextPlainReport(brandNewResults);
            setResults(brandNewResults);
            setPrintingResults(_printingResults);
        } catch (err) {
            Logger.error(err);
        } finally {
            setStartComparision(false);
        }
    }

    useEffect(() => {
        if (startComparision === true) {
            Logger.info(`Start Comparision: ${startComparision}`);
            startProcess();
        }
    }, [startComparision]);

    return (
        <ComparisonContext.Provider
            value={{
                startComparision,
                results,
                printingResults,
                resetResults,
                setStartComparision
            }}
        >
            {children}
        </ComparisonContext.Provider>
    );
};

export const useComparisonContext = () => {
    const context = useContext(ComparisonContext);
    if (!context) {
        throw new Error('useComparisonContext must be used within a ComparisonProvider');
    }
    return context;
};
