import mixer from "@/assets/imgs/mixer.jpg";
import logoBbraun from "@/assets/imgs/logo.png";

const MainHeaderBlock = () => {
    return (
        <div className="w-full border rounded-xl bg-white shadow-md mb-6">
            <div className="flex flex-col md:flex-row">
                <div id="logoLaboratioMedico" className="w-full md:w-1/2 relative">
                    <img
                        src={mixer}
                        alt="Equipo de nutrición parenteral automatizado"
                        className="w-full h-48 md:h-64 object-cover rounded-xl "
                    />
                </div>
                <div id="logoBraunLogo" className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <div className="text-right">
                        <img
                            src={logoBbraun}
                            alt="B Braun Logo"
                            className="inline-block h-20 transform scale-150"
                        /* Aumentado 1.5 veces */
                        />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-3xl text-green-500 font-medium">CALCULADORA</h2>
                        <h1 className="text-4xl text-purple-700 font-bold">NUTRICIÓN HOSPITALARIA</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeaderBlock;