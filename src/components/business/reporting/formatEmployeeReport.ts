// src/utils/formatEmployeeReport.ts
import { padText } from './textPadding';

type Employee = {
    name: string;
    age: number;
    role: string;
};

export const formatEmployeeReport = (data: Employee[]): string[] => {
    return data.map((item) =>
        `${padText(item.name, 20)}${padText(item.age, 6, 'right')}  ${padText(item.role, 25)}`
    );
};
