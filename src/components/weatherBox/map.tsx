const Map = ({
  latitude,
  longitude,
}: {
  latitude: number | null;
  longitude: number | null;
}) => {
  return (
    <>
      <div className="bg-white h-60 xl:h-full w-full ">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=10&output=embed`}
        ></iframe>
      </div>
    </>
  );
};

export default Map;
