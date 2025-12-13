
import { Link } from "react-router-dom";
import { articles } from "@/lib/articles";
import { Calendar, ArrowRight } from "lucide-react";

const Articles = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-8">Latest Posts</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h2 className="font-display text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-secondary font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
