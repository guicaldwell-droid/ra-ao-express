import { describe, expect, it } from "vitest";
import { business, products, filterProducts, whatsappDestination, type CatalogProduct } from "@/lib/racao-content";

describe("Unconfirmed commercial data", () => {
  it("has no WhatsApp destination until the official number is supplied", () => {
    expect(whatsappDestination(business.whatsapp)).toBeNull();
    expect(whatsappDestination("[WHATSAPP]")).toBeNull();
  });
  it("does not invent products or prices before the real catalog is supplied", () => {
    expect(products).toEqual([]);
  });
  it("keeps address, region, hours and social account unconfirmed", () => {
    expect([business.address, business.region, business.hours, business.instagram]).toEqual(["", "", "", ""]);
  });
});

describe("Category selection", () => {
  it("returns only products belonging to the selected category", () => {
    const items: CatalogProduct[] = [
      { id: "one", category: "racoes", name: "Test item", description: "", price: "", image: "" },
      { id: "two", category: "petiscos", name: "Other test item", description: "", price: "", image: "" },
    ];
    expect(filterProducts(items, "racoes").map(item => item.id)).toEqual(["one"]);
    expect(filterProducts(items, "todos")).toHaveLength(2);
  });
});