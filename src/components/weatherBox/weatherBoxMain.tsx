function WeatherBoxMain({
  children,
  isCalled,
}: {
  children: React.ReactNode;
  isCalled: boolean;
}) {
  return (
    <div
      className={` ${
        isCalled ? "visible opacity-100 static" : "invisible opacity-0 absolute"
      }   transition-opacity duration-2000 ease-out    mt-10 mb-10 bg-primary-blue w-[60vw] max-sm:w-[80vw] h-auto border-2 border-white  z-1`}
    >
      {children}
    </div>
  );
}

export default WeatherBoxMain;
