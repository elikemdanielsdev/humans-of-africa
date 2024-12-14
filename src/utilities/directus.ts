import { createDirectus, rest } from "@directus/sdk";

const directusUrl = "http://localhost:8055";

type Article = {
  title: string;
  slug: string;
  date_published: string;
  featured: boolean;
  spotlight: boolean;
  image: ImageMetadata;
  block_content: {
    content: any[];
  };
};

type Schema = {
  articles: Article[];
};

const directus = createDirectus<Schema>(directusUrl).with(rest());

export { directus, directusUrl };
