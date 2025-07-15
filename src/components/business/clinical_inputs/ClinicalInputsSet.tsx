import ClinicaInputRowModel from "@/logic/models/row_item/ClinicaInputRowModel";
import ClinicalInputsEditors from "./ClinicalInputsEditors";
import ClinicalInputsHeader from "./ClinicalInputsHeader";
import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";
import RawMaterialModel from "@/logic/models/RawMaterialGroupModel";

interface ClinicalInputsSetProps {
    inData: RawMaterialModel;
    inShowPresentation: boolean;
    inCategory: ClinicalInputCategoryEnumId;
    onClinicaInputChange: (inName: string, inNewItem: ClinicaInputRowModel) => void;
}

const ClinicalInputsSet = (props: ClinicalInputsSetProps) => {

    return (
        <>
            <div className="flex flex-col gap-2">
                <ClinicalInputsHeader
                    inShowPresentation={props.inShowPresentation}
                />
                <ClinicalInputsEditors
                    inShowPresentation={props.inShowPresentation}
                    inData={props.inData}
                    inCategory={props.inCategory}
                    onClinicaInputChange={props.onClinicaInputChange}
                />
            </div>
        </>
    );
}

export default ClinicalInputsSet;