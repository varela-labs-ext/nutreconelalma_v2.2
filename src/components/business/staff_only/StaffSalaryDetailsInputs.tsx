import StaffSalaryModel from "@/logic/models/empleados/StaffSalaryGroupModel";
import AmountItemModel from "@/logic/models/base/AmountItemModel";
import JustValueItemModel from "@/logic/models/base/JustValueItemModel";
import PorcentajeItemModel from "@/logic/models/base/PorcentajeItemModel";
import LabelBasicModel from "@/logic/models/common/LabelBasicModel";
import JustValueInputEditor from "../editors/JustValueInputEditor";
import AmountItemInputEditor from "../editors/AmountItemInputEditor";
import PorcentajeItemInputEditor from "../editors/PorcentajeItemInputEditor";
import StaffSalaryDetailsHeaders from "./StaffSalaryDetailsHeaders";

interface StaffSalaryDetailsInputsProps {
    title?: string;
    inData: StaffSalaryModel;
    onAmountItemModelInputChange: (inPropertyName: string, inNewItem: AmountItemModel) => void;
    onPorcentajeInputChange: (inPropertyName: string, inNewItem: PorcentajeItemModel) => void;
    onJustValueInputChange: (inPropertyName: string, inNewItem: JustValueItemModel) => void;
}

const StaffSalaryDetailsInputs = (props: StaffSalaryDetailsInputsProps) => {

    return (
        <div>
            <div><h2>Costos de horas / persona</h2></div>
            <div>
                <JustValueInputEditor
                    inData={props.inData.horasTrabajoMensual}
                    inName="horasTrabajoMensual"
                    onChange={props.onJustValueInputChange}
                />
                <JustValueInputEditor
                    inData={props.inData.personalPreparacion}
                    inName="personalPreparacion"
                    onChange={props.onJustValueInputChange}
                />
            </div>
            <StaffSalaryDetailsHeaders title={props.title} />
            <div>
                <AmountItemInputEditor
                    inData={props.inData.salarioBasico}
                    inName="salarioBasico"
                    onChange={props.onAmountItemModelInputChange}
                />
                <AmountItemInputEditor
                    inData={props.inData.costoEmpresa}
                    inName="costoEmpresa"
                    onChange={props.onAmountItemModelInputChange}
                />
                <AmountItemInputEditor
                    inData={props.inData.auxilioTransporte}
                    inName="auxilioTransporte"
                    onChange={props.onAmountItemModelInputChange}
                />
            </div>
            <div>
                <PorcentajeItemInputEditor
                    inData={props.inData.cesantias}
                    inName="cesantias"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.primas}
                    inName="primas"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.vacaciones}
                    inName="vacaciones"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.interesesCesantias}
                    inName="interesesCesantias"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.salud}
                    inName="salud"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.pension}
                    inName="pension"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.arlRiesgo1}
                    inName="arlRiesgo1"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.cajaCompensacion}
                    inName="cajaCompensacion"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.sena}
                    inName="sena"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.icbf}
                    inName="icbf"
                    onChange={props.onPorcentajeInputChange}
                />
            </div>
            <div>
                <AmountItemInputEditor
                    inData={props.inData.subsidioTransporte}
                    inName="subsidioTransporte"
                    onChange={props.onAmountItemModelInputChange}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalParafiscales}
                    inName="totalParafiscales"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalCompensacionSalarial}
                    inName="totalCompensacionSalarial"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalValorHora}
                    inName="totalValorHora"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
            </div>
        </div>
    );
}

export default StaffSalaryDetailsInputs;