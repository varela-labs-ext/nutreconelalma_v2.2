import MixingCenterResultsModel from "@/logic/models/MixingCenterResultsModel";
import ResultsForm from "./results/ResultsForm";
import { useComparisonContext } from "@/context/ComparisonContext/ComparisonProvider";

interface CalculatorFormResultsProps {

}

const CalculatorFormResults = (props: CalculatorFormResultsProps) => {
    const { results } = useComparisonContext();

    return (
        <div className="w-full">
            <ResultsForm
                inData={results}
            />
        </div>
    );
}

export default CalculatorFormResults;