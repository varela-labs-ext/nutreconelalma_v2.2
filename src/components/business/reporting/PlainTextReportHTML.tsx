// src/components/pdf/PlainTextReportHTML.tsx

import { padText } from "./textPadding";


const data = [
    { name: 'Juan Pérez', age: 34, role: 'Supervisor' },
    { name: 'Ana', age: 27, role: 'Analista' },
    { name: 'Carlos López', age: 41, role: 'Gerente de Proyectos' },
];

export const PlainTextReportHTML = () => {
    const header = `${padText('Nombre', 20)}${padText('Edad', 6, 'right')}  ${padText('Cargo', 25)}`;

    return (
        <pre className="font-mono text-sm whitespace-pre-wrap">
            {[
                'Reporte de Empleados',
                header,
                '-'.repeat(header.length),
                ...data.map((item) =>
                    `${padText(item.name, 20)}${padText(item.age, 6, 'right')}  ${padText(item.role, 25)}`
                ),
            ].join('\n')}
        </pre>
    );
};
