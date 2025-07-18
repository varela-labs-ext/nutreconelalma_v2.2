// src/components/pdf/DownloadReportButton.tsx
import { FC, useState } from 'react';
import { FileDownIcon, Loader2Icon } from 'lucide-react';
import { PlainTextReportPDF } from './PlainTextReportPDF';
import { pdf } from '@react-pdf/renderer';

const DownloadReportButton: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);

        // 1. Generar el PDF en memoria
        const blob = await pdf(<PlainTextReportPDF />).toBlob();

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
