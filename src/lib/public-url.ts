// Prefixes files from /public with Vite's base, so the site also works under a subpath
// (e.g. GitHub Pages at /<repo>/). With the default base "/" the paths are unchanged.
const base = import.meta.env.BASE_URL ?? "/";

export function publicUrl(path: string): string {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

// Rewrites root-relative url(/site-assets/...) references inside raw CSS strings.
export function withPublicBase(css: string): string {
  return css.replaceAll("url(/site-assets/", `url(${publicUrl("site-assets/")}`);
}
