import { useState } from "react";
import DailyReportSystem from "./DailyReportSystem";

export default function AuthApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("auth") === "true"
  );
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const defaultUser = {
    login: "admin",
    password: "12345",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (login === defaultUser.login && password === defaultUser.password) {
      localStorage.setItem("auth", "true");
      setIsLoggedIn(true);
      setLogin(""); // ✅ tozalaydi
      setPassword(""); // ✅ tozalaydi
      setError("");
    } else {
      setError("❌ Login yoki parol xato");
      setLogin(""); // ❌ noto‘g‘ri kiritganda ham tozalaydi
      setPassword("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
    setLogin(""); // logoutdan keyin ham tozalaydi
    setPassword("");
  };

  if (isLoggedIn) {
    return <DailyReportSystem logout={handleLogout} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-gray-900 dark:to-gray-800">
      <div
        className="fixed inset-0 bg-center bg-no-repeat bg-contain opacity-10 filter grayscale brightness-75"
        style={{ backgroundImage: "url('/images/bgimg.png')" }}
      />
      <div className="z-10">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-96 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            🔐 Tizimga kirish
          </h2>

          {error && (
            <p className="text-red-500 text-center text-sm font-medium">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Login
            </label>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Parol
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="12345"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}
