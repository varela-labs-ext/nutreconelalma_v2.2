interface UnitCostDetailsHeadersProps {
    // inShowPresentation: boolean;
}

const UnitCostDetailsHeaders = (props: UnitCostDetailsHeadersProps) => {
    return (
        <div className="border-b border-gray-200 text-gray-600 text-sm">
            <div className="hidden md:block">
                <div className="flex flex-col md:flex-row md:items-start gap-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2 w-full pt-4 pb-4 font-medium">
                        <div className="md:col-span-1 w-full text-left">
                            <div className=" dark:text-white">
                                <p>Detalle</p>
                            </div>
                        </div>

                        <div className="md:col-span-1 w-full text-left">
                            <div className="  dark:text-white">
                                <span>Cantidad (Ml)</span>
                            </div>
                        </div>

                        <div className="md:col-span-1 w-full text-left dark:text-white">
                            <span>Costo Por Unidad</span>
                        </div>

                        <div className="md:col-span-1 w-full text-left dark:text-white">
                            <span>Costo Total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnitCostDetailsHeaders;