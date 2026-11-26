// Replace only with confirmed business details. Never borrow source-site contacts.
export const business = {
  whatsapp: "",
  address: "",
  region: "",
  hours: "",
  instagram: "",
  presentation: "[APRESENTAÇÃO DA MARCA A CONFIRMAR]",
};

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

export const categories = [
  { id: "racoes", name: "Rações", image: assetUrl("site-assets/d217389e38cfb63f.webp"), alt: "Imagem ilustrativa de um cão ao lado de um pote de ração" },
  { id: "petiscos", name: "Petiscos", image: assetUrl("site-assets/6c7dd5d2698ad81e.webp"), alt: "Imagem ilustrativa de um cão com um petisco" },
  { id: "acessorios", name: "Acessórios", image: assetUrl("site-assets/c182891ccc12c4ac.webp"), alt: "Imagem ilustrativa de um cão usando peitoral e guia" },
  { id: "cuidados", name: "Higiene e cuidados", image: assetUrl("site-assets/448d80784de4d293.webp"), alt: "Imagem ilustrativa de um cão de pelo dourado" },
] as const;

export type CategoryId = typeof categories[number]["id"];
export type CatalogProduct = { id: string; category: CategoryId; name: string; description: string; price: string; image: string };
export const products: CatalogProduct[] = [];

export function filterProducts(items: CatalogProduct[], category: CategoryId | "todos") {
  return category === "todos" ? items : items.filter(item => item.category === category);
}

export function whatsappDestination(number: string): string | null {
  const digits = number.replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(digits)) return null;
  return `https://wa.me/${digits}`;
}