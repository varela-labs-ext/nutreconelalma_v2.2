// src/utils/generateEmployeeReportHeader.ts
import { padText } from './textPadding';

export const generateEmployeeReportHeader = (): string[] => {
    const header = `${padText('Nombre', 20)}${padText('Edad', 6, 'right')}  ${padText('Cargo', 25)}`;
    const separator = '-'.repeat(header.length);

    return [header, separator];
    // return ['Reporte de Empleados', header, separator];
};
