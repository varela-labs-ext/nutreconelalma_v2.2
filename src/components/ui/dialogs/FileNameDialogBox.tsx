import React, { useState, useEffect } from "react";

type FileNameDialogBoxProps = {
    isOpen: boolean;
    onConfirm: (fileName: string) => void;
    onCancel: () => void;
};

const FileNameDialogBox = (props: FileNameDialogBoxProps) => {
    const [fileName, setFileName] = useState("");
    const [hasError, setHasError] = useState(false);

    const validateFileName = (value: string) => {
        const allowedRegex = /^[A-Za-z0-9+\-.,|[\]()&%$#@]*$/;
        return allowedRegex.test(value) && value.length <= 64;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFileName(value);
        setHasError(!validateFileName(value));
    };

    const handleConfirm = () => {
        if (!hasError && fileName.trim() !== "") {
            props.onConfirm(fileName.trim());
        }
    };

    const handleCancel = () => {
        setFileName("");
        setHasError(false);
        props.onCancel();
    };

    useEffect(() => {
        if (!props.isOpen) {
            setFileName("");
            setHasError(false);
        }
    }, [props.isOpen]);

    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-md mx-4 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">
                    Definir nombre de archivo
                </h2>
                <input
                    type="text"
                    value={fileName}
                    onChange={handleInputChange}
                    maxLength={64}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${hasError
                        ? "border-orange-500 focus:ring-orange-500"
                        : "border-purple-500 focus:ring-2 focus:ring-purple-500"
                        }`}
                    placeholder="Ingrese el nombre del archivo"
                />
                {hasError && (
                    <p className="text-sm text-orange-600 mt-1">
                        Solo se permiten caracteres alfanuméricos y: + - . , | [ ] ( ) & % $ # @
                    </p>
                )}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={handleCancel}
                        className="min-w-[120px] px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={hasError || fileName.trim() === ""}
                        className={`min-w-[120px] px-4 py-2 rounded-md text-white font-semibold ${hasError || fileName.trim() === ""
                            ? "bg-purple-300 cursor-not-allowed"
                            : "bg-purple-600 hover:bg-purple-700"
                            }`}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileNameDialogBox;
