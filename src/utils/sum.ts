import type { CartItem } from "../models/Cart";

export function calculateCart(carts: CartItem[]): number {
  return carts.reduce(
    (acc, cart) => acc + cart.product.price * cart.qty,
    0,
  );
}
