import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import type { IPPX2Item } from "../types/interface";
import Button from "../components/Button";
import { BrushCleaning, Save } from "lucide-react";
import axios from "axios";

const PPX2Section = () => {
  const [ppx2Bosqich, setPpx2Bosqich] = useState([
    {
      id: 1,
      chr: "4-yo‘nalish",
      hudud:
        "Bunyodkor–KXAY ko‘chalari chorrahasidan, KXAY ko‘chasining Navbaxor mahallasi tomoni bo‘ylab, Chilonzor Dehqon bozorigacha ('KFC')",
      xodim1: "",
      xodim2: "",
      izoh: "",
    },
    {
      id: 2,
      chr: "8-yo‘nalish",
      hudud:
        "Bunyodkor–Furqat ko‘chalari chorrahasidan, Furqat ko‘chasi bo‘ylab, 'Mejik siti' bekatigacha ('X.Do‘stligi maydoni')",
      xodim1: "",
      xodim2: "",
      izoh: "",
    },
    {
      id: 3,
      chr: "10-yo‘nalish",
      hudud: "Chilonzor ko‘chasi",
      xodim1: "",
      xodim2: "",
      izoh: "",
    },
    {
      id: 4,
      chr: "17-yo‘nalish",
      hudud: "Al-Xorazmiy ko‘chasi",
      xodim1: "",
      xodim2: "",
      izoh: "",
    },
    {
      id: 5,
      chr: "",
      hudud: "Chilonzor metro",
      xodim1: "",
      xodim2: "",
      izoh: "",
    },
    {
      id: 6,
      chr: "",
      hudud: "Gul bozor",
      xodim1: "",
      xodim2: "",
      izoh: "",
    },
    {
      id: 7,
      chr: "",
      hudud: "Seul mon",
      xodim1: "",
      xodim2: "",
      izoh: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateItem = (id: number, field: keyof IPPX2Item, value: string) => {
    setPpx2Bosqich((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  };

  const clearItem = (id: number) => {
    setPpx2Bosqich((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              xodim1: "",
              xodim2: "",
              izoh: "",
            }
          : item
      )
    );
  };
  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    const xodimlar = ppx2Bosqich.map((p) => ({
      bosqich: "2-bosqich",
      title:
        "TIIO FMB PPX 1-otryad 2-bosqich taqsimoti soat (15:00 dan 02:00 gacha)",
      otryad: "1-otryad",
      vaqtOraliq: "15:00-02:00",
      iib: p.izoh,
      tel: "",
      hudud: p.hudud,
      xodim1: p.xodim1,
      xodim2: p.xodim2,
      mashina: "",
      raqam: "",
    }));

    try {
      const res = await axios.post(
        "http://192.168.100.103:8888/api/ppxBosqich/bulk",
        {
          ppxBosqich: xodimlar,
        }
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
          3.2 TIIO FMB PPX 1-otryad 2-bosqich taqsimoti soat (15:00 dan 02:00
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
          className={`p-2 mb-4 rounded ${
            message.startsWith("✅")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
      <div className="space-y-4">
        {ppx2Bosqich.map((p, i) => (
          <Card key={p.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <button
                onClick={() => clearItem(p.id)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
                title="Maydonlarni tozalash"
              >
                <BrushCleaning size={20} />
              </button>
            </div>
            <Input
              className="w-full"
              value={p.hudud}
              placeholder="Hudud"
              onChange={(e) => updateItem(p.id, "hudud", e.target.value)}
            />
            <div className="grid grid-cols-2 gap-3">
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
                value={p.chr}
                placeholder="Yo'nalish"
                onChange={(e) => updateItem(p.id, "chr", e.target.value)}
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
    </div>
  );
};

export default PPX2Section;
