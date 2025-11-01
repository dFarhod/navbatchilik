import { useState } from "react";
import { BrushCleaning, Save } from "lucide-react";
import Input from "../components/Input";
import Card from "../components/Card";
import Select from "../components/Select";
import { unvonlar } from "../data/unvonlar";
import type { IMasul } from "../types/interface";
import Button from "../components/Button";
import axios from "axios";
import { baseURL } from "@/service/api";

const MasullarSection = () => {
  const [masullar, setMasullar] = useState([
    {
      id: 1,
      label: "TIIO FMB bo‘yicha mas’ullar",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 2,
      label: "1-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 3,
      label: "2-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 4,
      label: "3-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 5,
      label: "4-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 6,
      label: "5-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const updateItem = (id: number, field: keyof IMasul, value: string) => {
    setMasullar((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const clearItem = (id: number) => {
    setMasullar((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, lavozim: "", unvon: "", fish: "" } : item
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    try {
      const payload = masullar.map((item) => ({
        label: item.label,
        lavozim: item.lavozim,
        unvon: item.unvon,
        fish: item.fish,
      }));
      const res = await axios.post(`${baseURL}/masullar/bulk`, {
        masullar: payload,
      }); // ✅ API manzilingizni shu yerda belgilang
      setMessage("✅ Ma’lumotlar muvaffaqiyatli saqlandi!");
      console.log("Yuborilgan data:", res.data);
    } catch (error) {
      console.error("Xatolik:", error);
      setMessage("❌ Ma’lumotlarni yuborishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          1. Tuman Mas'ullari
        </h2>
        <div className="flex gap-2">
          <Button
            variant="primary"
            icon={Save}
            disabled={loading}
            onClick={handleSave}
          >
            {loading ? "Saqlanmoqda..." : "Saqlash"}
          </Button>
        </div>
      </div>
      {message && (
        <div
          className={`mb-4 text-sm p-3 rounded-lg ${
            message.startsWith("✅")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
      <div className="space-y-2">
        {masullar.map((m, i) => (
          <div key={m.id}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {m.label}
            </h3>

            <Card className="flex gap-4 items-center">
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
                onClick={() => clearItem(m.id)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
                title="Maydonlarni tozalash"
              >
                <BrushCleaning size={20} />
              </button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasullarSection;
