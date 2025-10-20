import React from "react";
import { Plus } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

// 🔹 PPX 1-bosqich patrul ma’lumotining tipi
interface PPX1Item {
  id: number;
  iib: string;
  tel: string;
  hudud: string;
  xodim1: string;
  xodim2: string;
  mashina: string;
  raqam: string;
}

// 🔹 Props tiplari
interface PPX1SectionProps {
  ppx1Bosqich: PPX1Item[];
  setPpx1Bosqich: React.Dispatch<React.SetStateAction<PPX1Item[]>>;
}

const PPX1Section: React.FC<PPX1SectionProps> = ({
  ppx1Bosqich,
  setPpx1Bosqich,
}) => {
  // 🔹 Ma’lumot yangilash
  const updateItem = (id: number, field: keyof PPX1Item, value: string) => {
    setPpx1Bosqich((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // 🔹 Yangi element qo‘shish
  const addItem = () => {
    setPpx1Bosqich((prev) => {
      const maxId = prev.length > 0 ? Math.max(...prev.map((p) => p.id)) : 0;
      return [
        ...prev,
        {
          id: maxId + 1,
          iib: "",
          tel: "",
          hudud: "",
          xodim1: "",
          xodim2: "",
          mashina: "",
          raqam: "",
        },
      ];
    });
  };

  return (
    <div className="space-y-4">
      {ppx1Bosqich.map((p) => (
        <Card key={p.id} className="p-4">
          <div className="space-y-3">
            {/* IIB va telefon */}
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
            </div>

            {/* Hudud */}
            <Input
              value={p.hudud}
              placeholder="Hudud"
              className="w-full"
              onChange={(e) => updateItem(p.id, "hudud", e.target.value)}
            />

            {/* Xodimlar */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                value={p.xodim1}
                placeholder="PPX Xodim 1"
                onChange={(e) => updateItem(p.id, "xodim1", e.target.value)}
              />
              <Input
                value={p.xodim2}
                placeholder="PPX Xodim 2"
                onChange={(e) => updateItem(p.id, "xodim2", e.target.value)}
              />
            </div>

            {/* Mashina va raqam */}
            <div className="grid grid-cols-2 gap-4">
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
          </div>
        </Card>
      ))}

      {/* Yangi patrul qo‘shish tugmasi */}
      <Button
        onClick={addItem}
        variant="primary"
        icon={Plus}
        className="w-full py-3"
      >
        Qo‘shish
      </Button>
    </div>
  );
};

export default PPX1Section;
