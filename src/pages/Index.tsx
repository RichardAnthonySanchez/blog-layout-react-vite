import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import TopicsSection from "@/components/TopicsSection";
import FeaturedArticle from "@/components/FeaturedArticle";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedPosts />
        <TopicsSection />
        <FeaturedArticle />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
