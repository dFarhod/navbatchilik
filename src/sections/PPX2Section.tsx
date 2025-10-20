import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";

interface PPX2Item {
  id: number;
  raqam: string;
  hudud: string;
  xodim1: string;
  xodim2: string;
  izoh: string;
}

interface PPX2SectionProps {
  ppx2Bosqich: PPX2Item[];
  setPpx2Bosqich: React.Dispatch<React.SetStateAction<PPX2Item[]>>;
}

const PPX2Section: React.FC<PPX2SectionProps> = ({
  ppx2Bosqich,
  setPpx2Bosqich,
}) => {
  const updateItem = (id: number, field: keyof PPX2Item, value: string) => {
    setPpx2Bosqich((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  };

  return (
    <div className="space-y-4">
      {ppx2Bosqich.map((p) => (
        <Card key={p.id}>
          <div className="grid grid-cols-1 gap-3">
            <Input
              value={p.raqam}
              placeholder="Chaqiruv raqami"
              onChange={(e) => updateItem(p.id, "raqam", e.target.value)}
            />
            <Input
              value={p.hudud}
              placeholder="Hudud"
              onChange={(e) => updateItem(p.id, "hudud", e.target.value)}
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
              value={p.izoh}
              placeholder="Izoh"
              onChange={(e) => updateItem(p.id, "izoh", e.target.value)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PPX2Section;
