
import ResultItemField from "./ResultItemField";
import ResultsFormHeaders from "./ResultsFormHeaders";
import JustValueInputEditor from "../../editors/JustValueInputEditor";
import MixingCenterResultsModel from "@/logic/models/MixingCenterResultsModel";
import DownloadReportButton from "../../reporting/DownloadReportButton";
import PreviewReportButton from "../../reporting/PreviewReportButton";
import { useState } from "react";
import FullScreenPreviewDialog from "../../reporting/FullScreenPreviewDialog";
import { useComparisonContext } from "@/context/ComparisonContext/ComparisonProvider";
import { pdf } from "@react-pdf/renderer";
import { PlainTextReportPDF } from "../../reporting/PlainTextReportPDF";
import { Logger } from '../../../../utils/logger';
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";

interface ResultsFormProps {
}

const ResultsForm = (props: ResultsFormProps) => {
    const { setIsProcessing } = useMixingCenterContext();
    const { results, printingResults } = useComparisonContext();
    const [openPreview, setOpenPreview] = useState(false);


    const generatePdfReport = async (): Promise<void> => {
        try {
            setIsProcessing(true);

            // 1. Generar el PDF en memoria
            const blob = await pdf(<PlainTextReportPDF inPrintResuls={printingResults} />).toBlob();

            // 2. Simular retardo de 1 segundo
            await new Promise((res) => setTimeout(res, 2000));

            // 3. Crear URL temporal y disparar descarga
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'reporte.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url); // Limpieza
        } catch (err) {
            Logger.error(err);
        } finally {
            setIsProcessing(false);
        }
    }

    const handleOnDownloadReport = (): void => {
        generatePdfReport().then(() => {
            Logger.info("REPORT PDF DONE");
        }
        ).catch(() => {
            Logger.error("REPORT PDF ERROR");
        });
    }

    return (
        <div>
            <div className="w-full pt-4">
                <h1 className="text-xl font-semibold text-green-600 mb-4">Resultados</h1>
                {/* <h3 className="text-lg font-semibold text-purple-500 mb-4">Resultados</h3> */}
                <div>
                    <JustValueInputEditor
                        inData={results.lineasProduccion}
                        inName="inProductionLines"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <JustValueInputEditor
                        inData={results.produccionDiaria}
                        inName="inProductionPerDay"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <JustValueInputEditor
                        inData={results.produccionMensual}
                        inName="inProductionPerMonth"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <div></div>
                    <JustValueInputEditor
                        inData={results.porcentajeAdulto}
                        inName="porcentajeAdulto"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <JustValueInputEditor
                        inData={results.porcentajePediatric}
                        inName="porcentajePediatric"
                        isReadOnly={true}
                        onChange={(A, B) => { }}
                    />
                    <JustValueInputEditor
                        inData={results.porcentajeNeonatal}
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
                                inData={results.PersonalProtectiveMaterialsCosts}
                                inName="PersonalProtectiveMaterialsCosts"
                            />
                            <ResultItemField
                                inData={results.hygieneNCleaningMaterialsCosts}
                                inName="hygieneNCleaningMaterialsCosts"
                            />
                            <ResultItemField
                                inData={results.maintenanceCosts}
                                inName="maintenanceCosts"
                            />
                            <ResultItemField
                                inData={results.productionCosts}
                                inName="productionCosts"
                            />
                            <ResultItemField
                                inData={results.sterileEquipmentCosts}
                                inName="sterileEquipmentCosts"
                            />
                            <ResultItemField
                                inData={results.automatedEquipmentCosts}
                                inName="automatedEquipmentCosts"
                            />
                        </div>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-lg text-green-600 mb-4">Personal Requerido</h2>
                        <ResultsFormHeaders />
                        <div>
                            <ResultItemField
                                inData={results.chemicalStaffHours}
                                inName="chemicalStaffHours"
                            />
                            <ResultItemField
                                inData={results.costPerChemicalStaff}
                                inName="costPerChemicalStaff"
                            />

                            <ResultItemField
                                inData={results.auxiliaryStaffHours}
                                inName="auxiliaryStaffHours"
                            />
                            <ResultItemField
                                inData={results.costPerAuxiliaryStaff}
                                inName="costPerAuxiliaryStaff"
                            />
                        </div>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-lg text-green-600 mb-4">Costos por 1 Npt</h2>
                        <ResultsFormHeaders />
                        <div>
                            <ResultItemField
                                inData={results.cost1NptAdult}
                                inName="cost1NptAdult"
                            />
                            <ResultItemField
                                inData={results.cost1NptPediatric}
                                inName="cost1NptPediatric"
                            />
                            <ResultItemField
                                inData={results.cost1NptNeonatal}
                                inName="cost1NptNeonatal"
                            />
                        </div>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-lg text-green-600 mb-4">Total de costos preparación 1 nutrición parenteral</h2>
                        <ResultsFormHeaders />
                        <div>
                            <ResultItemField
                                inData={results.costoTotalPreparacionNptAdult}
                                inName="costoTotalPreparacionNptAdult"
                            />
                            <ResultItemField
                                inData={results.costoTotalPreparacionNptPediatric}
                                inName="costoTotalPreparacionNptPediatric"
                            />
                            <ResultItemField
                                inData={results.costoTotalPreparacionNptNeonatal}
                                inName="costoTotalPreparacionNptNeonatal"
                            />
                        </div>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-lg text-green-600 mb-4">Valor Total Nutriciones Día</h2>
                        <ResultsFormHeaders />
                        <div>
                            <ResultItemField
                                inData={results.valorTotalAdult}
                                inName="valorTotalAdult"
                            />
                            <ResultItemField
                                inData={results.valorTotalPediatric}
                                inName="valorTotalPediatric"
                            />
                            <ResultItemField
                                inData={results.valorTotalNeonatal}
                                inName="valorTotalNeonatal"
                            />

                            <div>
                                <ResultItemField
                                    inData={results.valorTotalNutriciosDia}
                                    inName="valorTotalNutriciosDia"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4"> */}
                    <div className="w-full pt-6 max-w-screen-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 px-4">

                        <DownloadReportButton onClick={handleOnDownloadReport} />
                        <PreviewReportButton onClick={() => setOpenPreview(true)} />
                    </div>
                </div>
            </div>
            <div>
                <FullScreenPreviewDialog
                    isOpen={openPreview}
                    onClose={() => setOpenPreview(false)}
                    onClick={handleOnDownloadReport}
                />
            </div>
        </div>
    );
}

export default ResultsForm;