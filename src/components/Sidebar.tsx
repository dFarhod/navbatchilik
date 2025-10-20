import React from "react";
import { ChevronRight, FileDown, type LucideIcon } from "lucide-react";
import Button from "./Button";

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  exportAll: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeSection,
  setActiveSection,
  exportAll,
}) => {
  return (
    <div className="w-80 bg-white dark:bg-gray-800 shadow-2xl p-6 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Kunlik Taqsimot
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Chilonzor IIO FMB
        </p>
      </div>

      {/* Export Button */}
      <Button
        onClick={exportAll}
        variant="success"
        icon={FileDown}
        className="w-full mb-6 py-3 shadow-lg"
      >
        Export
      </Button>

      {/* Navigation */}
      <nav className="space-y-1">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium flex-1 text-left">
                {section.title}
              </span>
              {isActive && <ChevronRight size={18} />}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
