

interface DataDisplayModalProps {
    inSelectedKey: string;
    inSelectedValue: string;
    onSetShowModal: (show: boolean) => void;
}


const DataDisplayModal = (props: DataDisplayModalProps) => {

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg relative">
                <h3 className="text-lg font-semibold mb-2">{props.inSelectedKey}</h3>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto max-h-[400px]">
                    {props.inSelectedValue}
                </pre>
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    onClick={() => props.onSetShowModal(false)}
                >
                    ✖
                </button>
            </div>
        </div>
    );
}

export default DataDisplayModal;
