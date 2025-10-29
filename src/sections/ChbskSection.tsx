import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Select from "../components/Select";
import { unvonlar } from "../data/unvonlar";
import Button from "../components/Button";
import { BrushCleaning, Plus, Save } from "lucide-react";
import axios from "axios";

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

const ChbskSection = () => {
  const [mppx3, setMppx3] = useState([
    {
      id: 1,
      hudud:
        "«Chilonzor buyum savdo kompleksi»ga olib kiruvchi markaziy darvozaning o‘ng va chap taraflari va darvozaning tashqari tomonidagi maydon (Avtoulovlar yo‘lagi).",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 2,
      hudud:
        "«Chilonzor buyum savdo kompleksi»ga olib kiruvchi 3-darvozasi hamda 16 va 4-ayvonlar oraligidagi maydon.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 3,
      hudud:
        "«Chilonzor buyum savdo kompleksi»ga olib kiruvchi 6-darvozasi, uning oralig‘idagi xususiy do‘konlar.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 4,
      hudud: "«Chilonzor buyum savdo kompleksi»ga olib kiruvchi 2-darvozasi.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 5,
      hudud: "1 va 2-ayvonlar savdo do‘konlari va oraliqdagi yo‘laklar.",
      xodimlar: [],
    },
    {
      id: 6,
      hudud:
        "3 va 4-ayvonlar savdo do‘konlari va oraliqdagi yo‘laklar hamda Chilonzor buyum savdo kompleksining markaziy maydoni.",
      xodimlar: [],
    },
    {
      id: 7,
      hudud:
        "5, 6, 7, 8-ayvonlar savdo do‘konlari va oraliqdagi yo‘laklar, «Chilonzor buyum savdo kompleksi»ga olib kiruvchi 4-darvozasi (Abu-Saxiy) va orqa tarafdagi yo‘laklar.",
      xodimlar: [],
    },
    {
      id: 8,
      hudud: "Bunyodkor ko‘chasidagi yer osti yo‘li va atroflari (tunel).",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 9,
      hudud:
        "Yangi avtoturargoh va uning atroflari, shahar avtobuslari bekati (PARKING).",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 10,
      hudud:
        "“Do‘stlik” bozori do‘konlari va oraliqdagi yo‘laklar, shahar avtobuslari to‘xtash bekati va uning atroflari.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 11,
      hudud: "“CHBSK” ma’muriyati hududi.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 12,
      hudud: "“GOODY” savdo majmuasi.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 13,
      hudud:
        "Chilonzor tumani Qatortol ko‘chasida joylashgan “ATLAS” savdo markazi.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 14,
      hudud: "Chilonzor tumani 2-mavzeda joylashgan “Kristal” kafesi.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
      ],
    },
    {
      id: 15,
      hudud: "Nazorat — xodimlar faoliyatini boshqarish va nazorat qilish.",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          tel: "",
          vaqt: "",
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
    setMppx3((prev) =>
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

  const clearXodim = (joyId: number, index: number) => {
    setMppx3((prev) =>
      prev.map((joy) =>
        joy.id === joyId
          ? {
              ...joy,
              xodimlar: joy.xodimlar.map((x, i) =>
                i === index
                  ? {
                      ...x,
                      unvon: "",
                      ism: "",
                      yonalish: "",
                      vaqt: "",
                      tel: "",
                    }
                  : x
              ),
            }
          : joy
      )
    );
  };

  const addXodim = (joyId: number) => {
    setMppx3((prev) =>
      prev.map((joy) =>
        joy.id === joyId
          ? {
              ...joy,
              xodimlar: [
                ...joy.xodimlar,
                { unvon: "", ism: "", yonalish: "", vaqt: "", tel: "" },
              ],
            }
          : joy
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    const payload = {
      saroylar: mppx3.map((item) => ({
        hudud: item.hudud,
        xodimlar: item.xodimlar,
      })),
    };

    try {
      const res = await axios.post(
        "http://192.168.100.103:8888/api/saroylar/bulk",
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
          7. ChBSKda xizmat olib boradigan MPPX 3-otryadi taqsimoti soat
          (08:00dan 20:00gacha)
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
        {mppx3.map((joy) => (
          <Card key={joy.id} className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-gray-700 dark:text-gray-200">
                {joy.hudud}
              </h3>
              <Button variant="primary" onClick={() => addXodim(joy.id)}>
                <Plus size={16} className="mr-1" /> Xodim qo‘shish
              </Button>
            </div>

            {joy.xodimlar.map((xodim, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-2 mb-2 items-center"
              >
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
                <div className="flex items-center gap-2">
                  <Input
                    value={xodim.tel}
                    placeholder="Tel"
                    onChange={(e) =>
                      handleChange(joy.id, index, "tel", e.target.value)
                    }
                  />
                  <button
                    onClick={() => clearXodim(joy.id, index)}
                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
                    title="Maydonlarni tozalash"
                  >
                    <BrushCleaning size={20} />
                  </button>
                </div>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChbskSection;
