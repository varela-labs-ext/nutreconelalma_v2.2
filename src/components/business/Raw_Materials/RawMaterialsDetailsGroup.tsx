import RawMaterialModel from "@/logic/models/RawMaterialModel";
import RawMaterialsDetailsHeader from "./RawMaterialsDetailsHeader";
import RawMaterialsDetailsInputs from "./RawMaterialsDetailsInputs";
import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";
import ClinicaInputModel from "@/logic/models/common/ClinicaInputModel";

interface RawMaterialsDetailGroupProps {
    inData: RawMaterialModel;
    inShowPresentation: boolean;
    inCategory: ClinicalInputCategoryEnumId;
    onClinicaInputChange: (inName: string, inNewItem: ClinicaInputModel) => void;
}

const RawMaterialsDetailGroup = (props: RawMaterialsDetailGroupProps) => {

    return (
        <>
            <div className="flex flex-col gap-2">
                <RawMaterialsDetailsHeader
                    inShowPresentation={props.inShowPresentation}
                />
                <RawMaterialsDetailsInputs
                    inShowPresentation={props.inShowPresentation}
                    inData={props.inData}
                    inCategory={props.inCategory}
                    onClinicaInputChange={props.onClinicaInputChange}
                />
            </div>
        </>
    );
}

export default RawMaterialsDetailGroup;