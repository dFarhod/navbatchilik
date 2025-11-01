import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { BrushCleaning, Save } from "lucide-react";
import axios from "axios";
import { baseURL } from "@/service/api";

export interface ThgItem {
  id: number;
  guruh: string;
  kunduz: string;
  tun: string;
}

const ThgSection = () => {
  const [thg, setThg] = useState([
    {
      id: 1,
      guruh: "1-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 2,
      guruh: "1-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 3,
      guruh: "1-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 4,
      guruh: "2-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 5,
      guruh: "2-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 6,
      guruh: "2-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 7,
      guruh: "3-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 8,
      guruh: "3-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 9,
      guruh: "3-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 10,
      guruh: "4-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 11,
      guruh: "4-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 12,
      guruh: "4-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 13,
      guruh: "5-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 14,
      guruh: "5-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 15,
      guruh: "5-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 16,
      guruh: "6-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 17,
      guruh: "6-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 18,
      guruh: "6-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 19,
      guruh: "7-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 20,
      guruh: "7-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 21,
      guruh: "7-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 22,
      guruh: "8-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 23,
      guruh: "8-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 24,
      guruh: "8-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 25,
      guruh: "8-THG",
      kunduz: "",
      tun: "",
    },
    {
      id: 26,
      guruh: "Dis",
      kunduz: "",
      tun: "",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateItem = (id: number, field: keyof ThgItem, value: string) => {
    setThg((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const clearItem = (id: number) => {
    setThg((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, kunduz: "", tun: "" } : item
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    const payload = {
      title: "Chilonzor tumani qo‘riqlash bo‘limi THG xodimlari",
      thg: thg.map((item) => ({
        guruh: item.guruh,
        kunduz: item.kunduz,
        tun: item.tun,
      })),
    };

    try {
      const res = await axios.post(
        `${baseURL}/thg/bulk`,
        payload
      );

      console.log("✅ Yuborilgan data:", res.data);
      setMessage("✅ Ma’lumotlar muvaffaqiyatli saqlandi!");
    } catch (error) {
      console.error("❌ Xatolik:", error);
      setMessage("❌ Ma’lumotlarni yuborishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          8. Chilonzor tumani qo‘riqlash bo‘limi THG xodimlarining 2025 yil 18
          oktabr kuniga
        </h2>
        <div className="flex gap-2">
          <Button
            variant="primary"
            icon={Save}
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saqlanmoqda..." : "Saqlash"}
          </Button>
        </div>
      </div>
      {message && (
        <div
          className={`p-2 rounded-lg text-sm ${
            message.startsWith("✅")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
      <div className="space-y-4">
        {thg.map((t) => (
          <Card key={t.id} className="p-4 flex">
            <div className="flex-1 grid grid-cols-3 gap-4 items-center">
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
            <button
              onClick={() => clearItem(t.id)}
              className="block p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
              title="Maydonlarni tozalash"
            >
              <BrushCleaning size={20} />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ThgSection;
