// src/components/pdf/DownloadReportButton.tsx
import { FC, useState } from 'react';
import { FileDownIcon, Loader2Icon } from 'lucide-react';
import { PlainTextReportPDF } from './PlainTextReportPDF';
import { pdf } from '@react-pdf/renderer';

interface DownloadReportButtonProps {
    onClick: () => void;
}


const DownloadReportButton = (props: DownloadReportButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);

        props.onClick();

        setIsLoading(false);
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isLoading}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition duration-200
        ${isLoading ? 'bg-gray-400 cursor-wait' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
        >
            {isLoading ? (
                <Loader2Icon className="w-4 h-4 animate-spin" />
            ) : (
                <FileDownIcon className="w-4 h-4" />
            )}
            {isLoading ? 'Generando...' : 'Descargar PDF'}
        </button>
    );
};

export default DownloadReportButton;
