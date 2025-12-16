
export interface WPPost {
    id: number;
    date: string;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    categories: number[];
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
        author?: Array<{
            name: string;
        }>;
    };
}

const BASE_URL = import.meta.env.VITE_WP_API_URL;

export async function getPosts(categoryId?: number): Promise<WPPost[]> {
    const url = categoryId
        ? `${BASE_URL}/posts?categories=${categoryId}`
        : `${BASE_URL}/posts`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost | undefined> {
    const res = await fetch(`${BASE_URL}/posts?slug=${slug}&_embed`);
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    const data = await res.json();
    return data[0];
}

export async function getCategories() {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    return res.json();
}
