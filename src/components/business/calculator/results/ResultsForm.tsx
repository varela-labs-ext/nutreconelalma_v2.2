
import ResultItemField from "./ResultItemField";
import ResultsFormHeaders from "./ResultsFormHeaders";
import JustValueInputEditor from "../../editors/JustValueInputEditor";
import MixingCenterResultsModel from "@/logic/models/MixingCenterResultsModel";
import DownloadReportButton from "../../reporting/DownloadReportButton";
import PreviewReportButton from "../../reporting/PreviewReportButton";
import { useState } from "react";
import FullScreenPreviewDialog from "../../reporting/FullScreenPreviewDialog";

interface ResultsFormProps {
    inData: MixingCenterResultsModel;
}

const ResultsForm = (props: ResultsFormProps) => {
    const [openPreview, setOpenPreview] = useState(false);

    return (
        <div>
            <div className="w-full pt-4">
                <h1 className="text-xl font-semibold text-green-600 mb-4">Resultados</h1>
                {/* <h3 className="text-lg font-semibold text-purple-500 mb-4">Resultados</h3> */}
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

                <div className="pt-10">
                    <div>
                        <h2 className="text-lg text-green-600 mb-4">Recursos Operativos</h2>
                        <ResultsFormHeaders />
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

                    <div className="pt-10">
                        <h2 className="text-lg text-green-600 mb-4">Personal Requerido</h2>
                        <ResultsFormHeaders />
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

                    <div className="pt-10">
                        <h2 className="text-lg text-green-600 mb-4">Costos por 1 Npt</h2>
                        <ResultsFormHeaders />
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

                    <div className="pt-10">
                        <h2 className="text-lg text-green-600 mb-4">Total de costos preparación 1 nutrición parenteral</h2>
                        <ResultsFormHeaders />
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

                    <div className="pt-10">
                        <h2 className="text-lg text-green-600 mb-4">Valor Total Nutriciones Día</h2>
                        <ResultsFormHeaders />
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
                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4"> */}
                    <div className="w-full pt-6 max-w-screen-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 px-4">

                        <DownloadReportButton />
                        <PreviewReportButton onClick={() => setOpenPreview(true)} />
                    </div>
                </div>
            </div>
            <div>
                <FullScreenPreviewDialog isOpen={openPreview} onClose={() => setOpenPreview(false)} />
            </div>
        </div>
    );
}

export default ResultsForm;