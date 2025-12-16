
import { useQuery } from "@tanstack/react-query";
import { getPosts, getPostBySlug, getCategories } from "../lib/wp";

export function usePosts() {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts(),
    });
}

export function usePost(slug: string | undefined) {
    return useQuery({
        queryKey: ['post', slug],
        queryFn: () => (slug ? getPostBySlug(slug) : Promise.resolve(null)),
        enabled: !!slug,
    });
}

export function useCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });
}
