import { MetadataRoute } from 'next';

const Robots = (): MetadataRoute.Robots => {
    const baseUrl = "https://arifilham.my.id";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}

export default Robots;