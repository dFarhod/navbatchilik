import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import { BrushCleaning, Save } from "lucide-react";
import Button from "../components/Button";
import axios from "axios";
import { baseURL } from "@/service/api";

interface PiyodaItem {
  id: number;
  mfy: string;
  xodim: string;
}

const PPX1PiyodaSection = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [ppx1BosqichPiyoda, setPpx1BosqichPiyoda] = useState([
    { chr: 1, mfy: "Novza MFY", xodim: "D.Esonov" },
    { chr: 2, mfy: "Novza MFY", xodim: "J.Usmonov" },
    { chr: 3, mfy: "Qozirabod MFY", xodim: "M.Xashimov" },
    { chr: 4, mfy: "Qozirabod MFY", xodim: "A.Aldanov" },
    { chr: 5, mfy: "Chilonzor MFY", xodim: "R.Esonov" },
    { chr: 6, mfy: "Chilonzor MFY", xodim: "B.Murodullayev" },
    { chr: 7, mfy: "Ko'tarma", xodim: "B.Karimov" },
    { chr: 8, mfy: "Ko'tarma", xodim: "" },
    { chr: 9, mfy: "Beshchinor MFY", xodim: "H.Bobojonov" },
    { chr: 10, mfy: "Beshchinor MFY", xodim: "I.Raxmatov" },
  ]);

  const updateItem = (id: number, field: keyof PiyodaItem, value: string) => {
    setPpx1BosqichPiyoda((prev) =>
      prev.map((item) => (item.chr === id ? { ...item, [field]: value } : item))
    );
  };

  const clearItem = (id: number) => {
    setPpx1BosqichPiyoda((prev) =>
      prev.map((item) =>
        item.chr === id
          ? {
              ...item,
              xodim: "",
            }
          : item
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    const payload = {
      ppxBosqichPiyoda: ppx1BosqichPiyoda.map((item) => ({
        bosqich: `1-bosqich`,
        vaqtOraliq: "08:00-20:00",
        chr: item.chr,
        mfy: item.mfy,
        xodim: item.xodim,
      })),
    };

    try {
      const res = await axios.post(
        `${baseURL}/ppxBosqichPiyoda/bulk`,
        payload
      );
      setMessage("✅ Ma’lumotlar muvaffaqiyatli saqlandi!");
      console.log("Yuborilgan data:", res.data);
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
          3.1 TIIO FMB PPX 1-otryad 1-bosqich taqsimoti soat (10:00 dan 22:00
          gacha)
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
        {ppx1BosqichPiyoda.map((p, i) => (
          <Card key={p.chr}>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <Input
                className="flex-1"
                value={p.mfy}
                placeholder="MFY"
                onChange={(e) => updateItem(p.chr, "mfy", e.target.value)}
              />
              <Input
                className="flex-1"
                value={p.xodim}
                placeholder="Xodim"
                onChange={(e) => updateItem(p.chr, "xodim", e.target.value)}
              />
              <button
                onClick={() => clearItem(p.chr)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
                title="Maydonlarni tozalash"
              >
                <BrushCleaning size={20} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PPX1PiyodaSection;
