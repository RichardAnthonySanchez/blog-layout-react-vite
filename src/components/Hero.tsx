import heroBg from "@/assets/hero-fungi.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Unlock Nature's Potential
        </h1>
        <div
          className="btn-hero cursor-pointer animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          EXPLORE MUSHROOMS
        </div>
      </div>
    </section>
  );
};

export default Hero;
