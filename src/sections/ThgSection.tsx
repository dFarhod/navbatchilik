import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";

export interface ThgItem {
  id: number;
  guruh: string;
  kunduz: string;
  tun: string;
}

interface ThgSectionProps {
  thg: ThgItem[];
  setThg: React.Dispatch<React.SetStateAction<ThgItem[]>>;
}

const ThgSection: React.FC<ThgSectionProps> = ({ thg, setThg }) => {
  const updateItem = (id: number, field: keyof ThgItem, value: string) => {
    setThg((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
        THG xodimlari (kunduzgi / tungi xizmat)
      </h3>
      {thg.map((t) => (
        <Card key={t.id}>
          <div className="grid grid-cols-3 gap-4">
            <Input
              value={t.guruh}
              placeholder="THG guruhi"
              onChange={(e) => updateItem(t.id, "guruh", e.target.value)}
            />
            <Input
              value={t.kunduz}
              placeholder="Kunduzgi xodim"
              onChange={(e) => updateItem(t.id, "kunduz", e.target.value)}
            />
            <Input
              value={t.tun}
              placeholder="Tungi xodim"
              onChange={(e) => updateItem(t.id, "tun", e.target.value)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ThgSection;
