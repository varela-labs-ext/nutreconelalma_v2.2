# 📁 Estructura Recomendada para Proyecto React + TypeScript

Esta es una estructura profesional, modular y mantenible para un proyecto React con TypeScript, TailwindCSS y lógica desacoplada siguiendo principios de Clean Code y SOLID.

---

## 📦 Estructura de Carpetas

```
src/
│
├── components/
│   ├── layout/
│   │   ├── MainLayout.tsx
│   │   ├── AdminLayout.tsx
│   │   └── AuthLayout.tsx
│   ├── pages/
│   │   ├── DashboardPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── forms/
│   │   ├── UserForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── EstimadoUnitarioForm.tsx
│   ├── fields/
│   │   ├── InputNumberField.tsx
│   │   ├── ReadOnlyNumberField.tsx
│   │   ├── TextInputField.tsx
│   │   └── SelectField.tsx
│   ├── modals/
│   │   ├── ConfirmDeleteModal.tsx
│   │   ├── InfoModal.tsx
│   │   └── SuccessModal.tsx
│   ├── tables/
│   │   ├── UserTable.tsx
│   │   ├── InvoiceTable.tsx
│   │   └── ProductTable.tsx
│   ├── cards/
│   │   ├── UserCard.tsx
│   │   ├── ProductCard.tsx
│   │   └── SummaryCard.tsx
│   ├── buttons/
│   │   ├── SubmitButton.tsx
│   │   ├── IconButton.tsx
│   │   └── CancelButton.tsx
│   ├── lists/
│   │   ├── NotificationList.tsx
│   │   └── TaskList.tsx
│   ├── items/
│   │   ├── ProductItem.tsx
│   │   └── EstimadoUnitarioItem.tsx
│   └── shared/
│       ├── Loader.tsx
│       ├── Breadcrumbs.tsx
│       └── Alert.tsx
│
├── logic/
│   ├── CalculadoraService.ts
│   └── EstimadoService.ts
│
├── modelos/
│   ├── estimadoUnitarioItemModel.ts
│   └── userModel.ts
│
└── app.tsx
```

---

## 🏷️ Tabla de Sufijos Recomendados para Componentes

| Sufijo        | Uso típico                                     | Ejemplo                     |
|---------------|-----------------------------------------------|-----------------------------|
| `Page`        | Componente raíz asociado a una ruta            | `LoginPage`, `DashboardPage` |
| `Layout`      | Distribución general de página                 | `MainLayout`, `AuthLayout` |
| `Form`        | Formularios completos                          | `UserForm`, `EstimadoUnitarioForm` |
| `Field`       | Campos de formulario (input, select, etc.)     | `InputNumberField`, `SelectField` |
| `Modal`       | Diálogos emergentes o confirmaciones           | `ConfirmDeleteModal`       |
| `Button`      | Botones reutilizables                          | `SubmitButton`, `IconButton` |
| `Card`        | Bloques visuales o resumen                     | `ProductCard`, `InfoCard`  |
| `Table`       | Tabla de datos                                 | `UserTable`, `InvoiceTable` |
| `Item`        | Elemento individual dentro de una lista        | `ProductItem`, `TaskItem`  |
| `List`        | Conjunto de elementos                          | `TaskList`, `UserList`     |
| `Section`     | Agrupación dentro de una página                | `HeaderSection`, `StatsSection` |
| `Container`   | Componentes que coordinan lógica y presentación| `UserContainer`, `FormContainer` |