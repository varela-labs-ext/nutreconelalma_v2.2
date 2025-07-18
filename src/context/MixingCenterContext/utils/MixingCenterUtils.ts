import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";

export const isValidBackupPayload = (inExternalData: ComputerBigGroupModel): boolean => {
    return (
        inExternalData.mixingCenterSettings !== undefined && inExternalData.mixingCenterSettings != null &&
        inExternalData.backup_MC_Automatic_RawMaterials !== undefined && inExternalData.backup_MC_Automatic_RawMaterials !== null &&
        inExternalData.backup_MC_Automatic_Resources !== undefined && inExternalData.backup_MC_Automatic_Resources !== null &&
        inExternalData.backup_MC_Manual_RawMaterials !== undefined && inExternalData.backup_MC_Manual_RawMaterials !== null &&
        inExternalData.backup_MC_Manual_Resources !== undefined && inExternalData.backup_MC_Manual_Resources !== null
    );
};

