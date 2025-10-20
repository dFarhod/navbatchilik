import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";

export interface ChbskItem {
  id: number;
  turi: string;
  hudud: string;
  xodim: string;
  tel: string;
}

interface ChbskSectionProps {
  chbsk: ChbskItem[];
  setChbsk: React.Dispatch<React.SetStateAction<ChbskItem[]>>;
}

const ChbskSection: React.FC<ChbskSectionProps> = ({ chbsk, setChbsk }) => {
  const updateItem = (id: number, field: keyof ChbskItem, value: string) => {
    setChbsk((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
        ChBSK xodimlari (08:00 - 20:00)
      </h3>
      {chbsk.map((c) => (
        <Card key={c.id}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              value={c.turi}
              placeholder="Turi (Post, piyoda)"
              onChange={(e) => updateItem(c.id, "turi", e.target.value)}
            />
            <Input
              value={c.hudud}
              placeholder="Yo‘nalish hududi"
              onChange={(e) => updateItem(c.id, "hudud", e.target.value)}
            />
            <Input
              value={c.xodim}
              placeholder="F.I.Sh"
              onChange={(e) => updateItem(c.id, "xodim", e.target.value)}
            />
            <Input
              value={c.tel}
              placeholder="Tel. raqam"
              onChange={(e) => updateItem(c.id, "tel", e.target.value)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ChbskSection;
