import { Fragment, useState } from "react";
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    ComboboxButton,
} from "@headlessui/react";
import { Check, ChevronsUpDown } from "lucide-react";
import clsx from "clsx";

interface OptionItem {
    id: string;
    label: string;
    color: string; // e.g., "bg-green-500"
}

interface StatusComboboxProps {
    options: OptionItem[];
    value: string | null;
    onChange: (newId: string) => void;
    placeholder?: string;
}

const StatusCombobox = ({
    options,
    value,
    onChange,
    placeholder,
}: StatusComboboxProps) => {
    const [query, setQuery] = useState("");

    const selectedItem = options.find((o) => o.id === value) || null;

    const filteredOptions =
        query === ""
            ? options
            : options.filter((option) =>
                option.label.toLowerCase().includes(query.toLowerCase())
            );

    return (
        <Combobox value={value} onChange={onChange}>
            <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-md border border-gray-300 bg-white text-left shadow-sm focus-within:ring-1 focus-within:ring-purple-500">
                    <ComboboxInput
                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                        displayValue={(id: string) => {
                            const item = options.find((o) => o.id === id);
                            return item ? item.label : "";
                        }}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={placeholder ?? "Seleccionar..."}
                    />
                    <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <ChevronsUpDown className="h-4 w-4 text-gray-400" />
                    </ComboboxButton>
                </div>

                <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow-lg focus:outline-none">
                    {filteredOptions.map((option) => (
                        <ComboboxOption
                            key={option.id}
                            value={option.id}
                            className="relative cursor-pointer select-none px-4 py-2 text-sm text-gray-900 data-[headlessui-state~='active']:bg-purple-100 data-[headlessui-state~='active']:text-purple-700"
                        >
                            {({ selected }) => (
                                <div className="flex items-center gap-2">
                                    <span
                                        className={clsx("h-2 w-2 rounded-full", option.color)}
                                    />
                                    <span className="truncate flex-1">{option.label}</span>
                                    {selected && <Check className="h-4 w-4 text-purple-500" />}
                                </div>
                            )}
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </div>
        </Combobox>
    );
};

export default StatusCombobox;
