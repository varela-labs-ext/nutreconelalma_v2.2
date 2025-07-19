// src/utils/reportFormatter.ts
import { padText } from './textPadding';

type Employee = {
    name: string;
    age: number;
    role: string;
};

export const formatEmployeeReport = (data: Employee[]): string[] => {
    // const header = `${padText('Nombre', 20)}${padText('Edad', 6, 'right')}  ${padText('Cargo', 25)}`;
    // const separator = '-'.repeat(header.length);
    const lines = data.map(
        (item) =>
            `${padText(item.name, 20)}${padText(item.age, 6, 'right')}  ${padText(item.role, 25)}`
    );

    return ["", ...lines];
    // return ['Reporte de Empleados', header, separator, ...lines];
};
