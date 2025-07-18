import MixingCenterResultsModel from "@/logic/models/MixingCenterResultsModel";
import ResultsForm from "./results/ResultsForm";
import { useMixingCenterComparison } from "@/context/ComparisonContext/MixingCenterComparisonContext";

interface CalculatorFormResultsProps {

}

const CalculatorFormResults = (props: CalculatorFormResultsProps) => {
    const { results } = useMixingCenterComparison();

    return (
        <div className="w-full">
            <ResultsForm
                inData={results}
            />
        </div>
    );
}

export default CalculatorFormResults;