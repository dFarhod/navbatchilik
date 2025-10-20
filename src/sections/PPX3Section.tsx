import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";

interface PPX3Item {
  id: number;
  iib: string;
  tel: string;
  hudud: string;
  xodim1: string;
  xodim2: string;
  mashina: string;
  raqam: string;
}

interface PPX3SectionProps {
  ppx3Bosqich: PPX3Item[];
  setPpx3Bosqich: React.Dispatch<React.SetStateAction<PPX3Item[]>>;
}

const PPX3Section: React.FC<PPX3SectionProps> = ({
  ppx3Bosqich,
  setPpx3Bosqich,
}) => {
  const updateItem = (id: number, field: keyof PPX3Item, value: string) => {
    setPpx3Bosqich((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  };

  return (
    <div className="space-y-4">
      {ppx3Bosqich.map((p) => (
        <Card key={p.id}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              value={p.iib}
              placeholder="IIB"
              onChange={(e) => updateItem(p.id, "iib", e.target.value)}
            />
            <Input
              value={p.tel}
              placeholder="Telefon"
              onChange={(e) => updateItem(p.id, "tel", e.target.value)}
            />
            <Input
              value={p.hudud}
              placeholder="Hudud"
              onChange={(e) => updateItem(p.id, "hudud", e.target.value)}
              className="col-span-2"
            />
            <Input
              value={p.xodim1}
              placeholder="Xodim 1"
              onChange={(e) => updateItem(p.id, "xodim1", e.target.value)}
            />
            <Input
              value={p.xodim2}
              placeholder="Xodim 2"
              onChange={(e) => updateItem(p.id, "xodim2", e.target.value)}
            />
            <Input
              value={p.mashina}
              placeholder="Mashina"
              onChange={(e) => updateItem(p.id, "mashina", e.target.value)}
            />
            <Input
              value={p.raqam}
              placeholder="Raqam"
              onChange={(e) => updateItem(p.id, "raqam", e.target.value)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PPX3Section;
