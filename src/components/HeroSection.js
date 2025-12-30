import BackgroundHero from "./BackgroundHero";

function HeroSection({ image, title, subtitle, homepage, children }) {
  return (
    <BackgroundHero image={image}>
      <h1
        className={`font-bebas text-6xl text-white drop-shadow-lg text-center tracking-wide ${!homepage ? "pt-20" : ""}`}
      >
        {title}
      </h1>
      {subtitle && (
        <h4 className="font-work text-xl font-medium text-white mt-3 drop-shadow-lg text-center">
          {subtitle}
        </h4>
      )}
      {children}
    </BackgroundHero>
  );
}

export default HeroSection;