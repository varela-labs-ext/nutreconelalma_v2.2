import MixingCenterSettings from "./MixingCenterSettings";
import RawMaterials from "./RawMaterials";

interface CalculatorFormSetsProps {

}

const CalculatorFormSets = (props: CalculatorFormSetsProps) => {
    return (
        <>
            <div>
                <MixingCenterSettings />
            </div>
            <div>
                <RawMaterials />
            </div>
        </>
    );
}

export default CalculatorFormSets;