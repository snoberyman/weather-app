import { useState } from "react";

// interface UnitSelectorProps {
//   // Optional props if needed later
// }

const UnitSelector = ({
  isCalled,

  setUnitSystem,
}: {
  isCalled: boolean;

  setUnitSystem: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${
        isCalled ? "fixed" : "hidden"
      }  top-0 right-30 z-50 max-sm:right-10`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center cursor-pointer p-2 bg-primary-blue text-white shadow-md border-l border-r border-b border-white">
        <span className="text-lg font-bold">⇅</span>
        {isHovered && (
          <div className="absolute top-9 right-0 w-28 bg-primary-orange  shadow-lg flex flex-col py-2">
            <div
              className="text-center text-sm py-2 cursor-pointer hover:bg-gray-100 hover:text-primary-black"
              onClick={() => {
                setUnitSystem("Metric");
                setIsHovered(false);
              }}
            >
              Metric
            </div>
            <div
              className="text-center text-sm py-2 cursor-pointer hover:bg-gray-100 hover:text-primary-black"
              onClick={() => {
                setUnitSystem("Imperial");
                setIsHovered(false);
              }}
            >
              Imperial
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitSelector;
