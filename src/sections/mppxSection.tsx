import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Select from "../components/Select";
import { unvonlar } from "../data/unvonlar";
import Button from "../components/Button";
import { BrushCleaning, Save } from "lucide-react";
import axios from "axios";
import { baseURL } from "@/service/api";

export interface Xodim {
  unvon: string;
  ism: string;
  yonalish: string;
  vaqt: string;
  tel: string;
}

export interface SaroyItem {
  id: number;
  hudud: string;
  xodimlar: Xodim[];
}

const MPPXSection = () => {
  const [mppx, setMppx] = useState([
    {
      id: 1,
      hudud: "TSM»ning Markaziy kirish darvozasi beshtalik arka",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 2,
      hudud: "«TSM» 1-blokiga ChBSK tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 3,
      hudud:
        "«TSM» “Abu Saxiy Sentr” savdo markaziga ChBSK tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 4,
      hudud: "«TSM» 5-blokiga TXAY ko‘chasi tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 5,
      hudud: "«TSM» 5-blokiga “Avto shox” bekat tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 6,
      hudud: "«TSM» 3-blokiga ChBSK tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 7,
      hudud:
        "«TSM»ning 8 qavatli avtoturargohiga «TXAY» ko‘chasi tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 8,
      hudud: "«TSM» 3-blokiga TXAY ko‘chasi tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 9,
      hudud:
        "TXAY ko‘chasi tomonidagi «GIPERMARKET» avtoturargohiga kirish darvozasi («TSM» er osti yo‘li)",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 10,
      hudud: "«TSM» «GIPERMARKET» ga ChBSK tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 11,
      hudud: "«TSM» Avtoturargohiga TXAY ko‘chasi tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 12,
      hudud: "«TSM» TXAY ko‘chasi tomonidan Avtoshoxbekatiga kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 13,
      hudud: "«TSM» 2-blokiga TXAY ko‘chasi tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 14,
      hudud: "«TSM» TXAY ko‘chasi tomonidan Avtoshoxbekatiga kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 15,
      hudud:
        "«TSM» «GIPERMARKET» oldidagi avtoturargohga TXAY ko‘chasi tomonidan kirish darvozasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 16,
      hudud:
        "Zangiota tumanidagi «TSM» Chinni bozori kirish darvozasi (TXAY ko‘chasi tomondan)",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 17,
      hudud:
        "“BASSADOR”, “PARIJ” va “JIZZAX” MCHJ tungi klublariga tungi xizmat (Chilonzor tumanida joylashgan)",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "20:00 dan 07:00 gacha",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "20:00 dan 07:00 gacha",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "20:00 dan 07:00 gacha",
        },
      ],
    },
    {
      id: 18,
      hudud: "Xodimlar xizmatini tashkil etish (kunlik nazorat)",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 08:00 gacha",
        },
      ],
    },
    {
      id: 19,
      hudud: "Xodimlar xizmatini tashkil etish (kunduzgi nazorat)",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "08:00 dan 20:00 gacha",
        },
      ],
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    joyId: number,
    index: number,
    field: keyof Xodim,
    value: string
  ) => {
    setMppx((prev) =>
      prev.map((joy) =>
        joy.id === joyId
          ? {
              ...joy,
              xodimlar: joy.xodimlar.map((x, i) =>
                i === index ? { ...x, [field]: value } : x
              ),
            }
          : joy
      )
    );
  };

  const handleHududChange = (joyId: number, value: string) => {
    setMppx((prev) =>
      prev.map((joy) => (joy.id === joyId ? { ...joy, hudud: value } : joy))
    );
  };

  const clearXodim = (joyId: number, index: number) => {
    setMppx((prev) =>
      prev.map((joy) =>
        joy.id === joyId
          ? {
              ...joy,
              xodimlar: joy.xodimlar.map((x, i) =>
                i === index
                  ? { unvon: "", ism: "", yonalish: "", tel: "", vaqt: "" }
                  : x
              ),
            }
          : joy
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    const payload = {
      saroylar: mppx.map((item) => ({
        hudud: item.hudud,
        xodimlar: item.xodimlar,
      })),
    };

    try {
      const res = await axios.post(
        `${baseURL}/saroylar/bulk`,
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
      <div className="space-y-4">
        {mppx.map((joy, i) => (
          <Card key={joy.id} className="p-4 space-y-4">
            {joy.xodimlar.map((xodim, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <button
                    onClick={() => clearXodim(joy.id, index)}
                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                    title="Xodim ma’lumotini tozalash"
                  >
                    <BrushCleaning size={18} />
                  </button>
                </div>
                <Input
                  value={joy.hudud}
                  placeholder="Hudud nomi"
                  onChange={(e) => handleHududChange(joy.id, e.target.value)}
                  className="w-full"
                />
                <div className="grid grid-cols-3 gap-4">
                  <Select
                    value={xodim.unvon}
                    onChange={(e) =>
                      handleChange(joy.id, index, "unvon", e.target.value)
                    }
                    options={unvonlar}
                    placeholder="Unvon"
                  />
                  <Input
                    value={xodim.ism}
                    placeholder="F.I.Sh"
                    onChange={(e) =>
                      handleChange(joy.id, index, "ism", e.target.value)
                    }
                  />
                  <Input
                    value={xodim.yonalish}
                    placeholder="Yo‘nalish"
                    onChange={(e) =>
                      handleChange(joy.id, index, "yonalish", e.target.value)
                    }
                  />
                  <Input
                    value={xodim.vaqt}
                    placeholder="Vaqt"
                    onChange={(e) =>
                      handleChange(joy.id, index, "vaqt", e.target.value)
                    }
                  />
                  <Input
                    value={xodim.tel}
                    placeholder="Tel"
                    onChange={(e) =>
                      handleChange(joy.id, index, "tel", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MPPXSection;
