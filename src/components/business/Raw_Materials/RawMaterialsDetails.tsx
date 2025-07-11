import RawMaterialModel from "@/logic/models/RawMaterialModel";
import { useEffect, useState } from "react";
import ClinicaInputModel from "@/logic/models/row_item/ClinicaInputRowModel";
import CalculationService from "@/logic/services/CalculationService";
import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";
import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import RawMaterialsDetailGroup from "../clinical_inputs/RawMaterialsDetailsGroup";
import { Atom, Circle, Dna, Droplet, Flame, Folder, Package, Pill, Zap } from "lucide-react";

interface RawMaterialsDetailsProps {
    inData: RawMaterialModel;
    inShowDetails: boolean;
    inShowPresentation: boolean;
    onChange: (inNewItem: RawMaterialModel) => void;
}

const RawMaterialsDetails = (props: RawMaterialsDetailsProps) => {
    const [internalData, setInternalData] = useState<RawMaterialModel>(props.inData);

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    // REGLA DE ORO, NUNCA LLAMAR AL EVENTO DEL PROPS DESDE DENTRO DEL USEFFECT, ya que esto puede generar un bucle infinito de actualizaciones.

    const handleClinicaInputChange = (inName: string, inNewItem: ClinicaInputModel) => {

        // Actualizar el estado interno con el nuevo item
        const updatedData: RawMaterialModel = {
            ...internalData,
            [inName]: inNewItem
        };

        CalculationService.ComputeRawMaterial(updatedData);
        setInternalData(updatedData);
        props.onChange(updatedData);
    }

    return (
        <div>
            {props.inShowDetails && (
                <>
                    {/* <div className="flex flex-col gap-2">
                        <RawMaterialsDetailsHeader
                            inShowPresentation={props.inShowPresentation}
                        />
                        <RawMaterialsDetailsInputs
                            inShowPresentation={props.inShowPresentation}
                            inData={internalData}
                            inCategory={ClinicalInputCategoryEnumId.ContenedoresMezcladores}
                            onClinicaInputChange={handleClinicaInputChange}
                        />
                    </div> */}
                    {/* defaultOpenIds={['id_a']} */}
                    <AccordionGroup multiOpen={false} >
                        <AccordionItem id="id_a" title="Aminoácidos" icon={Dna}>
                            <RawMaterialsDetailGroup
                                inData={internalData}
                                inShowPresentation={props.inShowPresentation}
                                inCategory={ClinicalInputCategoryEnumId.Aminoacidos}
                                onClinicaInputChange={handleClinicaInputChange}
                            />
                        </AccordionItem>

                        <AccordionItem id="id_b" title="Carbohidratos / Energéticos" icon={Flame}>
                            <RawMaterialsDetailGroup
                                inData={internalData}
                                inShowPresentation={props.inShowPresentation}
                                inCategory={ClinicalInputCategoryEnumId.CarbohidratosEnergeticos}
                                onClinicaInputChange={handleClinicaInputChange}
                            />
                        </AccordionItem>
                        <AccordionItem id="id_c" title="Contenedores o Mezcladores" icon={Package}>
                            <RawMaterialsDetailGroup
                                inData={internalData}
                                inShowPresentation={props.inShowPresentation}
                                inCategory={ClinicalInputCategoryEnumId.ContenedoresMezcladores}
                                onClinicaInputChange={handleClinicaInputChange}
                            />
                        </AccordionItem>
                        <AccordionItem id="id_d" title="Diluyentes o Vehículos" icon={Droplet}>
                            <RawMaterialsDetailGroup
                                inData={internalData}
                                inShowPresentation={props.inShowPresentation}
                                inCategory={ClinicalInputCategoryEnumId.DiluyentesVehiculos}
                                onClinicaInputChange={handleClinicaInputChange}
                            />
                        </AccordionItem>
                        <AccordionItem id="id_e" title="Electrolitos y Minerales" icon={Zap}>
                            <RawMaterialsDetailGroup
                                inData={internalData}
                                inShowPresentation={props.inShowPresentation}
                                inCategory={ClinicalInputCategoryEnumId.ElectrolitosMinerales}
                                onClinicaInputChange={handleClinicaInputChange}
                            />
                        </AccordionItem>
                        <AccordionItem id="id_f" title="Elementos Traza" icon={Atom}>
                            <RawMaterialsDetailGroup
                                inData={internalData}
                                inShowPresentation={props.inShowPresentation}
                                inCategory={ClinicalInputCategoryEnumId.ElementosTraza}
                                onClinicaInputChange={handleClinicaInputChange}
                            />
                        </AccordionItem>
                        <AccordionItem id="id_g" title="Lípidos / Emulsiones lipídicas" icon={Circle}>
                            <RawMaterialsDetailGroup
                                inData={internalData}
                                inShowPresentation={props.inShowPresentation}
                                inCategory={ClinicalInputCategoryEnumId.Lipidos}
                                onClinicaInputChange={handleClinicaInputChange}
                            />
                        </AccordionItem>
                        <AccordionItem id="id_h" title="Vitaminas" icon={Pill}>
                            <RawMaterialsDetailGroup
                                inData={internalData}
                                inShowPresentation={props.inShowPresentation}
                                inCategory={ClinicalInputCategoryEnumId.Vitaminas}
                                onClinicaInputChange={handleClinicaInputChange}
                            />
                        </AccordionItem>
                    </AccordionGroup>
                </>
            )}
        </div>
    );
}

export default RawMaterialsDetails;