const WeatherBoxLarge = ({
  text = "",
  icon = "",
  percentage = null,
}: {
  text?: string;
  icon?: string;
  percentage?: number | null;
}) => {
  return (
    <>
      <div className="bg-primary-rose border-1 border-white max-sm:text-md text-center text-lg/18  flex flex-row justify-around content-center pl-2">
        {text ? (
          <span className=" text-center overflow-hidden whitespace-nowrap font-semibold">
            {text}
          </span>
        ) : (
          ""
        )}
        {icon ? <img className="" src={icon} alt=""></img> : ""}
        {percentage ? (
          <span className=" text-center">
            Humidity:{" "}
            <span
              className="font-bold
"
            >
              {percentage}%
            </span>
          </span>
        ) : (
          ""
        )}
        {!text && !icon && !percentage ? (
          <span className="text-center text-lg/18">NA</span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default WeatherBoxLarge;

// w-60 h-18
