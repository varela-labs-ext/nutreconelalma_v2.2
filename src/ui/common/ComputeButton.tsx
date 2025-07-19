type ComputeButtonProps = {
    disabled?: boolean;
    onClick: () => void;
};

const ComputeButton = (props: ComputeButtonProps) => {
    return (
        <div className="w-full flex justify-center sm:justify-start">
            <button
                type="button"
                onClick={props.onClick}
                disabled={props.disabled}
                className={`bg-green-500 text-gray-100 font-bold text-base px-10 py-2 rounded-3xl 
                    ${props.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600 hover:text-white hover:shadow-md"}
                    w-4/5 sm:w-auto mx-auto block`}
            >
                Calcular
            </button>
        </div>
    );
};

export default ComputeButton;
