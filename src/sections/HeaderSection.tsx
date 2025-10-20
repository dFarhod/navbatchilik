import React from "react";
import Input from "../components/Input";

// HeaderSection.tsx
interface HeaderData {
  jinoyat: string;
  ochilgan: string;
  ochilmagan: string;
}

interface HeaderSectionProps {
  sana: string;
  setSana: React.Dispatch<React.SetStateAction<string>>;
  headerData: HeaderData;
  setHeaderData: React.Dispatch<React.SetStateAction<HeaderData>>;
}


const HeaderSection: React.FC<HeaderSectionProps> = ({
  sana,
  setSana,
  headerData,
  setHeaderData,
}) => {
  const formatSana = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const months = [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avgust",
      "sentyabr",
      "oktyabr",
      "noyabr",
      "dekabr",
    ];
    if (isNaN(date.getTime())) return "";
    return `"${date.getDate()}" ${months[date.getMonth()]}`;
  };

  return (
    <div className="space-y-4">
      {/* Sana */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Sana
        </label>
        <Input
          type="date"
          value={sana}
          onChange={(e) => setSana(e.target.value)}
          className="w-full"
        />
        {sana && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {formatSana(sana)}
          </p>
        )}
      </div>

      {/* Statistika */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Jinoyat
          </label>
          <Input
            type="number"
            value={headerData.jinoyat}
            onChange={(e) =>
              setHeaderData({ ...headerData, jinoyat: e.target.value })
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Ochilgan
          </label>
          <Input
            type="number"
            value={headerData.ochilgan}
            onChange={(e) =>
              setHeaderData({ ...headerData, ochilgan: e.target.value })
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Ochilmagan
          </label>
          <Input
            type="number"
            value={headerData.ochilmagan}
            onChange={(e) =>
              setHeaderData({ ...headerData, ochilmagan: e.target.value })
            }
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
