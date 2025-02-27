import { useEffect, useState } from "react";

import Header from "./components/header/header";
import MainInput from "./features/mainInput/mainInput";
import MainOutpt from "./features/mainOutput/mainOutput";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false); // state to check if font have loaded

  useEffect(() => {
    async function loadAssets() {
      await document.fonts.ready; // Wait for all fonts to load
      setFontLoaded(true);
    }
    loadAssets();
  }, []);

  return (
    <>
      <Header fontLoaded={fontLoaded} />
      <div className="flex flex-col items-center justify-center h-full ">
        <MainInput fontLoaded={fontLoaded} />
        <MainOutpt />
      </div>
    </>
  );
};

export default App;
