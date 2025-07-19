import CustomToggle from "@/ui/common/CustomToggle";
import ReadOnlyNumberField from "@/ui/common/ReadOnlyNumberField";
import { isValidNumber } from "@/utils/validators";

interface RawMaterialsOverviewProps {
    inTotalPerNpt: number;
    inShowDetails: boolean;
    inShowPresentation: boolean;
    onShowDetailsChange: (newValue: boolean) => void;
    onShowPresentation: (newValue: boolean) => void;
}

const RawMaterialsOverview = (props: RawMaterialsOverviewProps) => {
    const handleShowDetailsChange = () => {
        const value: boolean = !props.inShowDetails;
        props.onShowDetailsChange(value);
    }

    const handleShowDetailsToggleChange = (newValue: boolean) => {
        props.onShowDetailsChange(newValue);
    }

    const handleShowPresentationToggleChange = (newValue: boolean) => {
        props.onShowPresentation(newValue);
    }

    const getToggleButtonClass = (): string => {
        const base: string = "w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out";
        return `${base} ${props.inShowDetails ? "bg-blue-500" : "bg-gray-300"}`;
    }

    const getToggleButtonDivClass = (): string => {
        const base: string = "bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out";
        return `${base} ${props.inShowDetails ? "translate-x-4" : "translate-x-0"}`;
    }

    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-1 bg-gray-50 border border-gray-200 rounded-md">
                <div className="w-full lg:w-1/2 p-2">
                    <div className="flex items-center">
                        <div className="w-full px-4 py-2 pt-4">
                            <CustomToggle
                                label="Mostrar detalles"
                                value={props.inShowDetails}
                                onChange={handleShowDetailsToggleChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-full px-4 py-2">
                            {props.inShowDetails && (
                                <CustomToggle
                                    label="Mostrar Presentación ML"
                                    value={props.inShowPresentation}
                                    onChange={handleShowPresentationToggleChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-2">
                    <div className="flex items-center">
                        <label className="hidden lg:block w-1/2 text-sm text-gray-700">Total por NPT:</label>
                        <div className="w-full lg:w-1/2 px-2 py-1">
                            <ReadOnlyNumberField
                                label="Total por NPT:"
                                name="total"
                                value={props.inTotalPerNpt}
                                labelPosition="top"
                                labelAlways={false}
                                symbol="$"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RawMaterialsOverview;