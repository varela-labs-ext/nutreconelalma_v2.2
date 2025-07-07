import { createContext, useContext, useState } from "react";

type ActionKey = string;
type ActionValue = string | null;
type ActionsMap = Record<ActionKey, ActionValue>;

interface MultiActionContextProps {
    getAction: (key: ActionKey) => ActionValue;
    setAction: (key: ActionKey, value: ActionValue) => void;
    clearAction: (key: ActionKey) => void;
    clearAll: () => void;
}

const MultiActionContext = createContext<MultiActionContextProps | undefined>(undefined);

export const MultiActionProvider = ({ children }: { children: React.ReactNode }) => {
    const [Actions, setActions] = useState<ActionsMap>({});

    const getAction = (key: ActionKey): ActionValue => Actions[key] ?? null;

    const setAction = (key: ActionKey, value: ActionValue) => {
        setActions(prev => ({ ...prev, [key]: value }));
    };

    const clearAction = (key: ActionKey) => {
        setActions(prev => {
            const updated = { ...prev };
            delete updated[key];
            return updated;
        });
    };

    const clearAll = () => setActions({});

    return (
        <MultiActionContext.Provider value={{ getAction, setAction, clearAction, clearAll }}>
            {children}
        </MultiActionContext.Provider>
    );
};

export const useMultiActionContext = (): MultiActionContextProps => {
    const context = useContext(MultiActionContext);
    if (!context) {
        throw new Error("useMultiActionContext debe usarse dentro de MultiActionProvider");
    }
    return context;
};
