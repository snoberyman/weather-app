const Header = ({ fontLoaded }: { fontLoaded: boolean }) => {
  if (!fontLoaded) {
    return (
      <div className="flex justify-center items-center w-[20px] m-auto h-[140px]">
        <img src="/Loading_icon.gif" alt="" className="self-center" />
      </div>
    ); // Show loading text until fonts are ready
  }

  return (
    <div className="p-10">
      <a href="https://live-weather-api-calls.netlify.app/">
        <h1 className="text-center text-3xl">Live Weather</h1>
        <h3 className="text-center text-m">Real-Time Weather Information</h3>
      </a>
    </div>
  );
};

export default Header;
