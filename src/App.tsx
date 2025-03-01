import { useEffect, useState } from "react";

import Header from "./components/header/header";
import MainInput from "./features/mainInput/mainInput";
import MainOutpt from "./features/mainOutput/mainOutput";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false); // state to check if font have loaded
  const [isCalled, setIsCalled] = useState<boolean>(false); // state to check if API has been called once

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
        <MainInput
          fontLoaded={fontLoaded}
          isCalled={isCalled}
          setIsCalled={setIsCalled}
        />
        <MainOutpt isCalled={isCalled} />
      </div>
    </>
  );
};

export default App;
