import { useState } from "react";
import { BrushCleaning, Save } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import type { IPPX1Item } from "../types/interface";
import axios from "axios";
import { baseURL } from "@/service/api";

const PPX1Section = () => {
  const [ppx1Bosqich, setPpx1Bosqich] = useState([
    {
      id: 1,
      iib: "1-son IIB",
      tel: "71-230-17-05",
      hudud: "Al-Xorazmiy, Bekto‘pi maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 2,
      iib: "2-son IIB",
      tel: "71-206-85-20",
      hudud: "Katta Olmazor, Bes’hyog‘och maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 3,
      iib: "2-son IIB",
      tel: "",
      hudud: "1-3-Katta Chilonzor mahallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 4,
      iib: "3-son IIB",
      tel: "71-230-16-08",
      hudud: "Oqtepa, Bog‘zor va 1-Qatortol mahallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 5,
      iib: "3-son IIB",
      tel: "",
      hudud: "Navbahor, Katta Navbahor, Ko‘tarma maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 6,
      iib: "3-son IIB",
      tel: "",
      hudud:
        "KXAY-Bunyodkor chorrahasidan Navbahor tomoni bo‘ylab, LOOK kafesigacha 'Gul bozor'",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 7,
      iib: "4-son IIB",
      tel: "71-276-27-89",
      hudud: "K.Do‘mbirobod, Naqqoshlik mahallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 8,
      iib: "4-son IIB",
      tel: "",
      hudud:
        "KXAY-Bunyodkor chorrahasidan Bunyodkor yo‘li bo‘ylab, 2-Qatortol ko‘chasigacha",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 9,
      iib: "5-son IIB",
      tel: "71-287-73-50",
      hudud: "Beshqo‘rg‘on mahallasi",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 10,
      iib: "",
      tel: "",
      hudud: "Navbahor MFY",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 11,
      iib: "",
      tel: "",
      hudud: "Cho‘ponota (fuqorolik kiyimida)",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 12,
      iib: "",
      tel: "",
      hudud: "Qatortol (fuqorolik kiyimida)",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 13,
      iib: "",
      tel: "",
      hudud: "Zarqo‘rg‘on (fuqorolik kiyimida)",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 14,
      iib: "",
      tel: "",
      hudud: "EKO patrul",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 15,
      iib: "",
      tel: "",
      hudud: "Tadbir",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 16,
      iib: "",
      tel: "",
      hudud: "Filtr",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 17,
      iib: "",
      tel: "",
      hudud: "Ishchi guruh",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 18,
      iib: "",
      tel: "",
      hudud: "Nazorat",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 19,
      iib: "",
      tel: "",
      hudud: "Avtovogzal",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 20,
      iib: "",
      tel: "",
      hudud: "Avtovogzal (08:00-08:00)",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateItem = (id: number, field: keyof IPPX1Item, value: string) => {
    setPpx1Bosqich((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const clearItem = (id: number) => {
    setPpx1Bosqich((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              tel: "",
              xodim1: "",
              xodim2: "",
              mashina: "",
              raqam: "",
            }
          : item
      )
    );
  };
  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    const xodimlar = ppx1Bosqich.map((p) => ({
      bosqich: "1-bosqich",
      title: "TIIO FMB PPX 1-otryad 1-bosqich taqsimoti (08:00–20:00)",
      otryad: "1-otryad",
      vaqtOraliq: "08:00-20:00",
      iib: p.iib,
      tel: p.tel,
      hudud: p.hudud,
      xodim1: p.xodim1,
      xodim2: p.xodim2,
      mashina: p.mashina,
      raqam: p.raqam,
    }));

    try {
      const res = await axios.post(
        `${baseURL}/ppxBosqich/bulk`,
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
          3. TIIO FMB PPX 1-otryad 1-bosqich taqsimoti (08:00–20:00)
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

      {/* Xabar chiqadi */}
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
        {ppx1Bosqich.map((p, i) => (
          <Card key={p.id} className="p-4 space-y-4">
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

            <div className="grid grid-cols-2 gap-4">
              <Input
                value={p.iib}
                onChange={(e) => updateItem(p.id, "iib", e.target.value)}
                placeholder="IIB"
              />
              <Input
                value={p.tel}
                onChange={(e) => updateItem(p.id, "tel", e.target.value)}
                placeholder="Telefon"
              />
            </div>

            <Input
              className="w-full"
              value={p.hudud}
              onChange={(e) => updateItem(p.id, "hudud", e.target.value)}
              placeholder="Hudud (mahalla yoki joy nomi)"
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                value={p.xodim1}
                onChange={(e) => updateItem(p.id, "xodim1", e.target.value)}
                placeholder="PPX xodim 1 (F.I.Sh)"
              />
              <Input
                value={p.xodim2}
                onChange={(e) => updateItem(p.id, "xodim2", e.target.value)}
                placeholder="PPX xodim 2 (F.I.Sh)"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                value={p.mashina}
                onChange={(e) => updateItem(p.id, "mashina", e.target.value)}
                placeholder="Xizmat mashinasi"
              />
              <Input
                value={p.raqam}
                onChange={(e) => updateItem(p.id, "raqam", e.target.value)}
                placeholder="Mashina raqami"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PPX1Section;
