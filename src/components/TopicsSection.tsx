const topics = [
  "Gardening",
  "Recipes",
  "Sustainable Living",
  "Natural Crafts",
  "Homesteading",
  "Wellness",
  "Slow Living",
  "Seasonal",
];

const TopicsSection = () => {
  return (
    <section className="py-8 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
          Topics
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {topics.map((topic, index) => (
            <button
              key={topic}
              className="topic-tag animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
