// src/components/pdf/FullScreenPreviewDialog.tsx
import { Dialog } from '@headlessui/react';
import { PlainTextReportHTML } from './PlainTextReportHTML';
import { DownloadIcon } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { PlainTextReportPDF } from './PlainTextReportPDF';

const handleDownload = async () => {
    const blob = await pdf(<PlainTextReportPDF />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reporte.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

const FullScreenPreviewDialog = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
            <div className="relative bg-white w-full h-screen max-w-[850px] sm:aspect-[8.5/11] sm:h-auto sm:rounded-xl shadow-lg overflow-auto">

                <div className="mt-1 flex justify-between items-start p-4">
                    {/* <div className="flex justify-end p-4"> */}
                    {/* Botón tipo link */}
                    <div className='pt-2'>
                        <button
                            onClick={handleDownload}
                            className="text-sm text-purple-700 hover:underline hover:text-purple-900 flex items-center gap-1"
                        >
                            <DownloadIcon className="w-4 h-4" />
                            Descargar
                        </button>
                    </div>

                    {/* Botón de cerrar */}
                    <button
                        onClick={onClose}
                        className="text-2xl font-bold text-black hover:text-red-600"
                    >
                        ×
                    </button>
                </div>
                <div className="px-4 pb-4">
                    <PlainTextReportHTML />
                </div>
            </div>
        </div>
    );
};

export default FullScreenPreviewDialog;