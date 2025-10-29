import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import type { ITergov } from "../types/interface";
import Button from "../components/Button";
import { Save } from "lucide-react";
import axios from "axios";

const TergovSection = () => {
  const [tergov, setTergov] = useState([
    {
      id: 1,
      tb: "",
      jqb: "",
      ekb: "",
      vaqt: "",
      xaydovchi: "",
    },
    { id: 2, tb: "", jqb: "", ekb: "", vaqt: "", xaydovchi: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateItem = (id: number, field: keyof ITergov, value: string) => {
    setTergov((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    const payload = {
      tergovlar: tergov.map((item) => ({
        tb: item.tb,
        jqb: item.jqb,
        ekb: item.ekb,
        vaqt: item.vaqt,
        xaydovchi: item.xaydovchi,
      })),
    };
    try {
      const res = await axios.post(
        "http://192.168.100.103:8888/api/tergovlar/bulk",
        payload
      );

      console.log("Yuborilgan data:", res.data);
      setMessage("✅ Tergov-tezkor ma’lumotlari muvaffaqiyatli saqlandi!");
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
          2.1 Tergov-tezkor
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
      <div className="space-y-4">
        {tergov.map((t, i) => (
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Tergov-tezkor guruxi
            </h3>
            <Card key={t.id} className="w-full flex gap-4 items-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-4">
                <Input
                  value={t.tb}
                  placeholder="TB"
                  onChange={(e) => updateItem(t.id, "tb", e.target.value)}
                />
                <Input
                  value={t.jqb}
                  placeholder="JQB"
                  onChange={(e) => updateItem(t.id, "jqb", e.target.value)}
                />
                <Input
                  value={t.ekb}
                  placeholder="EKB"
                  onChange={(e) => updateItem(t.id, "ekb", e.target.value)}
                />
                <Input
                  value={t.vaqt}
                  placeholder="08:00-08:00"
                  onChange={(e) => updateItem(t.id, "vaqt", e.target.value)}
                />
                <Input
                  value={t.xaydovchi}
                  placeholder="xaydovchi"
                  onChange={(e) =>
                    updateItem(t.id, "xaydovchi", e.target.value)
                  }
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TergovSection;
