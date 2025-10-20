import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import { Plus, Trash2 } from "lucide-react";
import Button from "../components/Button";

interface PiyodaItem {
  id: number;
  mfy: string;
  xodim: string;
}

interface PPX1PiyodaSectionProps {
  ppx1BosqichPiyoda: PiyodaItem[];
  setPpx1BosqichPiyoda: React.Dispatch<React.SetStateAction<PiyodaItem[]>>;
}

const PPX1PiyodaSection: React.FC<PPX1PiyodaSectionProps> = ({
  ppx1BosqichPiyoda,
  setPpx1BosqichPiyoda,
}) => {
  const updateItem = (id: number, field: keyof PiyodaItem, value: string) => {
    setPpx1BosqichPiyoda((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const deleteItem = (id: number) => {
    setPpx1BosqichPiyoda((prev) => prev.filter((i) => i.id !== id));
  };

  const addItem = () => {
    setPpx1BosqichPiyoda((prev) => [
      ...prev,
      { id: Date.now(), mfy: "", xodim: "" },
    ]);
  };

  return (
    <div className="space-y-4">
      {ppx1BosqichPiyoda.map((p) => (
        <Card key={p.id}>
          <div className="grid grid-cols-2 gap-4 items-center">
            <Input
              value={p.mfy}
              placeholder="MFY"
              onChange={(e) => updateItem(p.id, "mfy", e.target.value)}
            />
            <Input
              value={p.xodim}
              placeholder="Xodim"
              onChange={(e) => updateItem(p.id, "xodim", e.target.value)}
            />
            <button
              onClick={() => deleteItem(p.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </Card>
      ))}
      <Button onClick={addItem} icon={Plus} variant="primary">
        Qo‘shish
      </Button>
    </div>
  );
};

export default PPX1PiyodaSection;
