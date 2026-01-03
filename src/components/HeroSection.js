import BackgroundHero from "./BackgroundHero";
import PropTypes from "prop-types";

function HeroSection({ image, title, subtitle, homepage, children, isCityHero }) {
  return (
    <BackgroundHero image={image} isCityHero={isCityHero}>
      <h1
        className={`font-bebas text-7xl sm:text-7xl md:text-8xl lg:text-9xl text-white pt-15 sm:pt-20 text-center tracking-wide relative z-10 ${!homepage ? "pt-10 sm:pt-16 md:pt-20" : ""} drop-shadow-[0_4px_24px_rgba(0,0,0,1)] text-shadow-lg`}
      >
        {title}
      </h1>
      {subtitle && (
        <h4 className="font-work text-lg sm:text-xl md:text-2xl font-medium text-white text-center drop-shadow-[0_4px_24px_rgba(0,0,0,1)] text-shadow-lg">
          {subtitle}
        </h4>
      )}
      {children}
    </BackgroundHero>
  );
}

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  homepage: PropTypes.bool,
  children: PropTypes.node,
};

HeroSection.defaultProps = {
  subtitle: "",
  homepage: false,
  children: null,
};

export default HeroSection;