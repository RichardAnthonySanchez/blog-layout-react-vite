import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TOPICS, MOCK_POSTS_BY_TOPIC } from "@/lib/data";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useCategories } from "@/hooks/use-wordpress";

const Topics = () => {
    const { data: wpCategories, isError } = useCategories();

    const displayTopics = (wpCategories && wpCategories.length > 0 && !isError)
        ? wpCategories.map((c: any) => c.name)
        : TOPICS;

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Explore Topics
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Dive deep into the world of fungi, wellness, and sustainable living.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayTopics.map((topic: string, index: number) => {
                            // Note: MOCK_POSTS_BY_TOPIC keys might not match WP category names exacty.
                            // For WP categories, we won't have the mock posts list associated unless we fetch it.
                            // In this simple iteration, we'll assume WP categories don't have the inline mock posts preview unless we add that logic.
                            // We will link to the articles page filtered by this topic.

                            const posts = MOCK_POSTS_BY_TOPIC[topic] || [];
                            const hasPosts = posts.length > 0;
                            const isWpCategory = !TOPICS.includes(topic);

                            return (
                                <div
                                    key={topic}
                                    className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`p-8 h-full flex flex-col ${(!hasPosts && !isWpCategory) ? 'opacity-80' : ''}`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <h2 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {topic}
                                            </h2>
                                            {(!hasPosts && !isWpCategory) && (
                                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                                                    Coming Soon
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex-1">
                                            {hasPosts ? (
                                                <ul className="space-y-3">
                                                    {posts.map((post) => (
                                                        <li key={post.slug}>
                                                            <Link
                                                                to={`/articles/${post.slug}`}
                                                                className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 group/link"
                                                            >
                                                                <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                                                                {post.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div className="h-full flex flex-col justify-center items-center text-center py-6 text-muted-foreground/50">
                                                    <Sparkles className="h-8 w-8 mb-2 opacity-30" />
                                                    <p className="text-sm">
                                                        {isWpCategory ? "Browse articles in this category" : "New content brewing..."}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-border/30">
                                            <Link
                                                to={`/articles?topic=${topic}`}
                                                className="text-xs font-semibold uppercase tracking-wider text-secondary hover:text-secondary/80 flex items-center gap-1"
                                            >
                                                View All <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Topics;
