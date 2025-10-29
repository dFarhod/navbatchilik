import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { BrushCleaning, Save } from "lucide-react";
import axios from "axios";

export interface Bosqich {
  fish: string;
  pam: string;
  noIbb: string;
  vaqt: string;
}

export interface HududItem {
  hudud: string;
  bosqich1: Bosqich;
  bosqich2: Bosqich;
  bosqich3: Bosqich;
}

const YPXBSection = () => {
  const [ypxb, setYpxb] = useState([
    {
      hudud: "Shaxr-Oybek-22",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "TNB",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Beshyog’och-Olmazor",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "I.Karimov-Olmazor-415",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Toshkent shahar hokim",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "I.Karimov-Furqat-416",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Bunyodkor-I.Karimov",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Furqat-Beshyog’och-418",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Hudud bo‘ylab",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Bunyodkor-KXAY-437",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Mevazor",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "TNB",
        vaqt: "14:00-02:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "TNB",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Qidiruv xudud bo‘ylab",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-16:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "18:00-06:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "19:00-08:00",
      },
    },
    {
      hudud: "Bozor (Chilonzor bo‘ylab)",
      bosqich1: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "06:00-18:00",
      },
      bosqich2: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "18:00-06:00",
      },
      bosqich3: {
        fish: "",
        pam: "",
        noIbb: "",
        vaqt: "18:00-06:00",
      },
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateBosqich = (
    index: number,
    bosqich: "bosqich1" | "bosqich2" | "bosqich3",
    field: keyof Bosqich,
    value: string
  ) => {
    setYpxb((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, [bosqich]: { ...item[bosqich], [field]: value } }
          : item
      )
    );
  };

  const clearItem = (index: number) => {
    setYpxb((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              bosqich1: { ...item.bosqich1, fish: "", pam: "", noIbb: "" },
              bosqich2: { ...item.bosqich2, fish: "", pam: "", noIbb: "" },
              bosqich3: { ...item.bosqich3, fish: "", pam: "", noIbb: "" },
            }
          : item
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post(
        "http://192.168.100.103:8888/api/ypxbBrigada/bulk",
        { ypxb }
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
          6.Toshkent savdo majmuasida xizmat olib boradigan MPPX 2-otryadi
          taqsimoti (08:00dan 08:00)gacha
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
      <div className="space-y-6">
        {ypxb.map((y, index) => (
          <Card key={index} className="p-4 space-y-4">
            <h4 className="font-semibold text-blue-600">{y.hudud}</h4>

            {[1, 2, 3].map((b) => {
              const bosqich = `bosqich${b}` as
                | "bosqich1"
                | "bosqich2"
                | "bosqich3";
              const bData = y[bosqich];

              return (
                <div key={b} className="grid grid-cols-4 gap-4">
                  <Input
                    value={bData.fish}
                    placeholder={`${b}-bosqich: F.I.Sh`}
                    onChange={(e) =>
                      updateBosqich(index, bosqich, "fish", e.target.value)
                    }
                  />
                  <Input
                    value={bData.pam}
                    placeholder="PAM"
                    onChange={(e) =>
                      updateBosqich(index, bosqich, "pam", e.target.value)
                    }
                  />
                  <Input
                    value={bData.noIbb}
                    placeholder="№ IIB"
                    onChange={(e) =>
                      updateBosqich(index, bosqich, "noIbb", e.target.value)
                    }
                  />
                  <Input
                    value={bData.vaqt}
                    placeholder="Vaqt"
                    onChange={(e) =>
                      updateBosqich(index, bosqich, "vaqt", e.target.value)
                    }
                  />
                </div>
              );
            })}

            <div className="flex justify-end mt-3">
              <button
                onClick={() => clearItem(index)}
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

export default YPXBSection;
