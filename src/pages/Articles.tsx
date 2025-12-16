import { Link, useSearchParams } from "react-router-dom";
import { articles } from "@/lib/articles";
import { usePosts } from "@/hooks/use-wordpress";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const Articles = () => {
  const { data: wpPosts, isError } = usePosts();
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic');

  // Use WP posts if available, otherwise fallback to local articles
  let displayPosts = (wpPosts && wpPosts.length > 0 && !isError)
    ? wpPosts.map((post) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...',
      date: new Date(post.date).toLocaleDateString(),
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop',
      slug: post.slug,
      isWp: true
    }))
    : articles.map(a => ({ ...a, isWp: false }));

  // Simple topic filter (if topic is present in URL)
  // Note: For WP, we'd ideally filter by category ID API side, but for now we'll do simple client side or ignore if complex
  // Given the current scope, we will just display all posts or fallback.
  // If we really wanted to filter by topic with WP data, we'd need to match slug to category ID first.

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-8">
            {topic ? `Articles about ${topic}` : 'Latest Posts'}
          </h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post) => (
              <Link
                key={post.id}
                to={`/articles/${post.slug}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h2
                    className="font-display text-xl font-bold text-gray-900 mb-3 line-clamp-2"
                    dangerouslySetInnerHTML={post.isWp ? { __html: post.title } : undefined}
                  >
                    {!post.isWp ? post.title : undefined}
                  </h2>
                  <div
                    className="text-gray-600 mb-4 line-clamp-3 text-sm"
                    dangerouslySetInnerHTML={post.isWp ? { __html: post.excerpt } : undefined}
                  >
                    {!post.isWp ? post.excerpt : undefined}
                  </div>
                  <div className="flex items-center text-secondary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
