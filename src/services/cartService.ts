import { productService } from "./productService";
import { calculateCart } from "../utils/sum";

import type { CartItem } from "../models/Cart";

export class CartService {
  private cart: CartItem[] = [];

  addToCart(code: string, qty: number): void {
    const product = productService.getProductByUniqueProperty<string>(
      "code",
      code,
    );

    if (!product) {
      window.alert("Invalid product code!");
      return;
    }
    this.cart.push({ product, qty });
    window.alert(`${product.name} added to cart (${qty} pcs).`);
  }

  showCart(): void {
    let cartList = "Cart:\n";
    let total = 0;
    for (const item of this.cart) {
      const subtotal = item.product.price * item.qty;
      total += subtotal;
      cartList += `${item.product.name} (${item.qty} pcs) - Rp. ${subtotal}\n`;
    }
    cartList += `Total: Rp. ${total}\n`;
    window.alert(cartList);
  }

  pay(): void {
    const amount = Number(window.prompt("Enter amount:"));
    if (!amount) {
      window.alert("Payment cancelled.");
      return;
    }

    const total = calculateCart(this.cart);
    const change = amount - total;

    if (change < 0) {
      window.alert("Not enough payment!");
      return;
    }
    window.alert(`Payment success! Change: Rp. ${change}`);
    this.cart = [];
  }
}
