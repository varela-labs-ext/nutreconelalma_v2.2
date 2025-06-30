import { toast } from "react-toastify";

export const mostrarAlertaUsuario = (error: unknown) => {
    if (error instanceof Error) {
        toast.error(error.message);
    } else {
        toast.error("Ocurrió un error inesperado");
    }
};