import BackgroundHero from "./BackgroundHero";
import PropTypes from "prop-types";

function HeroSection({ image, title, subtitle, homepage, children, isCityHero }) {
  return (
    <BackgroundHero image={image} isCityHero={isCityHero}>
      <h1
        className={`font-bebas text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-white pt-8 sm:pt-12 md:pt-16 text-center tracking-wide relative z-10 ${!homepage ? "pt-6 sm:pt-10 md:pt-14" : ""} drop-shadow-[0_4px_24px_rgba(0,0,0,1)] text-shadow-lg`}
      >
        {title}
      </h1>
      {subtitle && (
        <h4 className="font-work sm:text-lg md:text-xl font-medium text-white text-center drop-shadow-[0_4px_24px_rgba(0,0,0,1)] text-shadow-lg">
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
  isCityHero: PropTypes.bool,
};

HeroSection.defaultProps = {
  subtitle: "",
  homepage: false,
  children: null,
  isCityHero: false,
};

export default HeroSection;