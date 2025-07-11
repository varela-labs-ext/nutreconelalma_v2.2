import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import StaffPersonnelCostsModel from "@/logic/models/StaffPersonnelCostsModel";
import { FlaskConical, User, FileText } from "lucide-react";
import StaffSalaryDetailsGroup from "../staff_only/StaffSalaryDetailsGroup";
import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import AmountItemModel from "@/logic/models/row_item/AmountItemRowModel";
import PorcentajeItemModel from "@/logic/models/row_item/PorcentajeItemRowModel";
import JustValueItemModel from "@/logic/models/row_item/OneValueItemRowModel";

/*
- STAFF/PERSONAL
    - PARAFISCALES *            ParaCo
    - QUIMICO FARMACEUTICO      PharmC
    - AUXILIAR DE FARMACIA      PhAsst

*/

type UserRole = 'Chemist' | 'Assistant';

interface StaffCostsDetailsProps {
    inChemistSalaryData: StaffSalaryGroupModel;
    inAssistantSalaryData: StaffSalaryGroupModel;
    onChemistSalaryChange: (inNewItem: StaffSalaryGroupModel) => void;
    onAssistantSalaryChange: (inNewItem: StaffSalaryGroupModel) => void;
}

const StaffCostsDetails = (props: StaffCostsDetailsProps) => {

    const handleOnAmountItemModelInputChange = (inModel: UserRole, inPropertyName: string, inNewItem: AmountItemModel) => {
        if (inModel === "Chemist") {
            const chemistOutput: StaffSalaryGroupModel = {
                ...props.inChemistSalaryData,
                [inPropertyName]: inNewItem
            };
            props.onChemistSalaryChange(chemistOutput);
        } else {
            const chemistOutput: StaffSalaryGroupModel = {
                ...props.inAssistantSalaryData,
                [inPropertyName]: inNewItem
            };
            props.onAssistantSalaryChange(chemistOutput);
        }
    }

    const handleOnPorcentajeInputChange = (inModel: UserRole, inPropertyName: string, inNewItem: PorcentajeItemModel) => {
        if (inModel === "Chemist") {
            const chemistOutput: StaffSalaryGroupModel = {
                ...props.inChemistSalaryData,
                [inPropertyName]: inNewItem
            };
            props.onChemistSalaryChange(chemistOutput);
        } else {
            const chemistOutput: StaffSalaryGroupModel = {
                ...props.inAssistantSalaryData,
                [inPropertyName]: inNewItem
            };
            props.onAssistantSalaryChange(chemistOutput);
        }
    }

    const handleOnJustValueInputChange = (inModel: UserRole, inPropertyName: string, inNewItem: JustValueItemModel) => {
        if (inModel === "Chemist") {
            const chemistOutput: StaffSalaryGroupModel = {
                ...props.inChemistSalaryData,
                [inPropertyName]: inNewItem
            };
            props.onChemistSalaryChange(chemistOutput);
        } else {
            const chemistOutput: StaffSalaryGroupModel = {
                ...props.inAssistantSalaryData,
                [inPropertyName]: inNewItem
            };
            props.onAssistantSalaryChange(chemistOutput);
        }
    }

    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_PharmC" title="Químico Farmacéutico" icon={FlaskConical}>
                    <StaffSalaryDetailsGroup
                        title="Salario de Químico Farmacéutico"
                        inData={props.inChemistSalaryData}
                        onAmountItemModelInputChange={(A, B) => handleOnAmountItemModelInputChange("Chemist", A, B)}
                        onPorcentajeInputChange={(A, B) => handleOnPorcentajeInputChange("Chemist", A, B)}
                        onJustValueInputChange={(A, B) => handleOnJustValueInputChange("Chemist", A, B)}
                    />
                </AccordionItem>
                <AccordionItem id="id_PhAsst" title="Auxiliar de Farmacia" icon={User}>
                    <StaffSalaryDetailsGroup
                        inData={props.inAssistantSalaryData}
                        onAmountItemModelInputChange={(A, B) => handleOnAmountItemModelInputChange("Assistant", A, B)}
                        onPorcentajeInputChange={(A, B) => handleOnPorcentajeInputChange("Assistant", A, B)}
                        onJustValueInputChange={(A, B) => handleOnJustValueInputChange("Assistant", A, B)}
                    />
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default StaffCostsDetails;