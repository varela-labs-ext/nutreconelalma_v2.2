import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";

type ComboboxOption = {
    label: string;
    value: string;
    icon?: ReactNode;
};

type ComboboxSelectorProps = {
    value: string;
    onChange: (newValue: string) => void;
    options: ComboboxOption[];
    placeholder?: string;
    className?: string;
};

const ComboboxSelector = (props: ComboboxSelectorProps) => {
    return (
        <Select value={props.value} onValueChange={props.onChange}>
            <SelectTrigger className={props.className || "w-full"}>
                <SelectValue placeholder={props.placeholder || "Seleccione..."} />
            </SelectTrigger>
            <SelectContent>
                {props.options.map((option) => (
                    <SelectItem
                        key={option.value}
                        value={option.value}
                        className="cursor-pointer focus:bg-purple-100 hover:bg-purple-100"
                    >
                        <div className="flex items-center gap-2">
                            {option.icon && (
                                <span className="text-base text-gray-600">
                                    {option.icon}
                                </span>
                            )}
                            <span>{option.label}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default ComboboxSelector;
