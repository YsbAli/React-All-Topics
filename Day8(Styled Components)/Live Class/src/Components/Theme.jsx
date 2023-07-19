import { useState } from "react";
import { Button } from "./Button";

export const Theme = () => {
  const [theme, setTheme] = useState("Dark");
  return (
    <>
      <div>
        <h1>The Theme is: {theme}</h1>
        <Button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
          Change Theme
        </Button>

        <Button theme={theme}>Change Color</Button>
      </div>
    </>
  );
};
