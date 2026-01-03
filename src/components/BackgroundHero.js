import PropTypes from "prop-types";

function BackgroundHero({ image, children, isCityHero }) {
  return (
    <div
      className={`w-full ${isCityHero ? "h-screen" : "h-[80vh] lg:h-screen"} flex flex-col items-center justify-center relative`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      <div className="relative z-10 flex flex-col items-center w-full">
        {children}
      </div>
    </div>
  );
}

BackgroundHero.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BackgroundHero;