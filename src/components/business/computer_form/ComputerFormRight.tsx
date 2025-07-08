import ResultsModel from "@/logic/models/ResultsModel";
import ResultsForm from "@/components/business/computer_results_form/ResultsForm";

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