import { useState } from "react";
import { BrushCleaning, Save } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Select from "../components/Select";
import { unvonlar } from "../data/unvonlar";
import axios from "axios";
import { baseURL } from "@/service/api";

const KonvoyNojSection = () => {
  const [noj, setNoj] = useState([
    {
      id: 1,
      label: "NO‘J guruhi xodimlari",
      lavozim: "Xizmat ko‘rsatish guruxi",
      unvon: "",
      fish: "",
      phone: "",
    },
    {
      id: 2,
      label: "NO‘J guruhi xodimlari",
      lavozim: "Xizmat ko‘rsatish guruxi",
      unvon: "",
      fish: "",
      phone: "",
    },
    {
      id: 3,
      label: "NO‘J guruhi xodimlari",
      lavozim: "Xizmat ko‘rsatish guruxi",
      unvon: "",
      fish: "",
      phone: "",
    },
    {
      id: 4,
      label: "NO‘J guruhi xodimlari",
      lavozim: "Xizmat ko‘rsatish guruxi",
      unvon: "",
      fish: "",
      phone: "",
    },
  ]);

  const [konvoy, setKonvoy] = useState([
    {
      id: 1,
      label: "Konvoy guruh boshlig‘i",
      lavozim: "TIIO FMB HPB inspektori 1 nafar",
      unvon: "",
      fish: "",
      phone: "",
    },
    {
      id: 2,
      label: "Konvoy guruh haydovchisi",
      lavozim: "Tuman IIO FMB PPX haydovchi-xodimi",
      unvon: "",
      fish: "",
      phone: "",
    },
    {
      id: 3,
      label: "IIO FMB JQB xodimi",
      lavozim: "",
      unvon: "",
      fish: "",
      phone: "",
    },
    {
      id: 4,
      label: "IIO FMB PPX xodimi",
      lavozim: "",
      unvon: "",
      fish: "",
      phone: "",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = <T extends { id: number }>(
    setFn: React.Dispatch<React.SetStateAction<T[]>>,
    id: number,
    field: keyof T,
    value: string
  ) => {
    setFn((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const clearNojItem = (id: number) => {
    setNoj((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, unvon: "", fish: "", phone: "" } : item
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);
    const xodimlar = [
      ...noj.map((n) => ({
        label: n.label,
        lavozim: n.lavozim,
        unvon: n.unvon,
        fish: n.fish,
        phone: n.phone,
        turi: "noj",
      })),
      ...konvoy.map((k) => ({
        label: k.label,
        lavozim: k.lavozim,
        unvon: k.unvon,
        fish: k.fish,
        phone: k.phone,
        turi: "konvoy",
      })),
    ];

    try {
      const res = await axios.post(`${baseURL}/xodimlar/bulk`, {
        xodimlar,
      });

      console.log("✅ Yuborilgan data:", res.data);
    } catch (error) {
      console.error("❌ Xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearKonvoytem = (id: number) => {
    setKonvoy((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, unvon: "", fish: "", phone: "" } : item
      )
    );
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          2.2 Konvoy va (NO‘J) guruxi taqsimoti (08:00 dan 08:00 gacha)
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
        {noj.map((n, i) => (
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {n.label}
            </h3>
            <Card className="w-full flex gap-4 items-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div key={n.id} className="flex-1 grid grid-cols-4 gap-4">
                <Input
                  value={n.lavozim}
                  onChange={(e) =>
                    handleChange(setNoj, n.id, "lavozim", e.target.value)
                  }
                  placeholder="Lavozim"
                />
                <Select
                  value={n.unvon}
                  onChange={(e) =>
                    handleChange(setNoj, n.id, "unvon", e.target.value)
                  }
                  options={unvonlar}
                  placeholder="Unvon"
                />
                <Input
                  value={n.fish}
                  onChange={(e) =>
                    handleChange(setNoj, n.id, "fish", e.target.value)
                  }
                  placeholder="F.I.Sh"
                />
                <Input
                  value={n.phone}
                  onChange={(e) =>
                    handleChange(setNoj, n.id, "phone", e.target.value)
                  }
                  placeholder="Telefon raqami"
                />
              </div>
              <button
                onClick={() => clearNojItem(n.id)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
                title="Maydonlarni tozalash"
              >
                <BrushCleaning size={20} />
              </button>
            </Card>
          </div>
        ))}

        {konvoy.map((k, i) => (
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {k.label}
            </h3>
            <Card className="w-full flex gap-4 items-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 5}
              </div>
              <div key={k.id} className="grid grid-cols-4 gap-4">
                <Input
                  value={k.lavozim}
                  onChange={(e) =>
                    handleChange(setKonvoy, k.id, "lavozim", e.target.value)
                  }
                  placeholder="Lavozim"
                />
                <Select
                  value={k.unvon}
                  onChange={(e) =>
                    handleChange(setKonvoy, k.id, "unvon", e.target.value)
                  }
                  options={unvonlar}
                  placeholder="Unvon"
                />
                <Input
                  value={k.fish}
                  onChange={(e) =>
                    handleChange(setKonvoy, k.id, "fish", e.target.value)
                  }
                  placeholder="F.I.Sh"
                />
                <Input
                  value={k.phone}
                  onChange={(e) =>
                    handleChange(setKonvoy, k.id, "phone", e.target.value)
                  }
                  placeholder="Telefon raqami"
                />
              </div>
              <button
                onClick={() => clearKonvoytem(k.id)}
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

export default KonvoyNojSection;
