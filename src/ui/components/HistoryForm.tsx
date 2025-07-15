import ForageManager from "@/logic/common/ForageManager";
import { useEffect, useState } from "react";
import KeyLineField from "../common/KeyLineField";
import DataDisplayModal from "../common/DataDisplayModal";
import DeleteAllKeysModal from "../../components/ui/dialogs/DeleteAllKeysModal";
import DeleteKeyModal from "../common/DeleteKeyModal";


const HistoryForm = () => {
    const [keys, setKeys] = useState<string[]>([]);
    const [selectedKey, setSelectedKey] = useState<string | null>(null);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmDeleteAll, setShowConfirmDeleteAll] = useState(false);
    const [keyToDelete, setKeyToDelete] = useState<string | null>(null);

    useEffect(() => {
        loadAvailableKeys();
    }, []);

    const loadAvailableKeys = async () => {
        const allKeys = await ForageManager.getAllKeysAsync();
        setKeys(allKeys);
    };

    const deleteAll = async () => {
        await ForageManager.deleteAllAsync();
        setShowConfirmDeleteAll(false);
        await loadAvailableKeys();
    };

    const deleteKey = async (clave: string) => {
        await ForageManager.deleteAsync(clave);
        setKeyToDelete(null);
        await loadAvailableKeys();
    };

    const handleOnKeyShowData = async (inKey: string) => {
        const valor = await ForageManager.getAsync(inKey);
        setSelectedKey(inKey);
        setSelectedValue(JSON.stringify(valor, null, 2));
        setShowModal(true);
    }

    const handleOnKeyUpload = (key: string) => {
        // TODO
    }

    const handleOnDeleteAll = (inFlag: boolean) => {
        if (inFlag) {
            deleteAll();
        } else {
            setShowConfirmDeleteAll(false);
        }
    }

    const handleOnDeleteKey = (key: string | null) => {
        if (key) {
            deleteKey(key);
        } else {
            setKeyToDelete(null);
        }
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-0">
                    HISTORICO
                </h1>
            </div>
            <div>
                <div className="flex justify-end mb-4">
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={() => setShowConfirmDeleteAll(true)}
                    >
                        Eliminar TODO
                    </button>
                </div>
                <div>
                    {keys.length === 0 ? (
                        <p className="text-gray-500">No hay claves almacenadas.</p>
                    ) : (
                        <ul className="space-y-2">
                            {keys.map((cKey) => (
                                <KeyLineField
                                    inKeySelected={cKey}
                                    onShowData={handleOnKeyShowData}
                                    onUpload={handleOnKeyUpload}
                                    onKeyToDelete={(key) => setKeyToDelete(key)}
                                />
                            ))}
                        </ul>
                    )}
                </div>
                <div>
                    {showModal && (
                        <DataDisplayModal
                            inSelectedKey={selectedKey || ""}
                            inSelectedValue={selectedValue || ""}
                            onSetShowModal={(value) => setShowModal(value)}
                        />
                    )}
                </div>
                <div>
                    {showConfirmDeleteAll && (
                        <DeleteAllKeysModal onDeleteAll={handleOnDeleteAll} />
                    )}
                </div>
                <div>
                    {keyToDelete && (
                        <DeleteKeyModal
                            inKeyToDelete={keyToDelete}
                            onDeleteKey={handleOnDeleteKey}
                        />
                    )}
                </div>

            </div>
        </div>
    );
}

export default HistoryForm;