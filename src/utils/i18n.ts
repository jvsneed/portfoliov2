export interface TranslationMeta {
    englishUrl: string;
    frenchUrl: string;
}

export function getTranslationUrl(currentUrl: string): string | null {
    // Remove trailing slash for consistency
    const normalizedUrl = currentUrl.replace(/\/$/, "");
    
    // Check if we're on a French page
    if (normalizedUrl.startsWith("/fr/")) {
        // Convert /fr/garden/... to /garden/...
        return normalizedUrl.replace(/^\/fr/, "");
    }
    
    // Convert /garden/... to /fr/garden/...
    return `/fr${normalizedUrl}`;
}

export function addTranslationMeta(frontmatter: Record<string, unknown>): void {
    const currentUrl = frontmatter.url as string;
    frontmatter.translationUrl = getTranslationUrl(currentUrl);
    frontmatter.language = currentUrl.startsWith("/fr/") ? "fr" : "en";
}
