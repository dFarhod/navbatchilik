import React from "react";
import { Trash2 } from "lucide-react";
import Input from "../components/Input";
import Card from "../components/Card";
import Select from "../components/Select";
// import Button from "../components/Button";

// 🔹 Har bir mas’ul uchun tip
interface Masul {
  id: number;
  label: string;
  lavozim: string;
  unvon: string;
  fish: string;
}

// 🔹 Select uchun opsiyalar tipi (agar siz string array yuborsangiz)
interface Option {
  label: string;
  value: string;
}

// 🔹 Props tipi
interface MasullarSectionProps {
  masullar: Masul[];
  setMasullar: React.Dispatch<React.SetStateAction<Masul[]>>;
  unvonlar: Option[]; // yoki agar bu oddiy string[] bo‘lsa: string[]
}

const MasullarSection: React.FC<MasullarSectionProps> = ({
  masullar,
  setMasullar,
  unvonlar,
}) => {
  // 🔹 Elementni yangilash
  const updateItem = (id: number, field: keyof Masul, value: string) => {
    setMasullar((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // 🔹 Elementni o‘chirish
  const deleteItem = (id: number) => {
    setMasullar((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Yangi element qo‘shish
  // const addItem = () => {
  //   setMasullar((prev) => {
  //     const maxId = prev.length > 0 ? Math.max(...prev.map((p) => p.id)) : 0;
  //     return [
  //       ...prev,
  //       { id: maxId + 1, label: "", lavozim: "", unvon: "", fish: "" },
  //     ];
  //   });
  // };

  return (
    <div className="space-y-4">
      {masullar.map((m, i) => (
        <Card key={m.id} className="p-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {m.label}
          </h3>

          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {i + 1}
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4">
              <Input
                value={m.lavozim}
                onChange={(e) => updateItem(m.id, "lavozim", e.target.value)}
                placeholder="Lavozim"
              />

              <Select
                value={m.unvon}
                onChange={(e) => updateItem(m.id, "unvon", e.target.value)}
                options={unvonlar}
                placeholder="Unvon"
              />

              <Input
                value={m.fish}
                onChange={(e) => updateItem(m.id, "fish", e.target.value)}
                placeholder="F.I.Sh"
              />
            </div>

            <button
              onClick={() => deleteItem(m.id)}
              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </Card>
      ))}

      {/* <Button
        onClick={addItem}
        variant="primary"
        icon={Plus}
        className="w-full py-3"
      >
        Qo‘shish
      </Button> */}
    </div>
  );
};

export default MasullarSection;
