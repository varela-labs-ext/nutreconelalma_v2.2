import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import { Wrench, Factory } from "lucide-react";

/*
- COSTOS OPERATIVOS
    - COSTOS DE MANTENIMIENTO       MaintC
    - COSTOS DE PRODUCCION          ProdC

nota: COSTOS DE PRODUCCION ES UN ESTIMADO, NO CUMPLE CON LA ESTRUCTURA DE LOS OTROS
*/
interface OperatingCostsDetailsProps {

}

const OperatingCostsDetails = (props: OperatingCostsDetailsProps) => {
    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_MaintC" title="Costos de Mantenimiento" icon={Wrench}>
                    <>
                    </>
                </AccordionItem>
                <AccordionItem id="id_MaintC" title="Costos de Producción" icon={Factory}>
                    <>
                    </>
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default OperatingCostsDetails;