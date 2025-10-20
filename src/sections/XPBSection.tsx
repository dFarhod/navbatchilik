import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";

export interface XPBItem {
  id: number;
  iib: string;
  tel: string;
  hudud: string;
  xodim: string;
  unvon: string;
}

interface XPBSectionProps {
  xpb: XPBItem[];
  setXpb: React.Dispatch<React.SetStateAction<XPBItem[]>>;
}

const XPBSection: React.FC<XPBSectionProps> = ({ xpb, setXpb }) => {
  const updateItem = (id: number, field: keyof XPBItem, value: string) => {
    setXpb((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
        XPB PI xodimlari (20:00 - 08:00)
      </h3>
      {xpb.map((p) => (
        <Card key={p.id}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              value={p.iib}
              placeholder="IIB raqami"
              onChange={(e) => updateItem(p.id, "iib", e.target.value)}
            />
            <Input
              value={p.tel}
              placeholder="Telefon"
              onChange={(e) => updateItem(p.id, "tel", e.target.value)}
            />
            <Input
              value={p.hudud}
              placeholder="Biriktirilgan hudud"
              onChange={(e) => updateItem(p.id, "hudud", e.target.value)}
            />
            <Input
              value={p.xodim}
              placeholder="F.I.Sh"
              onChange={(e) => updateItem(p.id, "xodim", e.target.value)}
            />
            <Input
              value={p.unvon}
              placeholder="Unvoni"
              onChange={(e) => updateItem(p.id, "unvon", e.target.value)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default XPBSection;
