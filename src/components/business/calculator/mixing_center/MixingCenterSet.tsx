import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import MixingCenterBasics from "./MixingCenterBasics";
import MixingCenterPercentages from "./MixingCenterPercentages";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import { useState } from "react";
import { isValidNumber } from "@/utils/validators";
import MixingCenterSelector from "./MixingCenterSelector";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";


interface MixingCenterSetProps {
    inData: MixingCenterSettingsModel;
    onChange: (inNewData: MixingCenterSettingsModel) => void;
}

const MixingCenterSet = (props: MixingCenterSetProps) => {

    const [percentageErrors, setPercentageErrors] = useState({
        percentPerAdult: false,
        percentPerPediatric: false,
        percentPerNeonatal: false
    });

    const validatePercentages = (field: "percentPerAdult" | "percentPerPediatric" | "percentPerNeonatal", inData: MixingCenterSettingsModel): void => {
        if (inData) {
            const totalPercent = inData.percentPerAdult + inData.percentPerPediatric + inData.percentPerNeonatal;
            const newErrors = {
                percentPerAdult: false,
                percentPerPediatric: false,
                percentPerNeonatal: false
            };

            if (totalPercent !== 100) {
                console.error("Error: The total percentage of nutrition types must equal 100%. Current total: ", totalPercent);
                newErrors[field] = true;
                setPercentageErrors(newErrors);
            } else {
                setPercentageErrors(newErrors);
            }
        } else {
            console.error("Error: props.inData is null when trying to validate percentages.");
        }
    }

    const handleOnPopulationTypeChange = (newPopulationType: PopulationTypeIdEnum): void => {
        if (props.inData) {
            const newData = {
                ...props.inData,
                populationType: newPopulationType
            };
            props.onChange(newData);
        } else {
            console.error("Error: props.inData is null when trying to change population type.");
        }
    }

    const handleOnProductionLinesChange = (newProductionLines: number): void => {
        if (props.inData && isValidNumber(newProductionLines)) {
            const newData = {
                ...props.inData,
                productionLines: newProductionLines
            };
            props.onChange(newData);
        } else {
            console.error("Error: props.inData is null when trying to change production lines.");
        }
    }

    const handleOnProductionPerDayChange = (newProductionPerDay: number): void => {
        if (props.inData && isValidNumber(newProductionPerDay)) {
            const newData = {
                ...props.inData,
                productionPerDay: newProductionPerDay
            };
            props.onChange(newData);
        } else {
            console.error("Error: props.inData is null when trying to change production per day.");
        }
    }

    const handleOnPercentPerAdultChange = (newPercentAdult: number): void => {
        if (props.inData && isValidNumber(newPercentAdult)) {
            const newData = {
                ...props.inData,
                percentPerAdult: newPercentAdult
            };
            validatePercentages("percentPerAdult", newData);
            props.onChange(newData);
        } else {
            console.error("Error: props.inData is null when trying to change percent per adult.");
        }
    }

    const handleOnPercentPerPediatricChange = (newPercentPediatric: number): void => {
        if (props.inData && isValidNumber(newPercentPediatric)) {
            const newData = {
                ...props.inData,
                percentPerPediatric: newPercentPediatric
            };
            validatePercentages("percentPerPediatric", newData);
            props.onChange(newData);
        } else {
            console.error("Error: props.inData is null when trying to change percent per pediatric.");
        }
    }

    const handleOnPercentPerNeonatalChange = (newPercentNeonatal: number): void => {
        if (props.inData && isValidNumber(newPercentNeonatal)) {
            const newData: MixingCenterSettingsModel = {
                ...props.inData,
                percentPerNeonatal: newPercentNeonatal
            };

            validatePercentages("percentPerNeonatal", newData);
            props.onChange(newData);
        } else {
            console.error("Error: props.inData is null when trying to change percent per neonatal.");
        }
    }

    const handleOnMixingCenterSelectorChange = (inNewCentralType: CentralTypeIdEnum): void => {
        const newData: MixingCenterSettingsModel = {
            ...props.inData,
            centralType: inNewCentralType
        };

        props.onChange(newData);
    }

    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Ingreso de datos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1 w-full text-left">
                    <MixingCenterBasics
                        inPopulationType={props.inData?.populationType || PopulationTypeIdEnum.Adulto}
                        inProductionLines={props.inData?.productionLines || 0}
                        inProductionPerDay={props.inData?.productionPerDay || 0}
                        onPopulationTypeChange={handleOnPopulationTypeChange}
                        onProductionLinesChange={handleOnProductionLinesChange}
                        onProductionPerDayChange={handleOnProductionPerDayChange}
                    />
                </div>
                <div className="md:col-span-1 w-full text-left">
                    <MixingCenterPercentages
                        inPercentPerAdult={props.inData?.percentPerAdult || 0}
                        inPercentPerPediatric={props.inData?.percentPerPediatric || 0}
                        inPercentPerNeonatal={props.inData?.percentPerNeonatal || 0}
                        errorOnPercentPerAdult={percentageErrors.percentPerAdult}
                        errorOnPercentPerPediatric={percentageErrors.percentPerPediatric}
                        errorOnPercentPerNeonatal={percentageErrors.percentPerNeonatal}
                        onPercentPerAdultChange={handleOnPercentPerAdultChange}
                        onPercentPerPediatricChange={handleOnPercentPerPediatricChange}
                        onPercentPerNeonatalChange={handleOnPercentPerNeonatalChange}
                    />
                </div>
            </div>
            <MixingCenterSelector
                inCentralType={props.inData.centralType}
                onChange={handleOnMixingCenterSelectorChange}
            />
        </div>
    );
}

export default MixingCenterSet;