import InsumoItemModel from "@/logic/models/common/InsumoItemModel";
import MateriaPrimaModel from "@/logic/models/materiaPrima/MateriaPrimaModel";
import InsumoItemEditor from "../common/InsumoItemEditor";


interface MateriaPrimaDetailsProps {
    item: MateriaPrimaModel;
    mostrarDetalles: boolean;
    onChange: (updatedItem: MateriaPrimaModel) => void;
}

const MateriaPrimaDetails = (props: MateriaPrimaDetailsProps) => {
    // const data = props.item;
    const insumoEditorWrapperClass = "p-1";

    /* Calcula el monto total de todos los "costoTotalPorUnidad" y de todos los "costoPorMl", solamente de los elementos que se despliegan en pantalla */
    const calcularTotales = (modelo: MateriaPrimaModel): { total: number; totalPorMl: number } => {
        const items = Object.values(modelo).filter(
            (val): val is InsumoItemModel =>
                typeof val === "object" &&
                val !== null &&
                // "costoTotalPorUnidad" in val &&
                !val.excluirDelCalculo
        );

        const total = items.reduce((sum, item) => sum + item.costoTotalPorUnidad, 0);
        const totalPorMl = items.reduce((sum, item) => sum + item.costoPorMl, 0);

        return { total, totalPorMl };
    };

    const handleInsumoItemChange = (propertyName: string, updatedItem: InsumoItemModel) => {
        console.log("Property: " + propertyName);

        console.log("Insumo (anterior)");
        console.log(props.item.Vitamina_C);

        console.log("Insumo (nuevo)");
        console.log(updatedItem);

        const actualizado: MateriaPrimaModel = {
            ...props.item,
            [propertyName]: updatedItem
        };

        console.log("Modelo actualizado");
        console.log(actualizado.Vitamina_C);

        console.log(actualizado);


        // const totales = calcularTotales(actualizado);
        // // No se si sea buena idea calcular aqui, ya que se pierde visibilidad de donde debe estar la logica de los calculos, 
        // // aunque sea una simple sumatoria

        props.onChange(actualizado);
    };

    return (
        <div className="flex flex-col gap-2">
            {Object.entries(props.item).map(([clave, valor]) => {
                if (
                    typeof valor === "object" &&
                    valor !== null &&
                    // valor instanceof InsumoItemModel &&
                    !valor.excluirDelCalculo &&
                    1 == 1
                ) {
                    return (
                        <div id={clave} key={clave} className={insumoEditorWrapperClass} >
                            {/* Fila editable por cada InsumoItemModel */}
                            <InsumoItemEditor
                                item={valor}
                                mostrarDetalles={props.mostrarDetalles}
                                onChange={(updated) => handleInsumoItemChange(clave, updated)}
                            />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default MateriaPrimaDetails;