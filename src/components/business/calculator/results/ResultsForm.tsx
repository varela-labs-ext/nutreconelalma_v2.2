//ResultsForm

import ResultItemModel from "@/logic/models/ResultItemModel";

import ResultItemField from "./ResultItemField";
import ResultsFormHeaders from "./ResultsFormHeaders";
import JustValueInputEditor from "../../editors/JustValueInputEditor";
import MixingCenterResultsModel from "@/logic/models/MixingCenterResultsModel";

interface ResultsFormProps {
    inData: MixingCenterResultsModel;
}

const ResultsForm = (props: ResultsFormProps) => {

    return (
        <div>
            <div className="w-full">
                <h3 className="text-lg font-semibold text-purple-500 mb-4">Resultados</h3>
                <div>
                    <JustValueInputEditor
                        inData={props.inData.lineasProduccion}
                        inName="inProductionLines"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <JustValueInputEditor
                        inData={props.inData.produccionDiaria}
                        inName="inProductionPerDay"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <JustValueInputEditor
                        inData={props.inData.produccionMensual}
                        inName="inProductionPerMonth"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <div></div>
                    <JustValueInputEditor
                        inData={props.inData.porcentajeAdulto}
                        inName="porcentajeAdulto"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <JustValueInputEditor
                        inData={props.inData.porcentajePediatric}
                        inName="porcentajePediatric"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <JustValueInputEditor
                        inData={props.inData.porcentajeNeonatal}
                        inName="porcentajeNeonatal"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                </div>

                <ResultsFormHeaders />

                <div className="p-2">

                    <div>
                        <h3>Recursos Operativos</h3>
                        <div>
                            <ResultItemField
                                inData={props.inData.PersonalProtectiveMaterialsCosts}
                                inName="PersonalProtectiveMaterialsCosts"
                            />
                            <ResultItemField
                                inData={props.inData.hygieneNCleaningMaterialsCosts}
                                inName="hygieneNCleaningMaterialsCosts"
                            />
                            <ResultItemField
                                inData={props.inData.maintenanceCosts}
                                inName="maintenanceCosts"
                            />
                            <ResultItemField
                                inData={props.inData.productionCosts}
                                inName="productionCosts"
                            />
                            <ResultItemField
                                inData={props.inData.sterileEquipmentCosts}
                                inName="sterileEquipmentCosts"
                            />
                            <ResultItemField
                                inData={props.inData.automatedEquipmentCosts}
                                inName="automatedEquipmentCosts"
                            />
                        </div>
                    </div>

                    <div>
                        <h3>Personal Requerido</h3>
                        <div>
                            <ResultItemField
                                inData={props.inData.chemicalStaffHours}
                                inName="chemicalStaffHours"
                            />
                            <ResultItemField
                                inData={props.inData.costPerChemicalStaff}
                                inName="costPerChemicalStaff"
                            />

                            <ResultItemField
                                inData={props.inData.auxiliaryStaffHours}
                                inName="auxiliaryStaffHours"
                            />
                            <ResultItemField
                                inData={props.inData.costPerAuxiliaryStaff}
                                inName="costPerAuxiliaryStaff"
                            />
                        </div>
                    </div>

                    <div>
                        <h3>Costos por 1 Npt</h3>
                        <div>
                            <ResultItemField
                                inData={props.inData.cost1NptAdult}
                                inName="cost1NptAdult"
                            />
                            <ResultItemField
                                inData={props.inData.cost1NptPediatric}
                                inName="cost1NptPediatric"
                            />
                            <ResultItemField
                                inData={props.inData.cost1NptNeonatal}
                                inName="cost1NptNeonatal"
                            />
                        </div>
                    </div>

                    <div>
                        <h3>Total de costos preparación 1 nutrición parenteral</h3>
                        <div>
                            <ResultItemField
                                inData={props.inData.costoTotalPreparacionNptAdult}
                                inName="costoTotalPreparacionNptAdult"
                            />
                            <ResultItemField
                                inData={props.inData.costoTotalPreparacionNptPediatric}
                                inName="costoTotalPreparacionNptPediatric"
                            />
                            <ResultItemField
                                inData={props.inData.costoTotalPreparacionNptNeonatal}
                                inName="costoTotalPreparacionNptNeonatal"
                            />
                        </div>
                    </div>

                    <div>
                        <h3>VALOR TOTAL NUTRICIONES DIA</h3>
                        <div>
                            <ResultItemField
                                inData={props.inData.valorTotalAdult}
                                inName="valorTotalAdult"
                            />
                            <ResultItemField
                                inData={props.inData.valorTotalPediatric}
                                inName="valorTotalPediatric"
                            />
                            <ResultItemField
                                inData={props.inData.valorTotalNeonatal}
                                inName="valorTotalNeonatal"
                            />

                            <div>
                                <ResultItemField
                                    inData={props.inData.valorTotalNutriciosDia}
                                    inName="valorTotalNutriciosDia"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsForm;