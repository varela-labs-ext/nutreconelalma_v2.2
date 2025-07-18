// src/components/pdf/PreviewReportButton.tsx
import { FC } from 'react';
import { EyeIcon, Loader2Icon } from 'lucide-react';

type PreviewReportButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    label?: string;
};

const PreviewReportButton: FC<PreviewReportButtonProps> = ({
    onClick,
    disabled = false,
    loading = false,
    label = 'Vista previa',
}) => {
    const isInactive = disabled || loading;

    return (
        <button
            onClick={onClick}
            disabled={isInactive}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition duration-200
        ${isInactive ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
        >
            {loading ? (
                <Loader2Icon className="w-4 h-4 animate-spin" />
            ) : (
                <EyeIcon className={`w-4 h-4 ${disabled ? 'opacity-50' : ''}`} />
            )}
            {loading ? 'Cargando...' : label}
        </button>
    );
};

export default PreviewReportButton;
