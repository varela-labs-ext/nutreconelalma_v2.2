import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import StaffPersonnelCostsModel from "@/logic/models/StaffPersonnelCostsModel";
import { FlaskConical, User, FileText } from "lucide-react";

/*
- STAFF/PERSONAL
    - PARAFISCALES *            ParaCo
    - QUIMICO FARMACEUTICO      PharmC
    - AUXILIAR DE FARMACIA      PhAsst

*/
interface StaffCostsDetailsProps {
    inData: StaffPersonnelCostsModel;
    onChange: (inNewItem: StaffPersonnelCostsModel) => void;
}

const StaffCostsDetails = (props: StaffCostsDetailsProps) => {
    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_PharmC" title="Químico Farmacéutico" icon={FlaskConical}>
                    <>
                    </>
                </AccordionItem>
                <AccordionItem id="id_PhAsst" title="Auxiliar de Farmacia" icon={User}>
                    <>
                    </>
                </AccordionItem>
                <AccordionItem id="id_ParaCo" title="Parafiscales" icon={FileText}>
                    <>
                    </>
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default StaffCostsDetails;