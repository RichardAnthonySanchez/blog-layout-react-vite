import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-fungi.png";
import tinctureImg from "@/assets/featured-tincture.png";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroBg})` }}
                    />
                    <div className="absolute inset-0 bg-primary/70" /> {/* Darker overlay for readability */}

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
                            About Goldcoast Shrooms
                        </h1>
                        <p className="text-xl text-primary-foreground/90 max-w-2xl animate-slide-up">
                            Cultivating wellness from the heart of Lake Worth, Florida.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 animate-slide-up">
                            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                                Our Roots in the Sunshine State
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Welcome to Goldcoast Shrooms. We are a passionate team of mycologists and wellness enthusiasts based in beautiful Lake Worth, Florida.
                                </p>
                                <p>
                                    Our journey began with a simple fascination for the kingdom of Fungi and its incredible potential to heal and restore. Living in Florida, we saw an opportunity to bring the benefits of medicinal mushrooms to our community, blending ancient wisdom with modern extraction techniques.
                                </p>
                                <p>
                                    We specialize in high-potency tinctures and premium supplements. Every bottle that leaves our facility is a testament to our commitment to purity, potency, and transparency.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="rounded-3xl overflow-hidden shadow-xl animate-fade-in group hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={tinctureImg}
                                    alt="Goldcoast Shrooms Tinctures"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 px-6 bg-muted/30">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
                            Why Choose Goldcoast?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 bg-card rounded-2xl shadow-sm border border-border/50">
                                <div className="text-4xl mb-4">☀️</div>
                                <h3 className="font-semibold text-lg mb-2">Florida Grown</h3>
                                <p className="text-sm text-muted-foreground">Local cultivation means fresher ingredients and a smaller carbon footprint.</p>
                            </div>
                            <div className="p-6 bg-card rounded-2xl shadow-sm border border-border/50">
                                <div className="text-4xl mb-4">💧</div>
                                <h3 className="font-semibold text-lg mb-2">Dual Extraction</h3>
                                <p className="text-sm text-muted-foreground">We use both water and alcohol to ensure maximum bioavailability.</p>
                            </div>
                            <div className="p-6 bg-card rounded-2xl shadow-sm border border-border/50">
                                <div className="text-4xl mb-4">🧬</div>
                                <h3 className="font-semibold text-lg mb-2">Lab Tested</h3>
                                <p className="text-sm text-muted-foreground">Rigorous testing ensures our supplements are safe and effective.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
