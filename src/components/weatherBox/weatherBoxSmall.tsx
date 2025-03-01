const weatherBoxSmall = ({ time, hourlyTemp }: { time: string, hourlyTemp: number | null }) => {
  return (
    <>
      <div className="bg-primary-rose border-1 border-white text-lg/8  p-2 max-sm:text-md text-center flex flex-col justify-center items-center">
        <div className="">{time}</div>
        <div className="">{hourlyTemp}°C</div>
      </div>
    </>
  );
};

export default weatherBoxSmall;

// w-30 h-18
