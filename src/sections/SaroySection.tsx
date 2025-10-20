import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";

export interface SaroyItem {
  id: number;
  hudud: string;
  xodim: string;
  unvon: string;
  vaqt: string;
}

interface SaroySectionProps {
  saroy: SaroyItem[];
  setSaroy: React.Dispatch<React.SetStateAction<SaroyItem[]>>;
}

const SaroySection: React.FC<SaroySectionProps> = ({ saroy, setSaroy }) => {
  const updateItem = (id: number, field: keyof SaroyItem, value: string) => {
    setSaroy((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
        Xalqlar Do‘stligi Saroyi xodimlari
      </h3>
      {saroy.map((s) => (
        <Card key={s.id}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              value={s.hudud}
              placeholder="Hudud"
              onChange={(e) => updateItem(s.id, "hudud", e.target.value)}
            />
            <Input
              value={s.xodim}
              placeholder="F.I.Sh"
              onChange={(e) => updateItem(s.id, "xodim", e.target.value)}
            />
            <Input
              value={s.unvon}
              placeholder="Unvon"
              onChange={(e) => updateItem(s.id, "unvon", e.target.value)}
            />
            <Input
              value={s.vaqt}
              placeholder="Vaqt"
              onChange={(e) => updateItem(s.id, "vaqt", e.target.value)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SaroySection;
