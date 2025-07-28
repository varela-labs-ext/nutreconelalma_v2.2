interface ClinicalInputsHeaderProps {
    inShowPresentation: boolean;
}

const ClinicalInputsHeader = (props: ClinicalInputsHeaderProps) => {
    return (
        <div className="border-b border-gray-200 text-gray-600 text-sm">
            <div className="hidden md:block">
                <div className="flex flex-col md:flex-row md:items-start gap-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-7 gap-2 w-full pt-4 pb-4 font-medium">
                        <div className="md:col-span-2 w-full text-left">
                            <div className="">
                                <p>Detalle</p>
                            </div>
                        </div>

                        <div className="md:col-span-1 w-full text-left">
                            {props.inShowPresentation && (
                                <span>Presentacion ML</span>
                            )}
                        </div>
                        <div className="md:col-span-1 w-full text-left">
                            <span>Cantidad ML</span>
                        </div>
                        <div className="md:col-span-1 w-full text-left">
                            <span>Cantidad Unidad</span>
                        </div>
                        <div className="md:col-span-1 w-full text-left">
                            <span>Costo Unidad</span>
                        </div>

                        <div className="md:col-span-1 w-full text-left">
                            <span>Costo Total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClinicalInputsHeader;