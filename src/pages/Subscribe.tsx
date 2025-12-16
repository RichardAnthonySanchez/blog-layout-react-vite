
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Subscribe = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-display font-semibold text-primary mb-6">
                    Subscribe
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We are currently working on our subscription feature. Check back soon for updates!
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Subscribe;
