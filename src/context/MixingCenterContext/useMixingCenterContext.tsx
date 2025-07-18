import { useContext } from "react";
import { MixingCenterContext } from "./MixingCenterProvider";
import MixingCenterContextProps from "./MixingCenterTypes";


const useMixingCenterContext = (): MixingCenterContextProps => {
    const context = useContext(MixingCenterContext);
    if (!context) {
        throw new Error("useMixingCenterContext debe usarse dentro de un MixingCenterProvider");
    }
    return context;
};

export default useMixingCenterContext;