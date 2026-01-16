import { Link } from "react-router-dom";
import { useTheme } from "@/context/theme-provider";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <img
            src={isDark ? "/Dark.png" : "/Light.png"}
            alt="Klimate Logo"
            className="h-28"
          />
        </Link>

        <div
          role="button"
          tabIndex={0}
          aria-label="Toggle theme"
          onClick={toggleTheme}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleTheme();
            }
          }}
          className={`flex cursor-pointer items-center justify-center rounded-md border px-3 py-2 transition-transform duration-500 select-none ${
            isDark ? "rotate-180" : "rotate-0"
          }`}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text-blue-500 transition-all" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
