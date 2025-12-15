export const TOPICS = [
    "Mushrooms",
    "Tinctures",
    "Mycology",
    "Wellness",
    "Recipes",
    "Sustainable Living",
    "Natural Crafts",
    "Foraging",
];

export const MOCK_POSTS_BY_TOPIC: Record<string, { title: string; slug: string }[]> = {
    "Tinctures": [
        { title: "The Healing Power of Lion's Mane", slug: "healing-power-lions-mane" }
    ],
    "Sustainable Living": [
        { title: "Sustainable Home", slug: "sustainable-home" }
    ],
    "Natural Crafts": [
        { title: "Natural Dyes", slug: "natural-dyes" }
    ],
    "Recipes": [
        { title: "Artisan Bread", slug: "artisan-bread" }
    ]
};
