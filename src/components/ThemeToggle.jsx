import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    return storedTheme === "dark" || (!storedTheme && systemPrefersDark)
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    const nextMode = !isDarkMode
    setIsDarkMode(nextMode)

    if (nextMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      type="button"
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 max-sm:hidden rounded-full p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
        isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  )
}