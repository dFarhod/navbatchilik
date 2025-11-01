import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import { BrushCleaning, Save } from "lucide-react";
import Button from "../components/Button";
import axios from "axios";
import { baseURL } from "@/service/api";

interface PPX3Item {
  id: number;
  iib: string;
  tel: string;
  hudud: string;
  xodim1: string;
  xodim2: string;
  mashina: string;
  raqam: string;
}

const PPX3Section = () => {
  const [ppx3Bosqich, setPpx3Bosqich] = useState([
    {
      id: 1,
      iib: "1-son IIB",
      tel: "71-230-17-05",
      hudud: "Al-Xorazmiy, Guliston va Bekto‘pi maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 2,
      iib: "1-son IIB",
      tel: "71-230-17-05",
      hudud: "Shuxrat, Xirmontepa, Katta Xirmontepa maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 3,
      iib: "2-son IIB",
      tel: "71-206-85-20",
      hudud: "Novza maxallasi",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 4,
      iib: "2-son IIB",
      tel: "71-206-85-20",
      hudud: "Katta Qozirobod, Qozirobod, 2-Katta Chilonzor maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 5,
      iib: "2-son IIB",
      tel: "71-206-85-20",
      hudud: "Katta Olmazor, Beshyog‘och maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 6,
      iib: "3-son IIB",
      tel: "71-230-16-08",
      hudud: "Navbahor, Katta Navbahor, Ko‘tarma maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 7,
      iib: "3-son IIB",
      tel: "71-230-16-08",
      hudud: "Beshchinor, Ko‘rkam, Dilobod, X.Do‘stligi maxalla",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 8,
      iib: "3-son IIB",
      tel: "71-230-16-08",
      hudud: "Oqtepa, Bog‘zor, 1-Qatortol, Lutfiy maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 9,
      iib: "3-son IIB",
      tel: "71-230-16-08",
      hudud: "Nafosat, Diyor, Cho‘ponota, Qatortol maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 10,
      iib: "4-son IIB",
      tel: "71-276-27-89",
      hudud: "Zarqo‘rg‘on va Fidokor maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 11,
      iib: "4-son IIB",
      tel: "71-276-27-89",
      hudud: "Botirma va Mehrjon maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 12,
      iib: "4-son IIB",
      tel: "71-276-27-89",
      hudud: "Yakkatut, Yakkabog‘, Bo‘rijar maxallalari",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 13,
      iib: "4-son IIB",
      tel: "71-276-27-89",
      hudud: "Naqqoshlik, K.Do‘mbirobod, Do‘mbirobod, Gavxar maxalla",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 14,
      iib: "5-son IIB",
      tel: "71-287-73-50",
      hudud: "Beshqo‘rg‘on maxallasi",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 15,
      iib: "",
      tel: "",
      hudud: "Filtr",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 16,
      iib: "",
      tel: "",
      hudud: "Ishchi gurux",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 17,
      iib: "",
      tel: "",
      hudud: "Konvoy",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 18,
      iib: "",
      tel: "",
      hudud: "Xamkor",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 19,
      iib: "",
      tel: "",
      hudud: "Tumanda",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 20,
      iib: "",
      tel: "",
      hudud: "Nazoratda",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
    {
      id: 21,
      iib: "",
      tel: "",
      hudud: "Emir tungi klub",
      xodim1: "",
      xodim2: "",
      mashina: "",
      raqam: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateItem = (id: number, field: keyof PPX3Item, value: string) => {
    setPpx3Bosqich((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  };

  const clearItem = (id: number) => {
    setPpx3Bosqich((prev) =>
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

    const xodimlar = ppx3Bosqich.map((p) => ({
      bosqich: "2-bosqich",
      title: "IIO FMB PPXning 2-bosqich taqsimoti soat (20:00 dan 08:00 gacha)",
      otryad: "",
      vaqtOraliq: "20:00-08:00",
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
          3.3 IIO FMB PPXning 2-bosqich taqsimoti soat (20:00 dan 08:00 gacha)
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
        {ppx3Bosqich.map((p, i) => (
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

export default PPX3Section;
