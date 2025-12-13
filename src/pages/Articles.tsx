
const Articles = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-8">Latest Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for future posts */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-500">No articles yet. Check back soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
