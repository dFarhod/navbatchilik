import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";

// 🔹 Har bir tergov elementi uchun tip
interface Tergov {
  id: number;
  tb: string; // Tergov bo‘limi xodimi
  jqb: string; // Jinoyat qidiruv bo‘limi
  ekb: string; // Ekspertiza bo‘limi
  vaqt: string; // Xizmat vaqti
}

// 🔹 Komponent props tiplari
interface TergovSectionProps {
  tergov: Tergov[];
  setTergov: React.Dispatch<React.SetStateAction<Tergov[]>>;
  xaydovchi: string;
  setXaydovchi: React.Dispatch<React.SetStateAction<string>>;
}

const TergovSection: React.FC<TergovSectionProps> = ({
  tergov,
  setTergov,
  xaydovchi,
  setXaydovchi,
}) => {
  // 🔹 Ro‘yxatdagi elementni yangilash
  const updateItem = (id: number, field: keyof Tergov, value: string) => {
    setTergov((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      {/* 🔹 Tergov-tezkor guruh ro‘yxati */}
      {tergov.map((t) => (
        <Card key={t.id} className="p-4">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-bold font-medium text-gray-700 dark:text-gray-300 mb-2">
                TB
              </label>
              <Input
                value={t.tb}
                placeholder="TB"
                onChange={(e) => updateItem(t.id, "tb", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-bold font-medium text-gray-700 dark:text-gray-300 mb-2">
                JQB
              </label>
              <Input
                value={t.jqb}
                placeholder="JQB"
                onChange={(e) => updateItem(t.id, "jqb", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-bold font-medium text-gray-700 dark:text-gray-300 mb-2">
                EKB
              </label>
              <Input
                value={t.ekb}
                placeholder="EKB"
                onChange={(e) => updateItem(t.id, "ekb", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-bold font-medium text-gray-700 dark:text-gray-300 mb-2">
                Vaqt
              </label>
              <Input
                value={t.vaqt}
                placeholder="08:00-08:00"
                onChange={(e) => updateItem(t.id, "vaqt", e.target.value)}
              />
            </div>
          </div>
        </Card>
      ))}

      {/* 🔹 Haydovchi uchun alohida input */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 p-4">
        <label className="block text-lg font-bold font-medium text-gray-700 dark:text-gray-300 mb-2">
          Haydovchi
        </label>
        <Input
          value={xaydovchi}
          onChange={(e) => setXaydovchi(e.target.value)}
          className="w-full"
          placeholder="Haydovchi F.I.Sh"
        />
      </Card>
    </div>
  );
};

export default TergovSection;
