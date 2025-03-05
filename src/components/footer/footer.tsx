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
    <div
      className={`${
        isCalled ? "" : "absolute"
      } flex items-center justify-center m-auto max-w-[220px] p-10 top-[90%] inset-0`}
    >
      <h3 className="text-center text-xs">
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
