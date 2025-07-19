import React from "react";
import { mostrarAlertaUsuario } from "@/utils/errorHandler";

type Props = {
    children: React.ReactNode;
};

type State = {
    hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error capturado por ErrorBoundary:", error, errorInfo);
        mostrarAlertaUsuario(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-4 text-center text-red-600">
                    <h2>Algo salió mal. Por favor recarga la página.</h2>
                </div>
            );
        }

        return this.props.children;
    }
}
