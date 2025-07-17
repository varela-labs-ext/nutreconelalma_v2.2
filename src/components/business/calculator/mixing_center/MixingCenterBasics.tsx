import InputNumberField from "@/components/ui/inputs/InputNumberField";
import PopulationTypeInput from "@/components/ui/inputs/PopulationTypeInput";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";

interface MixingCenterBasicsProps {
    inPopulationType: PopulationTypeIdEnum;
    inProductionLines: number;
    inProductionPerDay: number;
    onPopulationTypeChange: (newPopulationType: PopulationTypeIdEnum) => void;
    onProductionLinesChange: (newProductionLines: number) => void;
    onProductionPerDayChange: (newProductionPerDay: number) => void;
}

const MixingCenterBasics = (props: MixingCenterBasicsProps) => {

    const handleOnProductionLinesChange = (inName: string, inValue: number) => {
        props.onProductionLinesChange(inValue);
    }

    const handleOnProductionPerDayChange = (inName: string, inValue: number) => {
        props.onProductionPerDayChange(inValue)
    }

    return (
        //  "flex flex-col gap-4"
        <div className="">
            <div className="pb-4">
                <PopulationTypeInput
                    inPopulationType={props.inPopulationType}
                    labelAlways={true}
                    onChange={props.onPopulationTypeChange}
                />
            </div>
            <div className="pb-4">
                <InputNumberField
                    label="Líneas de producción"
                    name="lineasProduccion"
                    value={props.inProductionLines}
                    labelAlways={true}
                    onChange={handleOnProductionLinesChange}
                />
            </div>
            <div className="pb-4">
                <InputNumberField
                    label="Producción por día"
                    name="produccionDia"
                    value={props.inProductionPerDay}
                    labelAlways={true}
                    onChange={handleOnProductionPerDayChange}
                />
            </div>
        </div>
    );
}

export default MixingCenterBasics;