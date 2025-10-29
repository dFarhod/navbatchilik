import { useState } from "react";
import { Users, Car, Shield, Building } from "lucide-react";
import Sidebar from "./components/Sidebar";
// import HeaderSection from "./sections/HeaderSection";
import MasullarSection from "./sections/MasullarSection";
import NavbatchilarSection from "./sections/NavbatchilarSection";
import TergovSection from "./sections/TergovSection";
import KonvoySection from "./sections/KonvoySection";
import PPX1Section from "./sections/PPX1Section";
import PPX1PiyodaSection from "./sections/PPX1PiyodaSection";
import PPX2Section from "./sections/PPX2Section";
import PPX3Section from "./sections/PPX3Section";
import XPBSection from "./sections/XPBSection";
import SaroySection from "./sections/SaroySection";
import ChbskSection from "./sections/ChbskSection";
import ThgSection from "./sections/ThgSection";
import MPPXSection from "./sections/mppxSection";
import YPXBSection from "./sections/YPXBSection";
import Header from "./components/header";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";

export default function DailyReportSystem({ logout }: { logout: () => void }) {
  const [activeSection, setActiveSection] = useState("masullar");

  const sections = [
    { id: "masullar", title: "1. Tuman Mas'ullari", icon: Users },
    { id: "navbatchilar", title: "2. Navbatchilari", icon: Shield },
    { id: "tergov", title: "2.1 Tergov-tezkor", icon: Users },
    { id: "konvoy", title: "2.2 Konvoy NO'J", icon: Car },
    { id: "ppx1", title: "3. PPX 1-bosqich", icon: Car },
    { id: "ppx1piyoda", title: "3.1 PPX Piyoda (10:00-22:00)", icon: Users },
    { id: "ppx2", title: "3.2 PPX 2-bosqich (15:00-02:00)", icon: Car },
    { id: "ppx3", title: "3.3 PPX Tungi (20:00-08:00)", icon: Car },
    { id: "xpb", title: "4. XPB PI (20:00-08:00)", icon: Shield },
    { id: "saroy", title: "5. X.Do'stligi Saroyi", icon: Building },
    { id: "mppx", title: "6. MPPX 2 (08:00-08:00)", icon: Building },
    { id: "chbsk", title: "7. MPPX 3(08:00-20:00)", icon: Building },
    { id: "thg", title: "8. THG Xodimlari", icon: Users },
    {
      id: "ypxb",
      title: "9.IIBB  YHXB YPXB brigadasi",
      icon: Users,
    },
  ];

  // };

  const renderContent = () => {
    switch (activeSection) {
      case "masullar":
        return <MasullarSection />;
      case "navbatchilar":
        return <NavbatchilarSection />;
      case "tergov":
        return <TergovSection />;
      case "konvoy":
        return <KonvoySection />;
      case "ppx1":
        return <PPX1Section />;
      case "ppx1piyoda":
        return <PPX1PiyodaSection />;
      case "ppx2":
        return <PPX2Section />;
      case "ppx3":
        return <PPX3Section />;
      case "xpb":
        return <XPBSection />;
      case "saroy":
        return <SaroySection />;
      case "mppx":
        return <MPPXSection />;
      case "chbsk":
        return <ChbskSection />;
      case "thg":
        return <ThgSection />;
      case "ypxb":
        return <YPXBSection />;
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
    <SidebarProvider className="w-full">
      <SidebarInset>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex transition-colors duration-200">
          <Sidebar
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            // exportAll={exportAll}
          />

          <div className="ml-80 flex flex-1 flex-col relative">
            <div
              className="ml-80 fixed inset-0 bg-center bg-no-repeat bg-contain opacity-10 filter grayscale brightness-75"
              style={{ backgroundImage: "url('/images/bgimg.png')" }}
            />
            <Header logout={logout} />
            <div className="max-w-5xl w-full mx-auto relative mt-[73px]">
              {renderContent()}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
