import ResultsModel from "@/logic/models/MixingCenterResultsModel";
import ResultsForm from "@/components/business/calculator/results/ResultsForm";

interface ComputerFormRightProps {

}

const ComputerFormRight = (props: ComputerFormRightProps) => {


    return (
        <>
            <div className="w-full">
                <ResultsForm
                    inData={new ResultsModel()}
                />
            </div>
        </>
    );
}

export default ComputerFormRight;