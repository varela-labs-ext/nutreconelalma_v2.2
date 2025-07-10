import { Link } from "react-router-dom";

const NotFoundPage404 = () => {

    return (
        <div>
            <div className="bg-white border rounded-xl shadow-sm p-6 mb-6" >
                {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-6"> */}
                <div>
                    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100">
                        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página no encontrada</h2>
                        <p className="text-gray-600 mb-6">
                            Lo sentimos, la ruta que intentaste acceder no existe.
                        </p>
                        <Link
                            to="/"
                            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage404;
