"use client";
import { Switch} from "@heroui/react";
import {Sun,Moon} from "@gravity-ui/icons";
import { useTheme } from "next-themes";



function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
 <Switch onChange ={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          {isSelected ? <Sun /> : <Moon />}
        </Switch.Content>
      )}
    </Switch>
  )
}

export default ThemeToggle