
interface DeleteAllKeysModalProps {
    onDeleteAll: (inFlag: boolean) => void;
}

const DeleteAllKeysModal = (props: DeleteAllKeysModalProps) => {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                    ¿Eliminar <u>todas</u> las claves?
                </h3>
                <div className="flex justify-center gap-4">
                    <button
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={() => props.onDeleteAll(false)}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={() => props.onDeleteAll(true)}
                    >
                        Sí, eliminar todo
                    </button>
                </div>
            </div>
        </div >
    );
};

export default DeleteAllKeysModal;
