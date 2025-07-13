import PercentTypeInput from "@/ui/common/PercentTypeInput";

interface MixingCenterPercentagesProps {
    inPercentPerAdult: number;
    inPercentPerPediatric: number;
    inPercentPerNeonatal: number;
    errorOnPercentPerAdult: boolean;
    errorOnPercentPerPediatric: boolean;
    errorOnPercentPerNeonatal: boolean;
    onPercentPerAdultChange: (newPercentAdult: number) => void;
    onPercentPerPediatricChange: (newPercentPediatric: number) => void;
    onPercentPerNeonatalChange: (newPercentNeonatal: number) => void;
}

const MixingCenterPercentages = (props: MixingCenterPercentagesProps) => {

    const sumTotalError = "La suma total debe ser 100%";

    return (
        // flex flex-col gap-4
        <div className="">
            <div>
                <PercentTypeInput
                    label="Porcentaje Adulto"
                    name="porcentajeAdulto"
                    value={props.inPercentPerAdult}
                    labelAlways={true}
                    hasFailed={props.errorOnPercentPerAdult}
                    onChange={props.onPercentPerAdultChange}
                />
                {props.errorOnPercentPerAdult && (
                    <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{sumTotalError}</p>
                )}
            </div>
            <div>
                <PercentTypeInput
                    label="Porcentaje Pediátrico"
                    name="porcentajePediatrico"
                    value={props.inPercentPerPediatric}
                    labelAlways={true}
                    hasFailed={props.errorOnPercentPerPediatric}
                    onChange={props.onPercentPerPediatricChange}
                />
                {props.errorOnPercentPerPediatric && (
                    <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{sumTotalError}</p>
                )}
            </div>
            <div>
                <PercentTypeInput
                    label="Porcentaje Neonatal"
                    name="porcentajeNeonatal"
                    value={props.inPercentPerNeonatal}
                    labelAlways={true}
                    hasFailed={props.errorOnPercentPerNeonatal}
                    onChange={props.onPercentPerNeonatalChange}
                />
                {props.errorOnPercentPerNeonatal && (
                    <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{sumTotalError}</p>
                )}
            </div>

            <p className="text-sm text-purple-600 py-4">
                Del total de producción diaria indique el % entre adulto, pediátrica y neonatal, asegúrese que la suma de estos sea el 100%
            </p>
        </div>
    );
}

export default MixingCenterPercentages;