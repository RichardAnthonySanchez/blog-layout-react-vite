import postOrganic from "@/assets/post-organic.png";
import postSustainable from "@/assets/post-sustainable.png";
import postBread from "@/assets/post-bread.png";
import postDyes from "@/assets/post-dyes.png";

const posts = [
  {
    id: 1,
    title: "Organic Living",
    image: postOrganic,
    category: "Gardening",
  },
  {
    id: 2,
    title: "Sustainable Home",
    image: postSustainable,
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "Artisan Bread",
    image: postBread,
    category: "Recipes",
  },
  {
    id: 4,
    title: "Natural Dyes",
    image: postDyes,
    category: "Crafts",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
          Featured Posts
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="card-featured group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-medium text-foreground mt-1">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
