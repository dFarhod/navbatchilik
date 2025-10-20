import React from "react";
import { Trash2 } from "lucide-react";
import Card from "../components/Card";
import Input from "../components/Input";
import Select, { type Option } from "../components/Select";

// 🔹 Navbatchi elementining turi
interface Navbatchi {
  id: number;
  label: string;
  unvon: string;
  fish: string;
}

// 🔹 Agar siz `Select` uchun oddiy string[] ishlatsangiz:
interface NavbatchilarSectionProps {
  navbatchilar: Navbatchi[];
  setNavbatchilar: React.Dispatch<React.SetStateAction<Navbatchi[]>>;
  unvonlar: Option[]; // agar siz Option[] ishlatayotgan bo‘lsangiz, bu yerga Option[] yozing
}

const NavbatchilarSection: React.FC<NavbatchilarSectionProps> = ({
  navbatchilar,
  setNavbatchilar,
  unvonlar,
}) => {
  // 🔹 Ma’lumot yangilash
  const updateItem = (id: number, field: keyof Navbatchi, value: string) => {
    setNavbatchilar((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // 🔹 Ma’lumotni o‘chirish
  const deleteItem = (id: number) => {
    setNavbatchilar((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Yangi ma’lumot qo‘shish
  // const addItem = () => {
  //   setNavbatchilar((prev) => {
  //     const maxId = prev.length > 0 ? Math.max(...prev.map((p) => p.id)) : 0;
  //     return [...prev, { id: maxId + 1, lavozim: "", unvon: "", fish: "" }];
  //   });
  // };

  return (
    <div className="space-y-4">
      {navbatchilar.map((n, i) => (
        <Card key={n.id} className="p-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {n.label}
          </h3>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {i + 1}
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              {/* <Input
                value={n.lavozim}
                onChange={(e) => updateItem(n.id, "lavozim", e.target.value)}
                placeholder="Lavozim"
              /> */}

              <Select
                value={n.unvon}
                onChange={(e) => updateItem(n.id, "unvon", e.target.value)}
                options={unvonlar}
                placeholder="Unvon"
              />

              <Input
                value={n.fish}
                onChange={(e) => updateItem(n.id, "fish", e.target.value)}
                placeholder="F.I.Sh"
              />
            </div>

            <button
              onClick={() => deleteItem(n.id)}
              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex-shrink-0"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </Card>
      ))}

      {/* <Button
        onClick={addItem}
        variant="primary"
        icon={Plus}
        className="w-full py-3"
      >
        Qo‘shish
      </Button> */}
    </div>
  );
};

export default NavbatchilarSection;
