import featuredArticle from "@/assets/featured-tincture.png";

const FeaturedArticle = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect rounded-3xl overflow-hidden border-glow animate-slide-up">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img
                src={featuredArticle}
                alt="Lion's Mane Tincture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
                🌿 Best Seller
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight">
                The Healing Power of Lion's Mane
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Discover our premium double-extracted mushroom tinctures, crafted to support cognitive health and focus. Sustainably harvested and potent.
              </p>
              <button className="btn-hero self-start text-base px-6 py-3">
                Shop Tinctures
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
