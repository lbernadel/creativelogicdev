import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdNightlightRound } from "react-icons/md"

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    // once mounted on client, you can show UI to toggle the theme
    useEffect(() => setMounted(true), [])
    
    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() => setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")}
        >
            {mounted && (theme === "dark" || resolvedTheme === "dark") ? <MdLightMode title="Turn On the Lights" /> : <MdNightlightRound title="Give Me Darkness" />}
        </button>
    )
}

export default ThemeSwitch;