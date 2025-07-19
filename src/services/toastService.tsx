import { toast, ToastOptions } from 'react-toastify';

const opcionesBase: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    // theme: 'colored',
};

const showOk = (message: string) => {
    toast.success(message, {
        ...opcionesBase,
        icon: <span role="img" aria-label="éxito">✅</span>,
    });
};

const showError = (message: string) => {
    toast.error(message, {
        ...opcionesBase,
        icon: <span role="img" aria-label="error">❌</span>,
    });
};

const showWarning = (message: string) => {
    toast.warn(message, {
        ...opcionesBase,
        icon: <span role="img" aria-label="advertencia">⚠️</span>,
    });
};

const showInfo = (message: string) => {
    toast.info(message, {
        ...opcionesBase,
        icon: <span role="img" aria-label="información">ℹ️</span>,
    });
};

export const toastService = {
    showOk,
    showError,
    showWarning,
    showInfo,
};
