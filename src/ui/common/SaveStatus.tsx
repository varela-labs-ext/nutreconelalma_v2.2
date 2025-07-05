import { Check, Save, Clock } from "lucide-react"


interface SaveStatusProps {
    lastSaved: Date | null
    isSaving: boolean
    hasChanges: boolean
    onSave?: () => void
    className?: string
}

const SaveStatus = (props: SaveStatusProps) => {
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    // {ccnn("flex items-center gap-2 text-sm", props.className)}

    return (
        <div className={`flex items-center gap-2 text-sm ${props.className}`}>
            {props.isSaving ? (
                <>
                    <Save className="h-4 w-4 animate-pulse text-yellow-500" />
                    <span className="text-yellow-500">Guardando...</span>
                </>
            ) : props.hasChanges ? (
                <>
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span className="text-yellow-500">Cambios sin guardar</span>
                    {props.onSave && (
                        <button onClick={props.onSave} className="text-blue-500 hover:text-blue-700 underline text-xs ml-2">
                            Guardar ahora
                        </button>
                    )}
                </>
            ) : props.lastSaved ? (
                <>
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-green-500">Guardado a las {formatTime(props.lastSaved)}</span>
                </>
            ) : null}
        </div>
    );

}

export default SaveStatus;