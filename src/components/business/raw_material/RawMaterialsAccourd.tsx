import AccordionGroup from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";
import { Dna, Flame, Package, Droplet, Zap, Atom, Circle, Pill } from "lucide-react";
import ClinicalInputsSet from "../clinical_inputs/ClinicalInputsSet";
import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
import CalculationService from "@/logic/services/CalculationService";
import ClinicaInputRowModel from "@/logic/models/row_item/ClinicaInputRowModel";
import { deepClone } from "@/utils/objectUtils";

interface RawMaterialsAccourdProps {
    inData: RawMaterialGroupModel;
    inShowPresentation: boolean;
    onChange: (inNewItem: RawMaterialGroupModel) => void;
}

const RawMaterialsAccourd = (props: RawMaterialsAccourdProps) => {
    const handleClinicaInputChange = (inName: string, inNewItem: ClinicaInputRowModel) => {
        // Actualizar el estado interno con el nuevo item
        const updatedData: RawMaterialGroupModel = {
            ...deepClone(props.inData),
            [inName]: inNewItem
        };

        // CalculationService.computeRawMaterial(updatedData);
        props.onChange(updatedData);
    }

    return (
        <AccordionGroup multiOpen={false} >
            <AccordionItem id="id_a" title="Aminoácidos" icon={Dna}>
                < ClinicalInputsSet
                    inData={props.inData}
                    inShowPresentation={props.inShowPresentation}
                    inCategory={ClinicalInputCategoryEnumId.Aminoacidos}
                    onClinicaInputChange={handleClinicaInputChange}
                />
            </AccordionItem>
            <AccordionItem id="id_b" title="Carbohidratos / Energéticos" icon={Flame}>
                < ClinicalInputsSet
                    inData={props.inData}
                    inShowPresentation={props.inShowPresentation}
                    inCategory={ClinicalInputCategoryEnumId.CarbohidratosEnergeticos}
                    onClinicaInputChange={handleClinicaInputChange}
                />
            </AccordionItem>
            <AccordionItem id="id_c" title="Contenedores o Mezcladores" icon={Package}>
                < ClinicalInputsSet
                    inData={props.inData}
                    inShowPresentation={props.inShowPresentation}
                    inCategory={ClinicalInputCategoryEnumId.ContenedoresMezcladores}
                    onClinicaInputChange={handleClinicaInputChange}
                />
            </AccordionItem>
            <AccordionItem id="id_d" title="Diluyentes o Vehículos" icon={Droplet}>
                < ClinicalInputsSet
                    inData={props.inData}
                    inShowPresentation={props.inShowPresentation}
                    inCategory={ClinicalInputCategoryEnumId.DiluyentesVehiculos}
                    onClinicaInputChange={handleClinicaInputChange}
                />
            </AccordionItem>
            <AccordionItem id="id_e" title="Electrolitos y Minerales" icon={Zap}>
                < ClinicalInputsSet
                    inData={props.inData}
                    inShowPresentation={props.inShowPresentation}
                    inCategory={ClinicalInputCategoryEnumId.ElectrolitosMinerales}
                    onClinicaInputChange={handleClinicaInputChange}
                />
            </AccordionItem>
            <AccordionItem id="id_f" title="Elementos Traza" icon={Atom}>
                < ClinicalInputsSet
                    inData={props.inData}
                    inShowPresentation={props.inShowPresentation}
                    inCategory={ClinicalInputCategoryEnumId.ElementosTraza}
                    onClinicaInputChange={handleClinicaInputChange}
                />
            </AccordionItem>
            <AccordionItem id="id_g" title="Lípidos / Emulsiones lipídicas" icon={Circle}>
                < ClinicalInputsSet
                    inData={props.inData}
                    inShowPresentation={props.inShowPresentation}
                    inCategory={ClinicalInputCategoryEnumId.Lipidos}
                    onClinicaInputChange={handleClinicaInputChange}
                />
            </AccordionItem>
            <AccordionItem id="id_h" title="Vitaminas" icon={Pill}>
                < ClinicalInputsSet
                    inData={props.inData}
                    inShowPresentation={props.inShowPresentation}
                    inCategory={ClinicalInputCategoryEnumId.Vitaminas}
                    onClinicaInputChange={handleClinicaInputChange}
                />
            </AccordionItem>
        </AccordionGroup>
    );
}

export default RawMaterialsAccourd;