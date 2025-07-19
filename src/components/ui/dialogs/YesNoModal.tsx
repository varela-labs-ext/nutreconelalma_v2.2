interface YesNoModalProps {
    mainTitle: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const YesNoModal = (props: YesNoModalProps) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-4 text-purple-600">
                    {props.mainTitle}
                </h3>
                <div className="flex justify-center gap-4">
                    <button
                        className="min-w-[120px] bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={() => props.onCancel()}
                    >
                        Cancelar
                    </button>
                    <button
                        className="min-w-[120px] bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-700"
                        onClick={() => props.onConfirm()}
                    >
                        Sí
                    </button>
                </div>
            </div>
        </div >
    );
}

export default YesNoModal;