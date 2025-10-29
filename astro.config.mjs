import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [owner, repo] = repository.split("/");
const defaultBase = repo ? `/${repo}` : "/";
const defaultSite = owner && repo ? `https://${owner}.github.io${defaultBase}` : undefined;

export default defineConfig({
  site: process.env.SITE_URL || defaultSite,
  base: process.env.BASE_PATH || defaultBase,
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  output: "static"
});
