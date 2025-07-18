import React, { useState, useEffect } from "react";

type SelectFileDialogBoxProps = {
    isOpen: boolean;
    files: string[];
    onConfirm: (selectedFile: string) => void;
    onCancel: () => void;
};

const SelectFileDialogBox = (props: SelectFileDialogBoxProps) => {
    const [selectedFile, setSelectedFile] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedFile(value);
        setHasError(value === "");
    };

    const handleConfirm = () => {
        if (!hasError && selectedFile !== "") {
            props.onConfirm(selectedFile);
        }
    };

    const handleCancel = () => {
        setSelectedFile("");
        setHasError(false);
        props.onCancel();
    };

    useEffect(() => {
        if (!props.isOpen) {
            setSelectedFile("");
            setHasError(false);
        }
    }, [props.isOpen]);

    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md mx-4 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">
                    Seleccionar archivo
                </h2>

                <select
                    value={selectedFile}
                    onChange={handleSelectionChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${hasError
                        ? "border-orange-500 focus:ring-orange-500"
                        : "border-purple-500 focus:ring-2 focus:ring-purple-500"
                        }`}
                >
                    {props.files.length === 0 && (
                        <option disabled>Cargando archivos...</option>
                    )}

                    {props.files.length > 0 && (
                        <option value="">-- Selecciona un archivo --</option>
                    )}

                    {props.files.length > 0 && (
                        props.files.map((fileName) => (
                            <option key={fileName} value={fileName}>
                                {fileName}
                            </option>
                        ))
                    )}
                </select>

                {hasError && (
                    <p className="text-sm text-orange-600 mt-1">
                        Debe seleccionar un archivo válido antes de continuar.
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
                        disabled={hasError || selectedFile === ""}
                        className={`min-w-[120px] px-4 py-2 rounded-md text-white font-semibold ${hasError || selectedFile === ""
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

export default SelectFileDialogBox;
