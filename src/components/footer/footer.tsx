const Footer = ({
  fontLoaded,
  isCalled,
}: {
  fontLoaded: boolean;
  isCalled: boolean;
}) => {
  if (!fontLoaded) {
    return (
      <div className="flex justify-center items-center w-[20px] m-auto h-[140px]">
        <img src="/Loading_icon.gif" alt="" className="self-center" />
      </div>
    ); // Show loading text until fonts are ready
  }

  return (
    <div className={` ${isCalled ? "" : "fixed"}   p-10 bottom-2 w-full`}>
      <h3 className="text-center text-xs ">
        Powered by{" "}
        <a
          className="underline"
          target="_blank"
          href="https://www.weatherapi.com/"
        >
          Weather API
        </a>
      </h3>
    </div>
  );
};

export default Footer;
