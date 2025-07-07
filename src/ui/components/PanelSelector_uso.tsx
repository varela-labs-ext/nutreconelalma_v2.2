import { useState } from "react";
import { PanelSelector } from "./PanelSelector";
// import { PanelSelector } from "@/components/panel-selector";

const CentralContainer = () => {
    const [centralSeleccionada, setCentralSeleccionada] = useState<string>("");

    return (
        <div>
            <PanelSelector
                titles={["Central Manual", "Central Automatizada"]}
                onChange={(valor) => setCentralSeleccionada(valor)}
            />

            <div className="mt-4">
                {centralSeleccionada === "Central Manual" && (
                    <div>📦 Aquí carga los datos de la central manual</div>
                )}
                {centralSeleccionada === "Central Automatizada" && (
                    <div>⚙️ Aquí carga los datos de la central automatizada</div>
                )}
            </div>
        </div>
    );
};
