import { useState, createContext, useContext } from "react";
import {
  Calendar,
  Users,
  Car,
  Shield,
  Building,
  Save,
  Moon,
  Sun,
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import HeaderSection from "./sections/HeaderSection";
import MasullarSection from "./sections/MasullarSection";
import NavbatchilarSection from "./sections/NavbatchilarSection";
import TergovSection from "./sections/TergovSection";
// import KonvoySection from "./sections/KonvoySection";
import PPX1Section from "./sections/PPX1Section";
import PPX1PiyodaSection from "./sections/PPX1PiyodaSection";
import PPX2Section from "./sections/PPX2Section";
import PPX3Section from "./sections/PPX3Section";
import XPBSection from "./sections/XPBSection";
import SaroySection from "./sections/SaroySection";
import ChbskSection from "./sections/ChbskSection";
import ThgSection from "./sections/ThgSection";


// Context tipi
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Default qiymat bilan context yaratish
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-gray-600" />
      )}
    </button>
  );
};

export default function DailyReportSystem() {
  const [activeSection, setActiveSection] = useState("header");
  const [sana, setSana] = useState(new Date().toISOString().split("T")[0]);

  const [headerData, setHeaderData] = useState({
    jinoyat: "0",
    ochilgan: "0",
    ochilmagan: "0",
  });

  const [masullar, setMasullar] = useState([
    {
      id: 1,
      label: "TIIO FMB bo‘yicha mas’ullar",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 2,
      label: "1-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 3,
      label: "2-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 4,
      label: "3-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 5,
      label: "4-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
    {
      id: 6,
      label: "5-IIB ma’sul",
      lavozim: "",
      unvon: "",
      fish: "",
    },
  ]);

  const [navbatchilar, setNavbatchilar] = useState([
    {
      id: 1,
      label: "MB NK tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 2,
      label: "MB NK navbatchi yordamchisi",
      unvon: "",
      fish: "",
    },
    {
      id: 3,
      label: "MB NK navbatchi yordamchisi",
      unvon: "",
      fish: "",
    },
    { id: 4, label: "Monitoring", unvon: "", fish: "" },
    { id: 5, label: "Body kamera", unvon: "", fish: "" },
    { id: 6, label: "Q/B", unvon: "", fish: "" },
    {
      id: 7,
      label: "1-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 8,
      label: "2-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 9,
      label: "3-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 10,
      label: "4-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
    {
      id: 11,
      label: "5-IIB tezkor navbatchi",
      unvon: "",
      fish: "",
    },
  ]);

  const [tergov, setTergov] = useState([
    {
      id: 1,
      tb: "",
      jqb: "",
      ekb: "",
      vaqt: "",
    },
    { id: 2, tb: "", jqb: "", ekb: "", vaqt: "" },
  ]);

  const [xaydovchi, setXaydovchi] = useState("");

  // const [nojGuruh, setNojGuruh] = useState([
  //   {
  //     label: "NO‘J guruhi xodimlari",
  //     data: [
  //       { id: 1, fish: "", tel: "" },
  //       { id: 2, fish: "", tel: "" },
  //       { id: 3, fish: "", tel: "" },
  //       { id: 4, fish: "", tel: "" },
  //     ],
  //   },
  //   {
  //     label: "Konvoy guruh bos’hlig‘i",
  //     data: [{ id: 1, fish: "", tel: "" }],
  //   },
  //   { label: "Konvoy guruh xaydovci", data: [{ id: 1, fish: "", tel: "" }] },
  //   { label: "IIO FMB JQB xodimi", data: [{ id: 1, fish: "", tel: "" }] },
  //   { label: "IIO FMB PPX", data: [{ id: 1, fish: "", tel: "" }] },
  // ]);

  const [ppx1Bosqich, setPpx1Bosqich] = useState([
    {
      id: 1,
      iib: "1-son IIB",
      tel: "71-230-17-05",
      hudud: "Al-Xorazmiy, Bekto'pi maxallalari",
      xodim1: "R.Musayev",
      xodim2: "V.Esimov",
      mashina: "Bunyod-191",
      raqam: "01 AP 337 VSF",
    },
    {
      id: 2,
      iib: "2-son IIB",
      tel: "71-206-85-20",
      hudud: "Katta Olmazor, Bes'hyog'och maxallalari",
      xodim1: "N.Muxammedov",
      xodim2: "X.Mo'minov",
      mashina: "Bunyod-291",
      raqam: "01 AP850VSF",
    },
  ]);

  const [ppx1BosqichPiyoda, setPpx1BosqichPiyoda] = useState([
    { id: 1, mfy: "Novza MFY", xodim: "D.Esonov" },
    { id: 2, mfy: "Novza MFY", xodim: "J.Usmonov" },
    { id: 3, mfy: "Qozirabod MFY", xodim: "M.Xashimov" },
    { id: 4, mfy: "Qozirabod MFY", xodim: "A.Aldanov" },
    { id: 5, mfy: "Chilonzor MFY", xodim: "R.Esonov" },
    { id: 6, mfy: "Chilonzor MFY", xodim: "B.Murodullayev" },
    { id: 7, mfy: "Ko'tarma", xodim: "B.Karimov" },
    { id: 8, mfy: "Beshchinor MFY", xodim: "H.Bobojonov" },
    { id: 9, mfy: "Beshchinor MFY", xodim: "I.Raxmatov" },
  ]);

  const [ppx2Bosqich, setPpx2Bosqich] = useState([
    {
      id: 1,
      raqam: "4-yo'nalish",
      hudud:
        "Bunyodkor-KXAY ko'chalari chorrahasidan, KXAY ko'chasining Navbaxor mahallasi tomoni bo'ylab, Chilonzor Dexqon bozorigacha",
      xodim1: "",
      xodim2: "",
      izoh: "3-IIB",
    },
    {
      id: 2,
      raqam: "8-yo'nalish",
      hudud:
        "Bunyodkor-Furqat ko'chalari chorrahasidan, Furqat ko'chasi bo'ylab, Mejik siti bekatigacha",
      xodim1: "B.Peysenbayev",
      xodim2: "S.Sultonmurodov",
      izoh: "2-IIB",
    },
    {
      id: 3,
      raqam: "10-yo'nalish",
      hudud: "Chilonzor ko'chasi",
      xodim1: "",
      xodim2: "",
      izoh: "2-IIB",
    },
    {
      id: 4,
      raqam: "17-yo'nalish",
      hudud: "Al-Xorazmiy ko'chasi",
      xodim1: "",
      xodim2: "",
      izoh: "4-IIB",
    },
    {
      id: 5,
      raqam: "Metro",
      hudud: "Chilonzor metro",
      xodim1: "B.O'razimbetov",
      xodim2: "",
      izoh: "18-PP",
    },
    {
      id: 6,
      raqam: "Bozor",
      hudud: "Gul bozor",
      xodim1: "S.Sultonmurodov",
      xodim2: "",
      izoh: "4-PP",
    },
    {
      id: 7,
      raqam: "TC",
      hudud: "Seoul mon",
      xodim1: "A.Aldanov",
      xodim2: "",
      izoh: "52-PP",
    },
  ]);

  const [ppx3Bosqich, setPpx3Bosqich] = useState([
    {
      id: 1,
      iib: "1-son IIB",
      tel: "71.230-17-05",
      hudud: "Al-Xorazmiy, Guliston va Bekto'pi maxallalari",
      xodim1: "A.Allayarov",
      xodim2: "",
      mashina: "Bunyod-196",
      raqam: "AP 01 710 VSF",
    },
    {
      id: 2,
      iib: "1-son IIB",
      tel: "",
      hudud: "Shuxrat, Xirmontepa, Katta Xirmontepa maxallalari",
      xodim1: "O.Sattorov",
      xodim2: "A.Rejamatov",
      mashina: "Bunyod-198",
      raqam: "AP 01 442 VSF",
    },
    {
      id: 3,
      iib: "2-son IIB",
      tel: "71.206-85-20",
      hudud: "Novza maxallasi",
      xodim1: "X.Otaboyev",
      xodim2: "J.Tog'ayev",
      mashina: "Bunyod-297",
      raqam: "AP 01 467 VSF",
    },
    {
      id: 4,
      iib: "2-son IIB",
      tel: "",
      hudud: "Katta Qozirobod, Qozirobod, 2-Katta Chilonzor maxalla",
      xodim1: "J.Boqiyev",
      xodim2: "Sh.Jo'rayev",
      mashina: "Bunyod-298",
      raqam: "AP 01 430 VSF",
    },
    {
      id: 5,
      iib: "2-son IIB",
      tel: "",
      hudud: "Katta Olmazor, Beshyog'och maxallalari",
      xodim1: "O.Sherqulov",
      xodim2: "Sh.Shermamatov",
      mashina: "Bunyod-299",
      raqam: "AP 01 559 VSF",
    },
    {
      id: 6,
      iib: "3-son IIB",
      tel: "71.230-16-08",
      hudud: "Navbahor, Katta Navbahor, Ko'tarma maxallalari",
      xodim1: "F.Xolboyev",
      xodim2: "J.Choriyev",
      mashina: "Bunyod-396",
      raqam: "AP 01 328 VSF",
    },
    {
      id: 7,
      iib: "3-son IIB",
      tel: "",
      hudud: "Oqtepa, Bog'zor, 1-Qatortol Lutfiy maxallalari",
      xodim1: "X.Jumaqulov",
      xodim2: "Sh.Meliyev",
      mashina: "Bunyod-398",
      raqam: "AP 01 118 VSF",
    },
    {
      id: 8,
      iib: "4-son IIB",
      tel: "71.276-27-89",
      hudud: "Botirma va Mehrjon maxalalari",
      xodim1: "I.Boymurodov",
      xodim2: "U.Muxtorov",
      mashina: "Bunyod-497",
      raqam: "AP 01 443 VSF",
    },
    {
      id: 9,
      iib: "4-son IIB",
      tel: "",
      hudud: "Yakkatut, Yakkabog', Bo'rijar maxallalari",
      xodim1: "S.Jovliyev",
      xodim2: "Sh.G'ofurov",
      mashina: "Bunyod-498",
      raqam: "AP 01 494 VSF",
    },
    {
      id: 10,
      iib: "5-son IIB",
      tel: "71.287-73-50",
      hudud: "Beshqo'rg'on maxallasi",
      xodim1: "Y.Tulyaganov",
      xodim2: "S.Qoraboyev",
      mashina: "Bunyod-596",
      raqam: "AP 01 759 VSF",
    },
  ]);

  const [xpbPi, setXpb] = useState([
    {
      id: 1,
      iib: "1-son IIB",
      tel: "71.230-17-05",
      hudud: "Katta Xirmontepa, Shuxrat, Xirmontepa, maxallalari",
      xodim: "M.Ummanov",
      unvon: "Katta Leytenant",
    },
    {
      id: 2,
      iib: "1-son IIB",
      tel: "",
      hudud: "Bek-to'pi, Al-Xorazmiy, Guliston maxallalari",
      xodim: "M.Raxmoaliyev",
      unvon: "Kapitan",
    },
    {
      id: 3,
      iib: "1-son IIB",
      tel: "",
      hudud: "Sharq, Sharof, Sharq tongi, Baxoriston maxallasi",
      xodim: "Q.Ablayev",
      unvon: "Katta leytenant",
    },
    {
      id: 4,
      iib: "1-son IIB",
      tel: "",
      hudud: "Tirsakobod, Xayrobod, Xonto'pi maxallalari",
      xodim: "B.Bozorov",
      unvon: "Katta Leytenant",
    },
    {
      id: 5,
      iib: "2-son IIB",
      tel: "71.206-85-20",
      hudud: "Katta Olmazor, Beshyog'och maxallalari",
      xodim: "Sh.Shotursunov",
      unvon: "Kapitan",
    },
    {
      id: 6,
      iib: "2-son IIB",
      tel: "",
      hudud: "1-2-3-Charx Komolon, Novza maxallalari",
      xodim: "M.Xamroqulov",
      unvon: "Leytinant",
    },
    {
      id: 7,
      iib: "2-son IIB",
      tel: "",
      hudud: "3-Katta Chilonzor, Chilonzor maxallasi",
      xodim: "F.Akbarov",
      unvon: "Kapitan",
    },
    {
      id: 8,
      iib: "2-son IIB",
      tel: "",
      hudud: "2-Katta Chilonzor, 1-Katta Chilonzor maxallasi",
      xodim: "A.Shamsiddinov",
      unvon: "Kotta Leytenant",
    },
    {
      id: 9,
      iib: "2-son IIB",
      tel: "",
      hudud: "Katta Qozirobod, Qozirobod maxallasi",
      xodim: "S.Usmonov",
      unvon: "Leytenant",
    },
    {
      id: 10,
      iib: "3-son IIB",
      tel: "71.230-16-08",
      hudud: "Nafosat, 1-Qatartol, Diyor maxallalari",
      xodim: "B.Bekjonov",
      unvon: "Katta leytenant",
    },
    {
      id: 11,
      iib: "3-son IIB",
      tel: "",
      hudud: "Cho'ponota, Qatartol, Ko'tarma maxallalari",
      xodim: "I.Kaypbergenov",
      unvon: "Katta leytenant",
    },
    {
      id: 12,
      iib: "3-son IIB",
      tel: "",
      hudud: "Navbahor, Katta Navbahor maxallalari",
      xodim: "I.Shukrullayev",
      unvon: "Leytenant",
    },
    {
      id: 13,
      iib: "3-son IIB",
      tel: "",
      hudud: "Beshchinor, Ko'rkam, Dilobod, X.Do'stligi maxalla",
      xodim: "F.Bo'taqo'ziyev",
      unvon: "Leytanant",
    },
    {
      id: 14,
      iib: "3-son IIB",
      tel: "",
      hudud: "Lutfiy, Oqtepa, Bog'zor maxallalari",
      xodim: "B.Bo'tajonov",
      unvon: "Katta leytenant",
    },
    {
      id: 15,
      iib: "4-son IIB",
      tel: "71.276-27-89",
      hudud: "Zarqo'rg'on, Fidokor maxallalari",
      xodim: "B.Sattorov",
      unvon: "Kapitan",
    },
    {
      id: 16,
      iib: "4-son IIB",
      tel: "",
      hudud: "Mehrjon Botirma maxallalari",
      xodim: "S.Sobirjonov",
      unvon: "Leytenant",
    },
    {
      id: 17,
      iib: "4-son IIB",
      tel: "",
      hudud: "Kichik Xirmontepa, 2-Qatartol Mevazor",
      xodim: "A.Artiqov",
      unvon: "Leytenat",
    },
    {
      id: 18,
      iib: "4-son IIB",
      tel: "",
      hudud: "Burijar, Yakkabog', Yakkatut",
      xodim: "O.Mingnorov",
      unvon: "Leytenant",
    },
    {
      id: 19,
      iib: "4-son IIB",
      tel: "",
      hudud: "K.Dombirobod, Gavxar, Naqqoshlik, Dombirobod",
      xodim: "Sh.Moyliyev",
      unvon: "Leytenant",
    },
    {
      id: 20,
      iib: "5-son IIB",
      tel: "71.287-73-50",
      hudud: "Beshqo'rg'on maxallasi",
      xodim: "J.Mamatqulov",
      unvon: "Kotta leytenant",
    },
  ]);

  const [saroy, setSaroy] = useState([
    {
      id: 1,
      hudud: "Xalqlar Do'stligi san'at saroyi",
      xodim: "S.Maxmudov",
      unvon: "safdor",
      vaqt: "Post",
    },
    {
      id: 2,
      hudud: "Xalqlar Do'stligi san'at saroyi",
      xodim: "A.Abdukadirov",
      unvon: "safdor",
      vaqt: "Post",
    },
    {
      id: 3,
      hudud: "Xalqlar Do'stligi san'at saroyi",
      xodim: "U.Inomjonov",
      unvon: "safdor",
      vaqt: "Post",
    },
    {
      id: 4,
      hudud: "Xalqlar Do'stligi san'at saroyi",
      xodim: "A.Orzuqulov",
      unvon: "safdor",
      vaqt: "Post",
    },
    {
      id: 5,
      hudud: "Xalqlar Do'stligi san'at saroyi",
      xodim: "SH.Baxtiyorov",
      unvon: "safdor",
      vaqt: "09-00 dan 20-00 gacha",
    },
    {
      id: 6,
      hudud: "Respublika ixtisoslashtirilgan xirurgiya",
      xodim: "S.Zikrillayev",
      unvon: "safdor",
      vaqt: "1-post 08-00 dan 20-00 gacha",
    },
    {
      id: 7,
      hudud: "Respublika ixtisoslashtirilgan xirurgiya",
      xodim: "D.Rixsiboyev",
      unvon: "safdor",
      vaqt: "2-post 08-00 dan 20-00 gacha",
    },
    {
      id: 8,
      hudud: "Respublika ixtisoslashtirilgan xirurgiya",
      xodim: "J.Xayitboyev",
      unvon: "safdor",
      vaqt: "1-post 20-00 dan 08-00 gacha",
    },
    {
      id: 9,
      hudud: "Toshkent Avtovagzal",
      xodim: "E.N.Mamashov",
      unvon: "safdor",
      vaqt: "nazorat 08-00 dan 20-00 gacha",
    },
    {
      id: 10,
      hudud: "Toshkent Avtovagzal",
      xodim: "K.K.Zoirov",
      unvon: "safdor",
      vaqt: "1-post sutkalik 00:00 dan 03:00 gacha",
    },
    {
      id: 11,
      hudud: "Tungi klub - Alladin",
      xodim: "S.Tojibayev",
      unvon: "safdor",
      vaqt: "20-00 dan 05-00 gacha",
    },
    {
      id: 12,
      hudud: "Tungi klub - Xorazm shox",
      xodim: "S.Tilanov",
      unvon: "k-k snt",
      vaqt: "20-00 dan 05-00 gacha",
    },
    {
      id: 13,
      hudud: "Tungi klub - Pablo",
      xodim: "F.Ziyadullayev",
      unvon: "kat-snt",
      vaqt: "20-00 dan 05-00 gacha",
    },
    {
      id: 14,
      hudud: "Seoul mun",
      xodim: "B.B.Raximov",
      unvon: "safdor",
      vaqt: "15:00 dan 02:00 gacha",
    },
    {
      id: 15,
      hudud: "Seoul mun",
      xodim: "Sh.N.Tojnoriy",
      unvon: "safdor",
      vaqt: "15:00 dan 02:00 gacha",
    },
    {
      id: 16,
      hudud: "Parus savdo majmuasi",
      xodim: "T.A.Toirov",
      unvon: "k-k snt",
      vaqt: "09:00 dan 22:00 gacha",
    },
  ]);

  const [chbsk, setChbsk] = useState([
    {
      id: 1,
      hudud: "Markaziy darvozaning o'ng va chap taraflari",
      xodim: "Sobirjonov Sh",
      tel: "99.9009924",
      turi: "Post, piyoda",
    },
    {
      id: 2,
      hudud: "3-darvoza",
      xodim: "Norov V",
      tel: "94.4115666",
      turi: "Post, piyoda",
    },
    {
      id: 3,
      hudud: "6-darvoza",
      xodim: "Samanov T",
      tel: "91.0249898",
      turi: "Post, piyoda",
    },
    {
      id: 4,
      hudud: "2-darvoza",
      xodim: "To'ychiyev J",
      tel: "33.7315191",
      turi: "Post, piyoda",
    },
    {
      id: 5,
      hudud: "Bunyodkor ko'chasidagi yer osti yo'li (Tunel)",
      xodim: "Abdukarimov B",
      tel: "90.9620626",
      turi: "Yo'nalish",
    },
    {
      id: 6,
      hudud: "Yangi aftoturargox (PARKING)",
      xodim: "Temirov I",
      tel: "77.0620377",
      turi: "Yo'nalish Piyoda",
    },
    {
      id: 7,
      hudud: '"Do\'stlik" bozori',
      xodim: "Payzamatov X",
      tel: "97.7108900",
      turi: "Yo'nalish Piyoda",
    },
    {
      id: 8,
      hudud: '"CHBSK" mamuryat',
      xodim: "Musurmonov B",
      tel: "93.5362716",
      turi: "Yo'nalish Piyoda",
    },
    {
      id: 9,
      hudud: '"GOODY" Savdo majmuosi',
      xodim: "Raximov O",
      tel: "99.4800304",
      turi: "Yo'nalish piyoda",
    },
    {
      id: 10,
      hudud: '"ATLAS" savdo markazi',
      xodim: "Abduqodirov R",
      tel: "94.6675190",
      turi: "Post, piyoda",
    },
    {
      id: 11,
      hudud: '"Kristal" kafesi',
      xodim: "Qodirov D",
      tel: "97.7021202",
      turi: "Post, piyoda",
    },
  ]);

  const [thg, setThg] = useState([
    { id: 1, guruh: "1-THG", kunduz: "Толибоев.Х", tun: "Boboqulov. D" },
    { id: 2, guruh: "1-THG", kunduz: "Рахимбердиев.Ж", tun: "Ilyasov.N" },
    { id: 3, guruh: "1-THG", kunduz: "Бошманов И", tun: "Meliqo'ziyev U" },
    { id: 4, guruh: "2-THG", kunduz: "Пўлатов.Э", tun: "Bozorboyev.I" },
    { id: 5, guruh: "2-THG", kunduz: "Саъдуллаев Ж", tun: "Ikramov.J" },
    { id: 6, guruh: "2-THG", kunduz: "Абдуллаев А", tun: "Ochilov M" },
    { id: 7, guruh: "3-THG", kunduz: "Ходихўжаев.О", tun: "Ibroximov.S" },
    { id: 8, guruh: "3-THG", kunduz: "Мирзаев З.Ф", tun: "Qaxramonov SH" },
    { id: 9, guruh: "3-THG", kunduz: "Кашкарбаев Б.М", tun: "Xolimtoyev.A" },
    { id: 10, guruh: "4-THG", kunduz: "Атакшиев.С", tun: "Maxmudov.F" },
    { id: 11, guruh: "4-THG", kunduz: "Муминжонов. И", tun: "Jurayev D" },
    { id: 12, guruh: "4-THG", kunduz: "Асқаров.С", tun: "Abduganiyev O'" },
    { id: 13, guruh: "5-THG", kunduz: "Бердиқулов М", tun: "Shermatov.N" },
    { id: 14, guruh: "5-THG", kunduz: "Юсупов С", tun: "Kuranboyev.A" },
    { id: 15, guruh: "5-THG", kunduz: "Абдухолиқов.А", tun: "Tojiboyev J" },
    { id: 16, guruh: "6-THG", kunduz: "Қурбонов Х", tun: "Xudoyorbekov D" },
    { id: 17, guruh: "6-THG", kunduz: "Холматов Т.Ю", tun: "Zokirov A" },
    { id: 18, guruh: "6-THG", kunduz: "Каримов С", tun: "Abdurashidov J" },
    { id: 19, guruh: "7-THG", kunduz: "Гайратов Ғ.Г", tun: "Zamonov M" },
    { id: 20, guruh: "7-THG", kunduz: "Норкобилов Б", tun: "Isayev.F" },
    { id: 21, guruh: "7-THG", kunduz: "Муртазоев М", tun: "Amerov E.T" },
    { id: 22, guruh: "8-THG", kunduz: "Соатов. Э", tun: "Nazarov A" },
    { id: 23, guruh: "8-THG", kunduz: "Рашитов И.Ж", tun: "Latipov.A" },
  ]);

  const sections = [
    { id: "header", title: "Sarlavha", icon: Calendar },
    { id: "masullar", title: "1. Tuman Mas'ullari", icon: Users },
    { id: "navbatchilar", title: "2. Navbatchilari", icon: Shield },
    { id: "tergov", title: "2.1 Tergov-tezkor", icon: Users },
    // { id: "konvoy", title: "2.2 Konvoy NO'J", icon: Car },
    { id: "ppx1", title: "3. PPX 1-bosqich", icon: Car },
    { id: "ppx1piyoda", title: "3.1 PPX Piyoda (10:00-22:00)", icon: Users },
    { id: "ppx2", title: "3.2 PPX 2-bosqich (15:00-02:00)", icon: Car },
    { id: "ppx3", title: "3.3 PPX Tungi (20:00-08:00)", icon: Car },
    { id: "xpb", title: "4. XPB PI (20:00-08:00)", icon: Shield },
    { id: "saroy", title: "5. X.Do'stligi Saroyi", icon: Building },
    { id: "chbsk", title: "7. ChBSK", icon: Building },
    { id: "thg", title: "8. THG Xodimlari", icon: Users },
  ];

  const unvonlar = [
    { label: "Kapitan", value: "kapitan" },
    { label: "Mayor", value: "mayor" },
    { label: "Podpolkovnik", value: "podpolkovnik" },
    { label: "Polkovnik", value: "polkovnik" },
    { label: "Leytenant", value: "leytenant" },
    { label: "Katta leytenant", value: "katta-leytenant" },
    { label: "Safdor", value: "safdor" },
    { label: "Serjant", value: "serjant" },
    { label: "Katta serjant", value: "katta-serjant" },
  ];

  const exportAll = () => {
    let output = `Chilonzor tumani IIO FMB\nboshlig'i polkovnik F.K.Giyasov\n\n`;
    output += `2025 yil\n\nQAROR\n\n`;

    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `taqsimot_${sana}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "header":
        return (
          <HeaderSection
            sana={sana}
            setSana={setSana}
            headerData={headerData}
            setHeaderData={setHeaderData}
          />
        );
      case "masullar":
        return (
          <MasullarSection
            masullar={masullar}
            setMasullar={setMasullar}
            unvonlar={unvonlar}
          />
        );
      case "navbatchilar":
        return (
          <NavbatchilarSection
            navbatchilar={navbatchilar}
            setNavbatchilar={setNavbatchilar}
            unvonlar={unvonlar}
          />
        );
      case "tergov":
        return (
          <TergovSection
            tergov={tergov}
            setTergov={setTergov}
            xaydovchi={xaydovchi}
            setXaydovchi={setXaydovchi}
          />
        );
      // case "konvoy":
      //   return <KonvoySection nojGuruh={nojGuruh} setNojGuruh={setNojGuruh} />;
      case "ppx1":
        return (
          <PPX1Section
            ppx1Bosqich={ppx1Bosqich}
            setPpx1Bosqich={setPpx1Bosqich}
          />
        );

      case "ppx1piyoda":
        return (
          <PPX1PiyodaSection
            ppx1BosqichPiyoda={ppx1BosqichPiyoda}
            setPpx1BosqichPiyoda={setPpx1BosqichPiyoda}
          />
        );

      case "ppx2":
        return (
          <PPX2Section
            ppx2Bosqich={ppx2Bosqich}
            setPpx2Bosqich={setPpx2Bosqich}
          />
        );

      case "ppx3":
        return (
          <PPX3Section
            ppx3Bosqich={ppx3Bosqich}
            setPpx3Bosqich={setPpx3Bosqich}
          />
        );
      case "xpb":
        return <XPBSection xpb={xpbPi} setXpb={setXpb} />;
      case "saroy":
        return <SaroySection saroy={saroy} setSaroy={setSaroy} />;
      case "chbsk":
        return <ChbskSection chbsk={chbsk} setChbsk={setChbsk} />;
      case "thg":
        return <ThgSection thg={thg} setThg={setThg} />;
      default:
        return (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Tez orada
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Bu bo'lim ishlab chiqilmoqda
            </p>
          </div>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex transition-colors duration-200">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          exportAll={exportAll}
        />

        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {sections.find((s) => s.id === activeSection)?.title}
                </h2>
                <div className="flex gap-2">
                  <ThemeToggle />
                  <Button variant="primary" icon={Save}>
                    Saqlash
                  </Button>
                </div>
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
