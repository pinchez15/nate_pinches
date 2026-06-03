import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nate Pinches",
    short_name: "Nate Pinches",
    description:
      "Strategy, analytics, and software for founder-led service businesses. Operator behind CappaWork.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F1EA",
    theme_color: "#F4F1EA",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
