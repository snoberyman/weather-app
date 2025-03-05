import { useEffect, useState } from "react";

import Header from "./components/header/header";
import MainInput from "./features/mainInput/mainInput";
import MainOutpt from "./features/mainOutput/mainOutput";
import DayForecast from "./features/dayForecast/dayForecast";
import RainGraph from "./features/rainGraph/rainGraph";
import WindGraph from "./features/windGraph/windGraph";
import UnitSelector from "./components/unitSelector/UnitSelector";
import Footer from "./components/footer/footer";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false); // state to check if font have loaded
  const [isCalled, setIsCalled] = useState<boolean>(false); // state to check if API has been called once
  const [unitSystem, setUnitSystem] = useState<string>("Metric"); // state to check if API has been called once

  useEffect(() => {
    async function loadAssets() {
      await document.fonts.ready; // Wait for all fonts to load
      setFontLoaded(true);
    }
    loadAssets();
  }, []);

  return (
    <>
      <UnitSelector isCalled={isCalled} setUnitSystem={setUnitSystem} />
      <Header fontLoaded={fontLoaded} />
      <div className="flex flex-col items-center justify-center h-full ">
        <MainInput
          fontLoaded={fontLoaded}
          isCalled={isCalled}
          setIsCalled={setIsCalled}
        />
        <MainOutpt unitSystem={unitSystem} isCalled={isCalled} />
        <WindGraph unitSystem={unitSystem} isCalled={isCalled} />
        <RainGraph unitSystem={unitSystem} isCalled={isCalled} />
        <DayForecast unitSystem={unitSystem} isCalled={isCalled} />
      </div>
      <Footer isCalled={isCalled} fontLoaded={fontLoaded} />
    </>
  );
};

export default App;
