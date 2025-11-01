import { useState } from "react";
import { BrushCleaning, Save } from "lucide-react";
import Card from "../components/Card";
import Input from "../components/Input";
import Select from "../components/Select";
import type { INavbatchi } from "../types/interface";
import { unvonlar } from "../data/unvonlar";
import Button from "../components/Button";
import axios from "axios";
import { baseURL } from "@/service/api";

const NavbatchilarSection = () => {
  const [navbatchilar, setNavbatchilar] = useState([
    {
      id: 1,
      label: "MB NK tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 2,
      label: "MB NK navbatchi yordamchisi",
      unvon: "",
      fish: "",
    },
    {
      id: 3,
      label: "MB NK navbatchi yordamchisi",
      unvon: "",
      fish: "",
    },
    { id: 4, label: "Monitoring", unvon: "", fish: "" },
    { id: 5, label: "Body kamera", unvon: "", fish: "" },
    { id: 6, label: "Q/B", unvon: "", fish: "" },
    {
      id: 7,
      label: "1-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 8,
      label: "2-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 9,
      label: "3-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 10,
      label: "4-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 11,
      label: "5-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateItem = (id: number, field: keyof INavbatchi, value: string) => {
    setNavbatchilar((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const clearItem = (id: number) => {
    setNavbatchilar((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, lavozim: "", unvon: "", fish: "" } : item
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    try {
      // Faqat kerakli maydonlarni yuboramiz
      const payload = navbatchilar.map((item) => ({
        label: item.label,
        unvon: item.unvon,
        fish: item.fish,
      }));

      const res = await axios.post(`${baseURL}/navbatchilar/bulk`, {
        navbatchilar: payload,
      });

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
          2. Navbatchilar
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
        {navbatchilar.map((n, i) => (
          <div key={n.id}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {n.label}
            </h3>
            <Card className="w-full flex gap-4 items-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                <Select
                  value={n.unvon}
                  onChange={(e) => updateItem(n.id, "unvon", e.target.value)}
                  options={unvonlar}
                  placeholder="Unvon"
                />

                <Input
                  value={n.fish}
                  onChange={(e) => updateItem(n.id, "fish", e.target.value)}
                  placeholder="F.I.Sh"
                />
              </div>

              <button
                onClick={() => clearItem(n.id)}
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

export default NavbatchilarSection;
