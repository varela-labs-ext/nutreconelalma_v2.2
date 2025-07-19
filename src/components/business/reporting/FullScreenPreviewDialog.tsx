import { Dialog } from '@headlessui/react';
import { PlainTextReportHTML } from './PlainTextReportHTML';
import { DownloadIcon } from 'lucide-react';

interface FullScreenPreviewDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onClick: () => void;
};

const FullScreenPreviewDialog = (props: FullScreenPreviewDialogProps) => {
    const handleDownload = async () => {
        // const blob = await pdf(<PlainTextReportPDF />).toBlob();
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement('a');
        // a.href = url;
        // a.download = 'reporte.pdf';
        // document.body.appendChild(a);
        // a.click();
        // document.body.removeChild(a);
        // URL.revokeObjectURL(url);
        props.onClose();
    };

    if (!props.isOpen) return null;

    return (
        <Dialog open={props.isOpen} onClose={props.onClose} className="fixed inset-0 z-50">
            {/* Fondo oscuro */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={props.onClose}
            />

            {/* Contenedor general */}
            <div className="fixed inset-0 flex items-start justify-center px-4 my-4">
                {/* Caja blanca del preview */}
                <div
                    className="relative w-full max-w-[850px] max-h-[calc(100dvh-2rem)] sm:aspect-[8.5/11]
  bg-white rounded-lg shadow-lg flex flex-col overflow-hidden"
                >
                    {/* Encabezado */}
                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300">
                        <button
                            onClick={handleDownload}
                            className="text-sm text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1"
                        >
                            <DownloadIcon className="w-4 h-4" />
                            Descargar
                        </button>

                        <button
                            onClick={props.onClose}
                            className="text-2xl font-bold text-black hover:text-red-600"
                        >
                            ×
                        </button>
                    </div>

                    {/* Contenido scrollable */}
                    <div className="flex-1 overflow-y-auto px-4 py-4">
                        <PlainTextReportHTML />
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default FullScreenPreviewDialog;
