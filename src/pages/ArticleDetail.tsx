
import { useParams, Link } from "react-router-dom";
import { articles } from "@/lib/articles";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleDetail = () => {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Article Not Found</h1>
                <p className="text-gray-600 mb-8">The article you are looking for does not exist.</p>
                <Link to="/articles">
                    <Button>Back to Articles</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <article className="max-w-4xl mx-auto px-6">
                <Link to="/articles" className="inline-flex items-center text-secondary hover:text-secondary/80 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Fallback image if local asset not perfectly matched, but we use what we have */}
                    <div className="h-64 md:h-96 w-full overflow-hidden bg-gray-200">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop';
                            }}
                        />
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {article.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {article.author}
                            </div>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-600">
                            {article.content.split('\n').map((paragraph, idx) => (
                                paragraph.trim() && <p key={idx} className="mb-6 leading-relaxed">{paragraph.trim()}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ArticleDetail;
