import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import PopulationTypeInput from "../common/PopulationTypeInput";
import InputNumberField from "../common/InputNumberField";

interface MixingCenterLeftSideProps {
    inPopulationType: PopulationTypeIdEnum;
    inProductionLines: number;
    inProductionPerDay: number;
    onPopulationTypeChange: (newPopulationType: PopulationTypeIdEnum) => void;
    onProductionLinesChange: (newProductionLines: number) => void;
    onProductionPerDayChange: (newProductionPerDay: number) => void;
}

const MixingCenterLeftSide = (props: MixingCenterLeftSideProps) => {
    return (
        <div className="flex flex-col gap-4">
            {/* Population Type Input*/}
            <PopulationTypeInput
                inPopulationType={props.inPopulationType}
                labelAlways={true}
                onChange={props.onPopulationTypeChange}
            />

            <InputNumberField
                label="Líneas de producción"
                name="lineasProduccion"
                value={props.inProductionLines}
                labelAlways={true}
                onChange={(name, value) => props.onProductionLinesChange(value)}
            />

            <InputNumberField
                label="Producción por día"
                name="produccionDia"
                value={props.inProductionPerDay}
                labelAlways={true}
                onChange={(name, value) => props.onProductionPerDayChange(value)}
            />
        </div>
    );
};

export default MixingCenterLeftSide;