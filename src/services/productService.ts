import type { Product } from "../models/Product";

export class ProductService {
  private products: Product[] = [
    { code: "A", name: "Air Mineral", price: 3000 },
    { code: "B", name: "Pillow", price: 12000 },
    { code: "C", name: "Pop Mie", price: 7000 },
    { code: "D", name: "Pocari Sweat", price: 8000 },
  ];

  getProductByUniqueProperty<T>(
    property: keyof Product,
    value: T,
  ): Product | undefined {
    return this.products.find(
      (product) => product[property] === value,
    );
  }

  getProductList(): string {
    return this.products
      .map(
        (product) =>
          `${product.code} - ${product.name} (Rp. ${product.price})`,
      )
      .join("\n");
  }
}

export const productService = new ProductService();
