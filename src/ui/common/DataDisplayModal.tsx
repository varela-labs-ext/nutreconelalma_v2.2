import { Dialog } from "@headlessui/react";

interface DataDisplayModalProps {
    isOpen: boolean;
    inSelectedKey: string;
    inSelectedValue: string;
    onSetShowModal: (show: boolean) => void;
}

const DataDisplayModal = (props: DataDisplayModalProps) => {

    return (
        <>
            <Dialog open={props.isOpen} onClose={() => props.onSetShowModal(false)} className="fixed inset-0 z-50">
                {/* Fondo oscuro */}
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

                {/* Contenedor general */}
                <div className="fixed inset-0 flex items-start justify-center px-4 my-4">
                    {/* Caja blanca del preview */}
                    <div className="relative w-full max-w-[850px] max-h-[calc(100dvh-2rem)] sm:aspect-[8.5/11] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden" >
                        {/* Encabezado */}
                        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300">
                            <h3 className="text-lg font-semibold mb-2">{props.inSelectedKey.replace("COMPUTER_DATA_KEY:", "")}</h3>
                            <button
                                onClick={() => props.onSetShowModal(false)}
                                className="text-2xl font-bold text-black hover:text-red-600"
                            >
                                ×
                            </button>
                        </div>

                        {/* Contenedor scrollable */}
                        <div className="flex-1 overflow-y-auto px-4 py-4">
                            <div className="h-full">
                                <pre className="h-full w-full bg-gray-100 p-4 rounded overflow-x-auto overflow-y-auto whitespace-pre-wrap">
                                    {props.inSelectedValue}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default DataDisplayModal;
