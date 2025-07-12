import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import { FlaskConical, User } from "lucide-react";
import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import AmountItemModel from "@/logic/models/row_item/AmountItemRowModel";
import PorcentajeItemModel from "@/logic/models/row_item/PorcentajeItemRowModel";
import JustValueItemModel from "@/logic/models/row_item/OneValueItemRowModel";
import StaffSalarySet from "./staff_salary/StaffSalarySet";

/*
- STAFF/PERSONAL
    - PARAFISCALES *            ParaCo
    - QUIMICO FARMACEUTICO      PharmC
    - AUXILIAR DE FARMACIA      PhAsst

*/

type UserRole = 'Chemist' | 'Assistant';

interface StaffPersonnelCostsAccourdProps {
    inChemistSalaryData: StaffSalaryGroupModel;
    inAssistantSalaryData: StaffSalaryGroupModel;
    onChemistSalaryChange: (inNewItem: StaffSalaryGroupModel) => void;
    onAssistantSalaryChange: (inNewItem: StaffSalaryGroupModel) => void;
}

const StaffPersonnelCostsAccourd = (props: StaffPersonnelCostsAccourdProps) => {

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
                    <StaffSalarySet
                        title="Salario de Químico Farmacéutico"
                        inData={props.inChemistSalaryData}
                        onAmountItemModelInputChange={(A, B) => handleOnAmountItemModelInputChange("Chemist", A, B)}
                        onPorcentajeInputChange={(A, B) => handleOnPorcentajeInputChange("Chemist", A, B)}
                        onJustValueInputChange={(A, B) => handleOnJustValueInputChange("Chemist", A, B)}
                    />
                </AccordionItem>
                <AccordionItem id="id_PhAsst" title="Auxiliar de Farmacia" icon={User}>
                    <StaffSalarySet
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

export default StaffPersonnelCostsAccourd;