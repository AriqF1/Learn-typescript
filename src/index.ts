import { CartService } from "./services/cartService";
import { productService } from "./services/productService";

function runApp() {
  const cartService = new CartService();
  window.alert(productService.getProductList());

  while (true) {
    const input = window.prompt(
      "Enter product code and quantity (separated by space), or type 'pay' to checkout:",
    );

    if (!input) {
      break;
    }

    if (input.toLowerCase() === "pay") {
      cartService.pay();
      break;
    }

    const [code, qtyStr] = input.split(" ");
    const qty = Number(qtyStr);

    if (isNaN(qty) || qty <= 0) {
      window.alert("Invalid quantity!");
      continue;
    }

    cartService.addToCart(code, qty);
    cartService.showCart();
  }

  window.alert("Thank you for shopping!");
}

document.getElementById("run")?.addEventListener("click", runApp);
