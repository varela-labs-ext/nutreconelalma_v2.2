interface RawMaterialsDetailsHeaderProps {
    inShowDetails: boolean;
}

const RawMaterialsDetailsHeader = (props: RawMaterialsDetailsHeaderProps) => {
    return (
        <div className="hidden md:block p-1">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-2 w-full">
                    <div className="md:col-span-1 w-full text-left">
                        <div className="text-sm text-gray-900 dark:text-white">
                            <span>Detalle</span>
                        </div>
                    </div>

                    <div className="md:col-span-1 w-full text-left text-sm text-gray-900 dark:text-white">
                        {props.inShowDetails && (
                            <span>Presentacion (Ml)</span>
                        )}
                    </div>
                    <div className="md:col-span-1 w-full text-left">
                        <div className="text-sm text-gray-900 dark:text-white">
                            <span>Cantidad (Ml)</span>
                        </div>
                    </div>

                    <div className="md:col-span-1 w-full text-left text-sm text-gray-900 dark:text-white">
                        <span>Costo Por Unidad</span>
                    </div>

                    <div className="md:col-span-1 w-full text-left text-sm text-gray-900 dark:text-white">
                        <span>Costo Total</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RawMaterialsDetailsHeader;