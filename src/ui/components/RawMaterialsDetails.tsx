import RawMaterialsDetailsHeader from "./RawMaterialsDetailsHeader";
import RawMaterialsDetailsInputs from "./RawMaterialsDetailsInputs";

interface RawMaterialsDetailsProps {
    inShowDetails: boolean;
}

const RawMaterialsDetails = (props: RawMaterialsDetailsProps) => {

    return (
        <div className="flex flex-col gap-2">
            <RawMaterialsDetailsHeader
                inShowDetails={props.inShowDetails}
            />
            <RawMaterialsDetailsInputs
                inShowDetails={props.inShowDetails}
                inData={new RawMaterialModel()} // Assuming you have a default or empty model
                onClinicaInputChange={(inName, newItem) => {
                    // Handle the change here
                    console.log(`Changed ${inName}:`, newItem);
                }}
            />
        </div>
    );

}

export default RawMaterialsDetails;