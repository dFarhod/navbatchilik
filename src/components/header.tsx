import { NavUser } from "./nav-user";
import ThemeToggle from "./ThemeToggle";
const user = {
  name: "Toshtemirov B",
  role: "Administrator",
  avatar: "/public/images/cbimage.png",
};
const Header = ({ logout }: { logout: () => void }) => {
  return (
    <header className="fixed z-10 w-[calc(100%-320px)] bg-white dark:bg-gray-800 p-4 min-h-[73px] border-b border-[#FFFFFF1F]">
      <div className="flex items-center gap-2 px-4 w-full justify-end">
        <ThemeToggle />
        <NavUser user={user} logout={logout} />
      </div>
    </header>
  );
};

export default Header;
