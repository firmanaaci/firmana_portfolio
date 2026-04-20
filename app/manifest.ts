import type { MetadataRoute } from "next";
import { SITE_CONFIG, SITE_URL } from "./lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.siteName,
    short_name: "Firmana",
    description: SITE_CONFIG.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#1c4645",
    theme_color: "#1c4645",
    lang: "id",
    dir: "ltr",
    icons: [
      {
        src: `${SITE_URL}/favicon.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
