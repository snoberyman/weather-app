const weatherBoxSmall = ({
  title,
  temp,
}: {
  title: string;
  temp: number | null;
}) => {
  return (
    <>
      <div className="bg-primary-rose border-1 border-white  p-2 max-sm:text-md text-center flex flex-col justify-center items-center">
        <div className="text-xs">{title}</div>
        <div className="text-lg/10 font-bold">
          {" "}
          {temp ? temp + "°C" : "N/A"}{" "}
        </div>
      </div>
    </>
  );
};

export default weatherBoxSmall;

// w-30 h-18
