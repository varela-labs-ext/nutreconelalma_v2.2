interface YesNoModalProps {
    mainTitle: string;
    onResult: (inResult: boolean) => void;
}

const YesNoModal = (props: YesNoModalProps) => {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-4 text-purple-600">
                    {props.mainTitle}
                </h3>
                <div className="flex justify-center gap-4">
                    <button
                        className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-700"
                        onClick={() => props.onResult(true)}
                    >
                        Sí
                    </button>
                    <button
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={() => props.onResult(false)}
                    >
                        Cancelar
                    </button>

                </div>
            </div>
        </div >
    );
}

export default YesNoModal;