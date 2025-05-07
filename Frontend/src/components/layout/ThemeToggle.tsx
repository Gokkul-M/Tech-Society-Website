
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") as "light" | "dark" || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative transition-all duration-300"
    >
      <Sun className={`h-5 w-5 absolute transition-all duration-300 ${
        theme === 'light' 
          ? 'scale-100 rotate-0 opacity-100' 
          : 'scale-0 rotate-90 opacity-0'
      }`} />
      <Moon className={`h-5 w-5 absolute transition-all duration-300 ${
        theme === 'dark' 
          ? 'scale-100 rotate-0 opacity-100' 
          : 'scale-0 -rotate-90 opacity-0'
      }`} />
    </Button>
  );
};

export default ThemeToggle;
