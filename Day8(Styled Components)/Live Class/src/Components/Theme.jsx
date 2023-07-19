import { useState } from "react";
import { Button } from "./Button";
import { Flex } from "./Flex";

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
        <Flex theme={theme}>
          <div>First</div>
          <h3>This is Flex Componenet</h3>
          <div>Second</div>
        </Flex>
      </div>
    </>
  );
};
