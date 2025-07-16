// src/components/SectionTitle.tsx
import { FileText } from "lucide-react";

type SectionTitleProps = {
    titleText: string;
};

const SectionTitle = (props: SectionTitleProps) => {
    return (
        <div className="flex items-center gap-2 mb-4">
            <FileText className="text-purple-700 w-6 h-6" />
            {/* font-semibold text-purple-700 */}
            <span className="text-2xl text-green-600 font-medium">
                {props.titleText}
            </span>
        </div>
    );
};

export default SectionTitle;
