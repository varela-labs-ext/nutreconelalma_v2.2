import { Trash, Upload } from "lucide-react";

interface KeyLineFieldProps {
    inKeySelected: string;
    onShowData: (key: string) => void;
    onUpload: (key: string) => void;
    onKeyToDelete: (key: string | null) => void;
}

const KeyLineField = (props: KeyLineFieldProps) => {
    return (
        <div>
            <span
                className="flex-1 truncate cursor-pointer text-left"
                onClick={() => props.onShowData(props.inKeySelected)}
            >
                {props.inKeySelected}
            </span>

            <div className="flex gap-2 ml-4">
                <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => props.onUpload(props.inKeySelected)}
                    title="Upload"
                >
                    <Upload size={20} />
                </button>

                <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => props.onKeyToDelete(props.inKeySelected)}
                    title="Eliminar"
                >
                    <Trash size={20} />
                </button>
            </div>
        </div>
    );
};

export default KeyLineField;