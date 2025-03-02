const Footer = ({ fontLoaded }: { fontLoaded: boolean }) => {
  if (!fontLoaded) {
    return (
      <div className="flex justify-center items-center w-[20px] m-auto h-[140px]">
        <img src="src\assets\Loading_icon.gif" alt="" className="self-center" />
      </div>
    ); // Show loading text until fonts are ready
  }

  return (
    <div className="p-10 absolute bottom-2 w-full">
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
