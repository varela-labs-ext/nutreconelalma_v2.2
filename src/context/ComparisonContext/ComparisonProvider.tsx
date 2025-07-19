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



    const startProcess = (): void => {
        try {
            Logger.info("Start Results Process", getClassName(this));

            const brandNewResults: MixingCenterResultsModel = new MixingCenterResultsModel();


            const dataBackupPayload: ComputerBigGroupModel = buildBackupPayload();

            const summaryManual = calculateResources(dataBackupPayload.backup_MC_Manual_Resources);
            calculateResourcesTotal(summaryManual, true);

            const summaryAutomatic = calculateResources(dataBackupPayload.backup_MC_Automatic_Resources);
            calculateResourcesTotal(summaryAutomatic, false);

            if (dataBackupPayload.mixingCenterSettings !== null) {
                const settings: MixingCenterSettingsModel = dataBackupPayload.mixingCenterSettings;

                brandNewResults.lineasProduccion.value = settings.productionLines;
                brandNewResults.produccionDiaria.value = settings.productionPerDay;
                brandNewResults.produccionMensual.value = getProductionPerMonth(settings);

                brandNewResults.porcentajeAdulto.value = settings.percentPerAdult;
                brandNewResults.porcentajePediatric.value = settings.percentPerPediatric;
                brandNewResults.porcentajeNeonatal.value = settings.percentPerNeonatal;
            }


            brandNewResults.PersonalProtectiveMaterialsCosts.valueNptManual = summaryManual.protectiveMaterialsTotal;
            brandNewResults.hygieneNCleaningMaterialsCosts.valueNptManual = summaryManual.hygieneNCleanlinessTotal;
            brandNewResults.maintenanceCosts.valueNptManual = summaryManual.maintenanceTotal;
            brandNewResults.productionCosts.valueNptManual = summaryManual.productionTotal;
            brandNewResults.sterileEquipmentCosts.valueNptManual = summaryManual.sterilizedEquipmentTotal;
            brandNewResults.automatedEquipmentCosts.valueNptManual = summaryManual.automatedEquipmentTotal;

            brandNewResults.PersonalProtectiveMaterialsCosts.valueNptAutomatic = summaryAutomatic.protectiveMaterialsTotal;
            brandNewResults.hygieneNCleaningMaterialsCosts.valueNptAutomatic = summaryAutomatic.hygieneNCleanlinessTotal;
            brandNewResults.maintenanceCosts.valueNptAutomatic = summaryAutomatic.maintenanceTotal;
            brandNewResults.productionCosts.valueNptAutomatic = summaryAutomatic.productionTotal;
            brandNewResults.sterileEquipmentCosts.valueNptAutomatic = summaryAutomatic.sterilizedEquipmentTotal;
            brandNewResults.automatedEquipmentCosts.valueNptAutomatic = summaryAutomatic.automatedEquipmentTotal;

            if (dataBackupPayload.backup_MC_Manual_Resources !== null) {
                const resourcesManual: MixingCenterOperatingResourcesModel = dataBackupPayload.backup_MC_Manual_Resources;

                brandNewResults.chemicalStaffHours.valueNptManual = resourcesManual.staffChemistSalary.horasPersonalFarmaceuticoPorNP.value;
                brandNewResults.costPerChemicalStaff.valueNptManual = resourcesManual.staffChemistSalary.costoPersonalFarmaceuticoPorPreparacion.value;

                brandNewResults.auxiliaryStaffHours.valueNptManual = resourcesManual.staffAssistantSalary.horasPersonalFarmaceuticoPorNP.value;
                brandNewResults.costPerAuxiliaryStaff.valueNptManual = resourcesManual.staffAssistantSalary.costoPersonalFarmaceuticoPorPreparacion.value;
                brandNewResults.automatedEquipmentCosts.valueNptManual = 0;
            }

            if (dataBackupPayload.backup_MC_Automatic_Resources !== null) {
                const resourcesAutomatic: MixingCenterOperatingResourcesModel = dataBackupPayload.backup_MC_Automatic_Resources;

                brandNewResults.chemicalStaffHours.valueNptAutomatic = resourcesAutomatic.staffChemistSalary.horasPersonalFarmaceuticoPorNP.value;
                brandNewResults.costPerChemicalStaff.valueNptAutomatic = resourcesAutomatic.staffChemistSalary.costoPersonalFarmaceuticoPorPreparacion.value;

                brandNewResults.auxiliaryStaffHours.valueNptAutomatic = resourcesAutomatic.staffAssistantSalary.horasPersonalFarmaceuticoPorNP.value;
                brandNewResults.costPerAuxiliaryStaff.valueNptAutomatic = resourcesAutomatic.staffAssistantSalary.costoPersonalFarmaceuticoPorPreparacion.value;

            }

            if (dataBackupPayload.backup_MC_Manual_RawMaterials !== null) {
                const rawMaterials: MixingCenterRawMaterialsModel = dataBackupPayload.backup_MC_Manual_RawMaterials;

                const operationResourcesAndStaff: number = summaryManual.totalSinStaff +
                    brandNewResults.costPerChemicalStaff.valueNptManual +
                    brandNewResults.costPerAuxiliaryStaff.valueNptManual;


                brandNewResults.cost1NptAdult.valueNptManual =
                    rawMaterials.adultoRawMaterial.total *
                    rawMaterials.adultoRawMaterial.cantidad;

                brandNewResults.costoTotalPreparacionNptAdult.valueNptManual =
                    brandNewResults.cost1NptAdult.valueNptManual +
                    operationResourcesAndStaff;


                brandNewResults.cost1NptPediatric.valueNptManual =
                    rawMaterials.pediatricoRawMaterial.total *
                    rawMaterials.pediatricoRawMaterial.cantidad;

                brandNewResults.costoTotalPreparacionNptPediatric.valueNptManual =
                    brandNewResults.cost1NptPediatric.valueNptManual +
                    operationResourcesAndStaff;


                brandNewResults.cost1NptNeonatal.valueNptManual =
                    rawMaterials.neonatalRawMaterial.total *
                    rawMaterials.neonatalRawMaterial.cantidad;

                brandNewResults.costoTotalPreparacionNptNeonatal.valueNptManual =
                    brandNewResults.cost1NptNeonatal.valueNptManual +
                    operationResourcesAndStaff;

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


                brandNewResults.cost1NptAdult.valueNptAutomatic =
                    rawMaterialsAutomatic.adultoRawMaterial.total *
                    rawMaterialsAutomatic.adultoRawMaterial.cantidad;

                brandNewResults.costoTotalPreparacionNptAdult.valueNptAutomatic =
                    brandNewResults.cost1NptAdult.valueNptAutomatic +
                    operationResourcesAndStaff;


                brandNewResults.cost1NptPediatric.valueNptAutomatic =
                    rawMaterialsAutomatic.pediatricoRawMaterial.total *
                    rawMaterialsAutomatic.pediatricoRawMaterial.cantidad;

                brandNewResults.costoTotalPreparacionNptPediatric.valueNptAutomatic =
                    brandNewResults.cost1NptPediatric.valueNptAutomatic +
                    operationResourcesAndStaff;


                brandNewResults.cost1NptNeonatal.valueNptAutomatic =
                    rawMaterialsAutomatic.neonatalRawMaterial.total *
                    rawMaterialsAutomatic.neonatalRawMaterial.cantidad;

                brandNewResults.costoTotalPreparacionNptNeonatal.valueNptAutomatic =
                    brandNewResults.cost1NptNeonatal.valueNptAutomatic +
                    operationResourcesAndStaff;


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
