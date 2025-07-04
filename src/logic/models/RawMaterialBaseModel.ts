import { v4 as uuidv4 } from 'uuid';

abstract class RawMaterialBaseModel {
    public cantidad: number; // Calculado
    public total: number; // Calculado
    public totalPorMl: number; // Calculado
    public guiaMateria: string;

    constructor() {
        this.cantidad = 0;
        this.total = 0;
        this.totalPorMl = 0;
        this.guiaMateria = uuidv4();
    }
}

export default RawMaterialBaseModel;