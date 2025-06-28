# nutreconelalma_v2.1
# React Calculadora App

Proyecto base en React + TypeScript con TailwindCSS, Context API, Firebase Auth, LocalForage y pruebas con Vitest.

## 🧱 Estructura del Proyecto

```
src/
├── assets/              # Imágenes, logos, etc.
├── components/          # Componentes reutilizables
├── features/            # Páginas: auth, calculadora, histórico, configuración
├── layouts/             # Layouts visuales
├── logic/               # Lógica de negocio (ej: CalculadoraService)
├── modelos/             # Tipado e interfaces de datos
├── services/            # Firebase, almacenamiento
├── context/             # Estado global (AuthContext)
├── hooks/               # Custom hooks
├── types/               # Tipado global compartido
├── utils/               # Utilidades y validaciones
├── App.tsx              # Rutas y navegación
└── main.tsx             # Punto de entrada
```

## 🚀 Características

- Login tradicional + preparado para Google Auth (Firebase)
- Navegación protegida con Context API
- Página principal con tabs e inputs por bloques
- Configuración en tabs y acordeones
- Persistencia local con LocalForage
- Vista resumen para impresión PDF
- Pruebas unitarias con Vitest

## 📦 Instalación y uso

```bash
npm install
npm run dev
```

### 🧪 Pruebas

```bash
npm run test
```
