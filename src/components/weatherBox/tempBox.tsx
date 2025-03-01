const TempBox = ({ tempValue }: { tempValue: number | null }) => {
  return (
    <>
      <div className="bg-primary-rose border-1 border-white text-xl/18  max-sm:text-md text-center flex flex-col justify-center items-center">
        {tempValue ? tempValue + "°C" : "N/A"}
      </div>
    </>
  );
};

export default TempBox;
