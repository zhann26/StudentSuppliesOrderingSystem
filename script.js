
const products = [
  { id: 1, name: "Ballpen", price: 12 },
  { id: 2, name: "Pencil", price: 10 },
  { id: 3, name: "Notebook", price: 35 },
  { id: 4, name: "Yellow Pad", price: 45 },
  { id: 5, name: "Eraser", price: 8 },
  { id: 6, name: "Ruler", price: 15 }
];

let cart = [];
let paid = false;

const peso = amount => "₱" + amount.toFixed(2);

function showProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const row = document.createElement("div");
    row.className = "item";

    const label = document.createElement("span");
    label.textContent =
      `${product.name} - ${peso(product.price)}`;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.disabled = paid;
    button.onclick = () => addToCart(product.id);

    row.append(label, button);
    container.appendChild(row);
  });
}

function addToCart(id) {
  if (paid) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, quantity: 1 });
  }

  showCart();
}

function changeQuantity(id, amount) {
  if (paid) return;

  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeItem(id);
    return;
  }

  showCart();
}

function removeItem(id) {
  if (paid) return;
  cart = cart.filter(item => item.id !== id);
  showCart();
}

function getTotal() {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function showCart() {
  const container = document.getElementById("cart");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.textContent = "Your cart is empty.";
  }

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "item";

    const label = document.createElement("span");
    label.textContent =
      `${item.name} | ${peso(item.price)} × ${item.quantity} = ` +
      peso(item.price * item.quantity);

    const controls = document.createElement("div");

    if (!paid) {
      [
        ["−", () => changeQuantity(item.id, -1)],
        ["+", () => changeQuantity(item.id, 1)],
        ["Remove", () => removeItem(item.id)]
      ].forEach(([text, action]) => {
        const button = document.createElement("button");
        button.textContent = text;
        button.onclick = action;
        controls.appendChild(button);
      });
    }

    row.append(label, controls);
    container.appendChild(row);
  });

  document.getElementById("total").textContent =
    peso(getTotal());
}

function confirmPayment() {
  const message = document.getElementById("message");
  const cashInput = document.getElementById("cash");
  const raw = cashInput.value.trim();
  const total = getTotal();

  message.style.color = "red";

  if (paid) {
    message.textContent = "Transaction already completed.";
    return;
  }

  if (cart.length === 0) {
    message.textContent = "Add products first.";
    return;
  }

  if (raw === "") {
    message.textContent = "Please enter payment amount.";
    return;
  }

  const cash = Number(raw);

  if (!Number.isFinite(cash)) {
    message.textContent = "Invalid payment amount.";
    return;
  }

  if (cash < 0) {
    message.textContent = "Payment cannot be negative.";
    return;
  }

  // Round to cents to avoid floating-point errors.
  const cashCents = Math.round(cash * 100);
  const totalCents = Math.round(total * 100);

  if (cashCents < totalCents) {
    message.textContent = "Insufficient payment.";
    return;
  }

  const change = (cashCents - totalCents) / 100;

  paid = true;
  cashInput.disabled = true;
  document.getElementById("payBtn").disabled = true;

  message.style.color = "green";
  message.textContent = "Payment successful!";

  generateReceipt(cashCents / 100, change);
  showCart();
  showProducts();
}

function generateReceipt(cash, change) {
  const reference = "TXN-" + Date.now();
  const date = new Date().toLocaleString();

  let receipt =
    "STUDENT SUPPLIES SHOP\n" +
    "Reference: " + reference + "\n" +
    "Date: " + date + "\n" +
    "----------------------------\n";

  cart.forEach(item => {
    receipt +=
      `${item.name} | ${peso(item.price)} × ${item.quantity}` +
      ` = ${peso(item.price * item.quantity)}\n`;
  });

  receipt +=
    "----------------------------\n" +
    "Total: " + peso(getTotal()) + "\n" +
    "Cash: " + peso(cash) + "\n" +
    "Change: " + peso(change) + "\n\n" +
    "PAYMENT CONFIRMED\nThank you for your purchase!";

  document.getElementById("receipt").textContent = receipt;
}

function newTransaction() {
  cart = [];
  paid = false;

  const cashInput = document.getElementById("cash");
  cashInput.value = "";
  cashInput.disabled = false;

  document.getElementById("payBtn").disabled = false;
  document.getElementById("message").textContent = "";
  document.getElementById("receipt").textContent =
    "No completed transaction.";

  showCart();
  showProducts();
}

document.getElementById("payBtn").onclick = confirmPayment;
document.getElementById("newBtn").onclick = newTransaction;

showProducts();
showCart();
