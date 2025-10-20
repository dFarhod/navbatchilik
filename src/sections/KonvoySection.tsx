import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";

// 🔹 Har bir NO'J guruhi a’zosi uchun tip
interface NojXodim {
  id: number;
  fish: string;
  tel: string;
}

// 🔹 Props tiplari
interface KonvoySectionProps {
  nojGuruh: NojXodim[];
  setNojGuruh: React.Dispatch<React.SetStateAction<NojXodim[]>>;
}

const KonvoySection: React.FC<KonvoySectionProps> = ({
  nojGuruh,
  setNojGuruh,
}) => {
  // 🔹 Bitta xodimning maydonini yangilash
  const updateItem = (id: number, field: keyof NojXodim, value: string) => {
    setNojGuruh((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
        NO'J guruhi xodimlari
      </h3>

      {nojGuruh.map((n) => (
        <Card key={n.id} className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              value={n.fish}
              placeholder="F.I.Sh"
              onChange={(e) => updateItem(n.id, "fish", e.target.value)}
            />
            <Input
              value={n.tel}
              placeholder="Telefon"
              onChange={(e) => updateItem(n.id, "tel", e.target.value)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default KonvoySection;
