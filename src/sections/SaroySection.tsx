import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Select from "../components/Select";
import { unvonlar } from "../data/unvonlar";
import Button from "../components/Button";
import { BrushCleaning, Save } from "lucide-react";
import axios from "axios";

export interface Xodim {
  unvon: string;
  ism: string;
  yonalish: string;
  vaqt: string;
  tel: string;
}

export interface MPPX2Item {
  id: number;
  post: string;
  vaqt: string;
  hudud: string;
  xodimlar: Xodim[];
}

const SaroySection = () => {
  const [saroy, setSaroy] = useState([
    {
      id: 1,
      hudud: "Xalqlar Do‘stligi san’at saroyi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
      ],
    },
    {
      id: 2,
      hudud:
        "Respublika ixtisoslashtirilgan xirurgiya ilmiy-amaliy tibbiet markazi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
      ],
    },
    {
      id: 3,
      hudud: "Toshkent Avtovagzal",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
      ],
    },
    {
      id: 4,
      hudud: "Tungi klub",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
      ],
    },
    {
      id: 5,
      hudud: "Seoul mun",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
        },
      ],
    },
    {
      id: 6,
      hudud: "Parus savdo majmuasi",
      xodimlar: [
        {
          unvon: "",
          ism: "",
          yonalish: "",
          vaqt: "",
          tel: "",
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
    setSaroy((prev) =>
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
    setSaroy((prev) =>
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

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    const payload = {
      saroylar: saroy.map((item) => ({
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
          5. TIIO FMB X.Do‘stligi saroyida izmat ko‘rsatuvchi MPPX guruxi
          taqsimoti (08:30dan 08:30gacha)
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
        {saroy.map((joy) => (
          <div key={joy.id}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {joy.hudud}
            </h3>
            <div className="space-y-4">
              {joy.xodimlar.map((xodim, index) => (
                <Card key={index} className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <button
                      onClick={() => clearXodim(joy.id, index)}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
                      title="Maydonlarni tozalash"
                    >
                      <BrushCleaning size={20} />
                    </button>
                  </div>
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
                    <Input
                      value={xodim.tel}
                      placeholder="Tel"
                      onChange={(e) =>
                        handleChange(joy.id, index, "tel", e.target.value)
                      }
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaroySection;
