const STORAGE_KEY = "hib_customer_app_v1";

const SERVING_OPTIONS = [
  { id: "two", label: "2 servings", price: 5000, note: "Best for one or two people" },
  { id: "four", label: "4 servings", price: 12000, note: "Good for roommates or small homes" },
  { id: "family", label: "Family pack", price: 22000, note: "Serves 6-7 people comfortably" },
];

const ADD_ONS = [
  { id: "assorted", label: "Assorted protein", price: 1500, note: "Beef, pomo and smoked fish mix" },
  { id: "double-protein", label: "Double protein", price: 2500, note: "Extra protein for heavier meals" },
  { id: "spice-plus", label: "Extra spice pack", price: 700, note: "For customers who want more heat" },
];

const DELIVERY_OPTIONS = [
  { id: "standard", label: "Standard home delivery", price: 0, note: "Next available delivery window" },
  { id: "scheduled", label: "Scheduled home delivery", price: 1500, note: "Choose a preferred day and time" },
  { id: "express", label: "Express home delivery", price: 2500, note: "Priority dispatch where available" },
];

const STARTER_CREDIT = 5000;

const IMAGE_CREDITS = [
  {
    name: "Egusi soup",
    author: "Bibisuccess",
    url: "https://commons.wikimedia.org/wiki/File:Egusi_soup_an_igbo_delicacy.jpg",
  },
  {
    name: "Ogbono soup",
    author: "Bukky658",
    url: "https://commons.wikimedia.org/wiki/File:Ogbono_soup_with_assorted_meats.jpg",
  },
  {
    name: "Okro soup",
    author: "Mohammed9ja",
    url: "https://commons.wikimedia.org/wiki/File:Okra_soup_with_stew.jpg",
  },
  {
    name: "Pepper soup",
    author: "Daniel Paullll",
    url: "https://commons.wikimedia.org/wiki/File:Local_bush_meat_pepper_soup.jpg",
  },
];

const meals = [
  {
    id: "egusi",
    name: "Egusi Soup Kit",
    shortName: "Egusi",
    status: "Available",
    accent: "#d79832",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egusi_soup_an_igbo_delicacy.jpg",
    description: "A rich melon-seed soup kit with washed vegetables, pepper blend, spices and a protein option.",
    cookTime: "18 minutes",
    trust: ["Batch coded", "Fresh cut", "Protein optional"],
    ingredients: [
      "Ground egusi",
      "Washed ugu or spinach",
      "Palm oil sachet",
      "Pepper and onion blend",
      "Crayfish and seasoning mix",
      "Protein pack: beef, fish or assorted option",
      "Simple cooking guide",
    ],
    steps: [
      "Add the pepper blend and palm oil to a pot and simmer for 3 minutes.",
      "Stir in the egusi base and add a small amount of water or stock.",
      "Add protein and seasoning, then simmer until the soup thickens.",
      "Fold in the vegetables and cook for another 2-3 minutes.",
      "Serve with swallow, rice, yam or plantain.",
    ],
  },
  {
    id: "ogbono",
    name: "Ogbono Soup Kit",
    shortName: "Ogbono",
    status: "Available",
    accent: "#4f8f52",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ogbono_soup_with_assorted_meats.jpg",
    description: "A draw-soup kit built around ground ogbono, leafy greens, spices and quick-cook protein.",
    cookTime: "15 minutes",
    trust: ["Draw texture", "Quick cook", "Fresh greens"],
    ingredients: [
      "Ground ogbono",
      "Washed leafy greens",
      "Palm oil sachet",
      "Pepper and onion blend",
      "Crayfish and seasoning mix",
      "Protein pack: beef, fish or assorted option",
      "Simple cooking guide",
    ],
    steps: [
      "Warm the palm oil gently and stir in the ogbono base.",
      "Add water or stock in small amounts while stirring.",
      "Add protein, pepper blend and seasoning mix.",
      "Simmer for 5-7 minutes, then add the leafy greens.",
      "Adjust thickness and serve hot.",
    ],
  },
  {
    id: "okro",
    name: "Okro Soup Kit",
    shortName: "Okro",
    status: "Available",
    accent: "#2f9f84",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Okra_soup_with_stew.jpg",
    description: "A fresh okro kit with chopped okro, pepper blend, vegetables and a ready protein option.",
    cookTime: "12 minutes",
    trust: ["Fresh chopped", "Fast lunch", "Light texture"],
    ingredients: [
      "Fresh chopped okro",
      "Washed leafy vegetables",
      "Pepper and onion blend",
      "Crayfish and seasoning mix",
      "Palm oil or light oil sachet",
      "Protein pack: beef, fish or assorted option",
      "Simple cooking guide",
    ],
    steps: [
      "Bring a small amount of water or stock to a gentle boil.",
      "Add pepper blend, seasoning and protein.",
      "Stir in chopped okro and cook briefly.",
      "Add vegetables and oil, then simmer for 2-3 minutes.",
      "Serve immediately for the best texture.",
    ],
  },
  {
    id: "pepper-soup",
    name: "Pepper Soup Kit",
    shortName: "Pepper Soup",
    status: "In testing",
    inPipeline: true,
    accent: "#c9472b",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Local_bush_meat_pepper_soup.jpg",
    description: "A spicy pepper soup kit planned after protein handling, shelf-life and packaging validation.",
    cookTime: "Coming soon",
    trust: ["Waitlist", "Shelf-life testing", "Spice-led"],
    ingredients: [
      "Pepper soup spice blend",
      "Scent leaf",
      "Pepper and onion blend",
      "Ginger and garlic mix",
      "Protein pack option",
      "Simple cooking guide",
    ],
    steps: [
      "This kit is in product testing.",
      "Protein handling, cold-chain requirements and packaging validation come before launch.",
      "Customers can join the launch waitlist from this page.",
    ],
  },
];

const app = document.querySelector("#app");

function defaultState() {
  return {
    page: "auth",
    authMode: "signup",
    user: null,
    selectedMealId: "egusi",
    selectedSizeId: "two",
    selectedAddOns: [],
    selectedDeliveryId: "standard",
    cart: [],
    orders: [],
    orderFilter: "All",
    starterCreditUsed: false,
    waitlist: [],
    savedAddresses: [],
    settings: {
      twoFactor: false,
      notifications: true,
      passwordChanged: false,
    },
    lastOrder: null,
  };
}

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && saved.user ? { ...defaultState(), ...saved } : defaultState();
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetAppData() {
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function seedReturningCustomer(email) {
  return {
    ...defaultState(),
    page: "home",
    authMode: "signin",
    user: {
      name: "Aisha Bello",
      email: email || "customer@hib.com",
      phone: "0803 555 0198",
      country: "Nigeria",
      city: "Lagos",
      password: "stored-securely",
    },
    starterCreditUsed: true,
    savedAddresses: [
      { id: "addr-1", label: "Home", address: "Yaba, Lagos" },
      { id: "addr-2", label: "Weekend", address: "Lekki Phase 1, Lagos" },
    ],
    orders: [
      {
        id: "HIB-2404",
        date: "May 15, 2026",
        title: "Egusi Soup Kit",
        subtitle: "2 servings + assorted protein",
        channel: "Standard home delivery",
        status: "In progress",
        paymentStatus: "Paid",
        amount: 6500,
      },
      {
        id: "HIB-2403",
        date: "May 11, 2026",
        title: "Okro Soup Kit",
        subtitle: "4 servings",
        channel: "Scheduled home delivery",
        status: "Completed",
        paymentStatus: "Paid",
        amount: 13500,
      },
      {
        id: "HIB-2402",
        date: "May 07, 2026",
        title: "Ogbono Soup Kit",
        subtitle: "2 servings starter credit",
        channel: "Standard home delivery",
        status: "Completed",
        paymentStatus: "Covered by credit",
        amount: 0,
      },
    ],
  };
}

function money(value) {
  return `N${Number(value || 0).toLocaleString("en-NG")}`;
}

function getMeal(id) {
  return meals.find((meal) => meal.id === id) || meals[0];
}

function getSize(id) {
  return SERVING_OPTIONS.find((size) => size.id === id) || SERVING_OPTIONS[0];
}

function getDelivery(id) {
  return DELIVERY_OPTIONS.find((option) => option.id === id) || DELIVERY_OPTIONS[0];
}

function orderStatusOptions() {
  return ["All", "In progress", "Completed", "Cancelled"];
}

function filteredOrders() {
  if (state.orderFilter === "All") return state.orders;
  return state.orders.filter((order) => order.status === state.orderFilter);
}

function nextOrderId() {
  return `HIB-${2401 + state.orders.length}`;
}

function cartSubtotal(items = state.cart) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function starterDiscount(items = state.cart) {
  if (state.starterCreditUsed || !items.length) return 0;
  const mealItems = items.filter((item) => item.type === "meal");
  if (!mealItems.length) return 0;
  return Math.min(STARTER_CREDIT, Math.max(...mealItems.map((item) => item.basePrice)));
}

function selectedDeliveryFee() {
  return getDelivery(state.selectedDeliveryId).price;
}

function checkoutTotal() {
  return Math.max(0, cartSubtotal() - starterDiscount() + selectedDeliveryFee());
}

function metrics() {
  const totalOrders = state.orders.length;
  const totalSpent = state.orders.reduce((sum, order) => sum + order.amount, 0);
  const inProgress = state.orders.filter((order) => order.status === "In progress").length;
  const completed = state.orders.filter((order) => order.status === "Completed").length;
  const completionRate = totalOrders ? Math.round((completed / totalOrders) * 100) : 0;
  const credit = state.starterCreditUsed ? "Used" : `${money(STARTER_CREDIT)} available`;

  return {
    totalOrders,
    totalSpent,
    inProgress,
    completionRate,
    credit,
    cartValue: money(Math.max(0, cartSubtotal() - starterDiscount())),
  };
}

function go(page, payload = {}) {
  state.page = page;
  if (payload.mealId) {
    state.selectedMealId = payload.mealId;
    state.selectedSizeId = "two";
    state.selectedAddOns = [];
  }
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function loginFromForm(form) {
  const data = new FormData(form);
  const email = data.get("email") || "customer@hib.com";

  if (state.authMode === "signin") {
    state = seedReturningCustomer(email);
    saveState();
    render();
    return;
  }

  state.user = {
    name: data.get("name") || "HIB Customer",
    email,
    phone: data.get("phone") || "",
    country: data.get("country") || "Nigeria",
    city: data.get("city") || "",
    password: data.get("password") || "",
  };
  state.page = "home";
  state.savedAddresses = [
    {
      id: `addr-${Date.now()}`,
      label: "Primary",
      address: state.user.city ? `${state.user.city}, ${state.user.country}` : state.user.country,
    },
  ];
  saveState();
  render();
}

function selectedAddOnTotal() {
  return state.selectedAddOns.reduce((sum, id) => {
    const addOn = ADD_ONS.find((item) => item.id === id);
    return sum + (addOn ? addOn.price : 0);
  }, 0);
}

function selectedAddOnLabels() {
  return state.selectedAddOns
    .map((id) => ADD_ONS.find((item) => item.id === id))
    .filter(Boolean)
    .map((item) => item.label);
}

function addMealToCart(mealId) {
  const meal = getMeal(mealId);
  const size = getSize(state.selectedSizeId);
  if (!meal || meal.inPipeline) return;

  const addOns = selectedAddOnLabels();
  const addOnTotal = selectedAddOnTotal();
  const price = size.price + addOnTotal;

  state.cart.push({
    id: `cart-${meal.id}-${Date.now()}`,
    type: "meal",
    mealId: meal.id,
    title: meal.name,
    subtitle: [size.label, ...addOns].join(" + "),
    servingId: size.id,
    basePrice: size.price,
    addOns,
    price,
  });
  state.selectedAddOns = [];
  go("cart");
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter((item) => item.id !== itemId);
  saveState();
  render();
}

function placeOrder(form) {
  const data = new FormData(form);
  const subtotal = cartSubtotal();
  const discount = starterDiscount();
  const delivery = getDelivery(state.selectedDeliveryId);
  const total = checkoutTotal();
  const items = [...state.cart];
  const title = items.length === 1 ? items[0].title : `${items.length} soup kits`;
  const subtitle = items.map((item) => item.subtitle).join(" + ");
  const paymentStatus = total === 0 ? "Covered by credit" : "Paid";

  if (discount > 0) state.starterCreditUsed = true;

  const order = {
    id: nextOrderId(),
    date: new Date().toLocaleDateString("en-NG", { month: "short", day: "2-digit", year: "numeric" }),
    title,
    subtitle,
    channel: delivery.label,
    status: "In progress",
    paymentStatus,
    amount: total,
  };

  state.orders.unshift(order);
  state.lastOrder = {
    ...order,
    items,
    subtotal,
    discount,
    deliveryFee: delivery.price,
    deliveryLabel: delivery.label,
    location: data.get("location"),
    phone: data.get("phone"),
    paymentMethod: data.get("paymentMethod") || "Card",
    reference: `PAY-${Date.now().toString().slice(-7)}`,
  };
  state.cart = [];
  saveState();
  go("checkout-success");
}

function joinWaitlist(mealId) {
  if (!state.waitlist.includes(mealId)) state.waitlist.push(mealId);
  saveState();
  render();
}

function foodVisual(meal, action = "detail") {
  const actionAttr = action === "detail" ? `data-detail="${meal.id}"` : "";
  return `
    <button class="meal-media" ${actionAttr} aria-label="View ${meal.name}">
      <img class="food-photo" src="${meal.image}" alt="${meal.name} cooked soup photo" loading="lazy" />
      <div class="package-mock" style="--pack-accent:${meal.accent}">
        <span class="pack-brand">HIB</span>
        <strong>${meal.shortName}</strong>
        <span>Ready-to-cook kit</span>
        <div class="pack-dots" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      </div>
    </button>
  `;
}

function layout(content) {
  if (state.page === "auth") return content;
  const count = state.cart.length;
  const firstName = state.user ? state.user.name.split(" ")[0] : "Guest";
  const nav = [
    ["home", "Dashboard"],
    ["meals", "Meals"],
    ["orders", "Orders"],
    ["access", "Access"],
    ["settings", "Account"],
  ];

  return `
    <div class="enterprise-shell">
      <aside class="sidebar">
        <button class="brand" data-go="home" aria-label="Go to dashboard">
          <span class="brand-mark">HIB</span>
          <span class="brand-copy">
            <span>Home in a Box</span>
            <small>Customer app</small>
          </span>
        </button>
        <nav class="side-nav" aria-label="Primary navigation">
          ${nav.map(([page, label]) => `
            <button class="${state.page === page ? "active" : ""}" data-go="${page}">
              <span>${label}</span>
            </button>
          `).join("")}
        </nav>
        <div class="sidebar-card">
          <span>Starter credit</span>
          <strong>${state.starterCreditUsed ? "Used" : money(STARTER_CREDIT)}</strong>
          <p>Applied automatically to the first eligible 2-serving box.</p>
        </div>
      </aside>

      <div class="workspace">
        <header class="topbar">
          <button class="brand mobile-brand" data-go="home" aria-label="Go to dashboard">
            <span class="brand-mark">HIB</span>
            <span class="brand-copy"><span>Home in a Box</span><small>Customer app</small></span>
          </button>
          <div class="topbar-actions">
            <button class="nav-button ${state.page === "cart" ? "active" : ""}" data-go="cart">
              Cart <span class="cart-count">${count}</span>
            </button>
            <button class="nav-button" data-logout>Hi, ${firstName}</button>
          </div>
        </header>
        <main class="page">${content}</main>
        ${siteFooter()}
      </div>
    </div>
  `;
}

function authPage() {
  const isSignup = state.authMode === "signup";
  return `
    <main class="auth-page">
      <section class="auth-visual">
        <p class="eyebrow">Ready-to-cook Nigerian soup kits</p>
        <h1>Fresh local soup ingredients, portioned and ready for your pot.</h1>
        <p class="lead">
          Home in a Box helps busy Nigerians cook Egusi, Ogbono and Okro faster with fresh, pre-cut ingredients,
          clear cooking steps and flexible one-time checkout.
        </p>
        <div class="auth-proof-grid">
          ${proofCard("3", "Launch soups")}
          ${proofCard("3 sizes", "2-serving, 4-serving and family packs")}
          ${proofCard("No recurring plan", "Order only when you need a box")}
        </div>
      </section>
      <section class="auth-card" aria-label="${isSignup ? "Create account" : "Sign in"} form">
        <div class="auth-tabs">
          <button class="${isSignup ? "active" : ""}" data-auth-mode="signup">Create Account</button>
          <button class="${!isSignup ? "active" : ""}" data-auth-mode="signin">Sign In</button>
        </div>
        <h2>${isSignup ? "Create your account" : "Welcome back"}</h2>
        <p>${isSignup ? "Set up your customer profile and delivery preferences." : "Use email and password to access your dashboard."}</p>
        <form id="authForm" class="form-grid">
          ${isSignup ? `
            <div class="field">
              <label for="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Enter full name" required />
            </div>
          ` : ""}
          <div class="field">
            <label for="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="name@email.com" required />
          </div>
          ${isSignup ? `
            <div class="field-row">
              <div class="field">
                <label for="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" placeholder="0800 000 0000" required />
              </div>
              <div class="field">
                <label for="city">City</label>
                <input id="city" name="city" type="text" placeholder="Lagos" required />
              </div>
            </div>
            <div class="field">
              <label for="country">Country</label>
              <input id="country" name="country" type="text" placeholder="Nigeria" required />
            </div>
          ` : ""}
          <div class="field">
            <label for="password">${isSignup ? "Create password" : "Password"}</label>
            <input id="password" name="password" type="password" placeholder="${isSignup ? "Create a secure password" : "Enter password"}" required />
          </div>
          ${isSignup ? `
            <label class="check-row">
              <input type="checkbox" required />
              <span>I agree to receive order updates and accept the Terms & Conditions.</span>
            </label>
          ` : ""}
          <button class="primary-button" type="submit">${isSignup ? "Create Account" : "Sign In"}</button>
        </form>
      </section>
    </main>
  `;
}

function proofCard(value, label) {
  return `<article class="proof-card"><strong>${value}</strong><span>${label}</span></article>`;
}

function homePage() {
  const firstName = state.user ? state.user.name.split(" ")[0] : "there";
  const data = metrics();
  return layout(`
    <section class="dashboard-hero">
      <div>
        <p class="eyebrow">Customer dashboard</p>
        <h1>Welcome back, ${firstName}</h1>
        <p class="lead">
          Manage soup-kit orders, checkout credit, delivery details and account security from one dashboard.
        </p>
        <div class="button-row">
          <button class="primary-button" data-go="meals">Browse Meals</button>
          <button class="secondary-button" data-go="orders">View Orders</button>
        </div>
      </div>
      <div class="dashboard-card">
        <span>Recommended next box</span>
        ${foodVisual(getMeal("egusi"))}
      </div>
    </section>

    <section class="metric-grid" aria-label="Customer metrics">
      ${metricCard("Total orders", data.totalOrders)}
      ${metricCard("Total spent", money(data.totalSpent))}
      ${metricCard("In progress", data.inProgress)}
      ${metricCard("Completion rate", `${data.completionRate}%`)}
      ${metricCard("Starter credit", data.credit)}
      ${metricCard("Cart value", data.cartValue)}
    </section>

    ${orderDetailsSection()}

    <section class="home-block">
      <div class="section-head">
        <div>
          <p class="eyebrow">Launch menu</p>
          <h2>Built for fast Nigerian cooking</h2>
        </div>
        <p>Choose a fresh kit, select the serving size, add optional upgrades and checkout only when the order has a payable balance.</p>
      </div>
      <div class="meal-grid featured">
        ${meals.slice(0, 3).map(mealCard).join("")}
      </div>
    </section>

    <section class="trust-band">
      ${trustItem("Verified sourcing", "Supplier and receiving checks before ingredients enter production.")}
      ${trustItem("Portioned packs", "2-serving, 4-serving and family-size kits with batch labels.")}
      ${trustItem("Fresh handling", "Washing, sanitizing, sealing and controlled storage before dispatch.")}
    </section>
  `);
}

function trustItem(title, text) {
  return `<article><span></span><h3>${title}</h3><p>${text}</p></article>`;
}

function metricCard(label, value) {
  return `<article class="metric-card"><span>${label}</span><strong>${value}</strong></article>`;
}

function orderDetailsSection() {
  const orders = filteredOrders();
  const filteredTotal = orders.reduce((sum, order) => sum + order.amount, 0);
  return `
    <section class="home-block order-statement">
      <div class="section-head compact">
        <div>
          <p class="eyebrow">Order details</p>
          <h2>Activity statement</h2>
        </div>
        <div class="filter-row" aria-label="Order status filters">
          ${orderStatusOptions().map((status) => `
            <button class="${state.orderFilter === status ? "active" : ""}" data-order-filter="${status}">${status}</button>
          `).join("")}
        </div>
      </div>
      ${orders.length ? `
        <div class="statement-table-wrap">
          <table class="statement-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference</th>
                <th>Order</th>
                <th>Delivery</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${orders.map(orderRow).join("")}
            </tbody>
          </table>
        </div>
        <div class="statement-summary">
          <span>${orders.length} record${orders.length === 1 ? "" : "s"} shown</span>
          <strong>Filtered total: ${money(filteredTotal)}</strong>
        </div>
      ` : emptyBlock("No orders yet", "Place your first soup-kit order and it will appear here.")}
    </section>
  `;
}

function orderRow(order) {
  return `
    <tr>
      <td>${order.date}</td>
      <td>${order.id}</td>
      <td><strong>${order.title}</strong><span>${order.subtitle}</span></td>
      <td>${order.channel}</td>
      <td><span class="statement-status ${order.status.toLowerCase().replace(" ", "-")}">${order.status}</span></td>
      <td>${order.paymentStatus}</td>
      <td>${money(order.amount)}</td>
    </tr>
  `;
}

function mealsPage() {
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Meal catalogue</p>
          <h2>Choose your soup kit</h2>
        </div>
        <p>Every available kit includes pre-cut fresh ingredients, a measured spice pack and simple cooking instructions.</p>
      </div>
      <div class="meal-grid">
        ${meals.map(mealCard).join("")}
      </div>
    </section>
  `);
}

function mealCard(meal) {
  return `
    <article class="meal-card ${meal.inPipeline ? "pipeline-card" : ""}">
      ${foodVisual(meal)}
      <div class="meal-copy">
        <div class="meal-title-line">
          <h3>${meal.name}</h3>
          <span class="status-pill ${meal.inPipeline ? "pipeline" : ""}">${meal.status}</span>
        </div>
        <p>${meal.description}</p>
        <div class="highlight-row">${meal.trust.map((item) => `<span>${item}</span>`).join("")}</div>
        <div class="price-list">
          ${SERVING_OPTIONS.map((price) => `
            <div class="price-row"><span>${price.label}</span><strong>${money(price.price)}</strong></div>
          `).join("")}
        </div>
      </div>
      <button class="${meal.inPipeline ? "secondary-button" : "primary-button"}" data-detail="${meal.id}">
        ${meal.inPipeline ? "View Waitlist" : "View Details"}
      </button>
    </article>
  `;
}

function detailPage() {
  const meal = getMeal(state.selectedMealId);
  const selectedSize = getSize(state.selectedSizeId);
  const total = selectedSize.price + selectedAddOnTotal();
  const waitlisted = state.waitlist.includes(meal.id);
  const actionButton = meal.inPipeline
    ? `<button class="primary-button" data-waitlist="${meal.id}">${waitlisted ? "Waitlist Joined" : "Join Launch Waitlist"}</button>`
    : `<button class="primary-button" data-add="${meal.id}">Add to Cart - ${money(total)}</button>`;

  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Meal details</p>
          <h2>${meal.name}</h2>
        </div>
        <button class="secondary-button" data-go="meals">Back to Meals</button>
      </div>
      <div class="detail-grid">
        <div class="detail-panel detail-hero">
          ${foodVisual(meal, "none")}
          <div>
            <h3>${meal.shortName} kit</h3>
            <p>${meal.description}</p>
          </div>
          <div class="meta-line">
            <span>Cook time: ${meal.cookTime}</span>
            <span>${meal.status}</span>
            <span>Cold-handled before dispatch</span>
          </div>
          <div class="serving-picker">
            <h3>Serving size</h3>
            <div class="size-options">
              ${SERVING_OPTIONS.map((size) => `
                <button class="size-card ${state.selectedSizeId === size.id ? "selected" : ""}" data-size="${size.id}">
                  <strong>${size.label}</strong>
                  <span>${money(size.price)} - ${size.note}</span>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="serving-picker">
            <h3>Optional upgrades</h3>
            <div class="addon-grid">
              ${ADD_ONS.map((addOn) => `
                <button class="addon-card ${state.selectedAddOns.includes(addOn.id) ? "selected" : ""}" data-addon="${addOn.id}">
                  <strong>${addOn.label}</strong>
                  <span>${money(addOn.price)} - ${addOn.note}</span>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="inline-total">
            <span>Item total</span>
            <strong>${money(total)}</strong>
          </div>
          ${actionButton}
          ${meal.inPipeline && waitlisted ? `<div class="success-box">You are on the Pepper Soup launch waitlist.</div>` : ""}
        </div>
        <div class="info-columns">
          <div class="list-panel">
            <h3>Ingredients</h3>
            <ul class="clean-list">${meal.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div class="list-panel">
            <h3>Cooking steps</h3>
            <ol class="step-list">${meal.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          </div>
        </div>
      </div>
    </section>
  `);
}

function accessPage() {
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Starter access</p>
          <h2>Free to start, payable when value is added</h2>
        </div>
        <p>Home in a Box should avoid recurring commitments at launch. The customer starts easily, then pays at checkout for larger orders and premium convenience.</p>
      </div>

      <div class="access-hero-card">
        <div>
          <h3>Recommended launch model</h3>
          <p>Give every new customer a ${money(STARTER_CREDIT)} starter credit. It covers one eligible 2-serving box. Larger packs, extra boxes, protein upgrades and premium delivery windows create the paid transaction.</p>
        </div>
        <button class="primary-button" data-go="meals">Use Starter Credit</button>
      </div>

      <div class="pricing-grid">
        ${pricingCard("Free at account level", ["Create account", "Browse meals", "Save delivery profile", "Join Pepper Soup waitlist", `${money(STARTER_CREDIT)} starter credit`])}
        ${pricingCard("Paid at checkout", ["Second soup box and beyond", "4-serving and family-size packs", "Assorted or double protein", "Extra spice pack", "Scheduled or express home delivery"])}
        ${pricingCard("Future paid features", ["Saved weekly reorder", "Family bundle recommendations", "Bulk weekend cooking pack", "Priority stock reservation", "Premium protein catalogue"])}
      </div>
    </section>
  `);
}

function pricingCard(title, items) {
  return `
    <article class="pricing-card">
      <h3>${title}</h3>
      <ul class="clean-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function ordersPage() {
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Orders</p>
          <h2>Order history and status</h2>
        </div>
        <button class="primary-button" data-go="meals">New Order</button>
      </div>
      ${orderDetailsSection()}
    </section>
  `);
}

function settingsPage() {
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Account</p>
          <h2>Profile, security and preferences</h2>
        </div>
        <p>Manage the customer profile, saved addresses, security controls and communication preferences.</p>
      </div>
      <div class="settings-grid">
        <article class="settings-card">
          <h3>Profile</h3>
          <div class="settings-list">
            <div><span>Name</span><strong>${state.user.name}</strong></div>
            <div><span>Email</span><strong>${state.user.email}</strong></div>
            <div><span>Phone</span><strong>${state.user.phone || "Not added"}</strong></div>
            <div><span>Country</span><strong>${state.user.country || "Nigeria"}</strong></div>
          </div>
        </article>

        <article class="settings-card">
          <h3>Change password</h3>
          <form id="securityForm" class="form-grid">
            <div class="field">
              <label for="currentPassword">Current password</label>
              <input id="currentPassword" name="currentPassword" type="password" placeholder="Current password" required />
            </div>
            <div class="field">
              <label for="newPassword">New password</label>
              <input id="newPassword" name="newPassword" type="password" placeholder="New password" required />
            </div>
            <button class="primary-button" type="submit">Update Password</button>
            ${state.settings.passwordChanged ? `<div class="success-box">Password updated for this session.</div>` : ""}
          </form>
        </article>

        <article class="settings-card">
          <h3>Security</h3>
          <p>Use extra verification before account access.</p>
          <div class="toggle-row">
            <span>${state.settings.twoFactor ? "2FA is active" : "2FA is off"}</span>
            <button class="secondary-button" data-toggle-2fa>${state.settings.twoFactor ? "Turn Off" : "Activate 2FA"}</button>
          </div>
        </article>

        <article class="settings-card">
          <h3>Notifications</h3>
          <p>Receive order, payment and delivery updates.</p>
          <div class="toggle-row">
            <span>${state.settings.notifications ? "Updates enabled" : "Updates muted"}</span>
            <button class="secondary-button" data-toggle-notifications>${state.settings.notifications ? "Mute" : "Enable"}</button>
          </div>
        </article>

        <article class="settings-card">
          <h3>Saved addresses</h3>
          <div class="settings-list">
            ${state.savedAddresses.length ? state.savedAddresses.map((address) => `
              <div><span>${address.label}</span><strong>${address.address}</strong></div>
            `).join("") : `<p>No saved address yet.</p>`}
          </div>
          <form id="addressForm" class="form-grid">
            <div class="field-row">
              <div class="field">
                <label for="addressLabel">Label</label>
                <input id="addressLabel" name="addressLabel" type="text" placeholder="Home" required />
              </div>
              <div class="field">
                <label for="address">Address</label>
                <input id="address" name="address" type="text" placeholder="Yaba, Lagos" required />
              </div>
            </div>
            <button class="secondary-button" type="submit">Save Address</button>
          </form>
        </article>

        <article class="settings-card subtle-card">
          <h3>Data controls</h3>
          <p>Clear local browser data and return to the first screen for a fresh review session.</p>
          <button class="secondary-button" data-reset-app>Clear Local Session</button>
        </article>
      </div>
    </section>
  `);
}

function cartPage() {
  const subtotal = cartSubtotal();
  const discount = starterDiscount();
  const total = Math.max(0, subtotal - discount);
  const content = state.cart.length
    ? `
      <div class="cart-layout">
        <div class="cart-list">
          ${state.cart.map((item) => `
            <article class="cart-item">
              <div>
                <h3>${item.title}</h3>
                <p>${item.subtitle}</p>
                <p>${money(item.price)}</p>
              </div>
              <button class="icon-button" data-remove="${item.id}" aria-label="Remove ${item.title}">Remove</button>
            </article>
          `).join("")}
        </div>
        <aside class="cart-panel">
          <h3>Order summary</h3>
          <div class="summary-row"><span>Items</span><strong>${state.cart.length}</strong></div>
          <div class="summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
          ${discount ? `<div class="summary-row savings"><span>Starter credit</span><strong>- ${money(discount)}</strong></div>` : ""}
          <div class="summary-row total"><span>Due before delivery</span><strong>${money(total)}</strong></div>
          <button class="primary-button" data-go="checkout">Checkout</button>
          <button class="secondary-button" data-go="meals">Add More Meals</button>
        </aside>
      </div>
    `
    : emptyBlock("Your cart is empty", "Browse the menu and add a soup kit when you are ready.");

  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Cart</p>
          <h2>Your soup-kit order</h2>
        </div>
      </div>
      ${content}
    </section>
  `);
}

function checkoutPage() {
  if (!state.cart.length) {
    return layout(`
      <section class="empty-state">
        <h2>No items to checkout</h2>
        <p>Add a soup kit before placing an order.</p>
        <button class="primary-button" data-go="meals">Browse Meals</button>
      </section>
    `);
  }

  const delivery = getDelivery(state.selectedDeliveryId);
  const payable = checkoutTotal();
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Checkout</p>
          <h2>Delivery and payment</h2>
        </div>
      </div>
      <div class="checkout-layout">
        <form class="checkout-panel form-grid" id="checkoutForm">
          <div class="field">
            <label for="name">Recipient name</label>
            <input id="name" name="name" type="text" value="${state.user.name}" required />
          </div>
          <div class="field">
            <label for="location">Home delivery address</label>
            <input id="location" name="location" type="text" placeholder="E.g. Yaba, Lagos" required />
          </div>
          <div class="field">
            <label for="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" value="${state.user.phone || ""}" required />
          </div>
          <div class="delivery-options">
            <h3>Delivery option</h3>
            ${DELIVERY_OPTIONS.map((option) => `
              <button type="button" class="delivery-card ${state.selectedDeliveryId === option.id ? "selected" : ""}" data-delivery-option="${option.id}">
                <strong>${option.label}</strong>
                <span>${option.note}</span>
                <em>${money(option.price)}</em>
              </button>
            `).join("")}
          </div>
          <div class="payment-panel">
            <h3>${payable > 0 ? "Payment required" : "No payment required"}</h3>
            <p>${payable > 0 ? "The payable balance can be settled by card, bank transfer or wallet at checkout." : "Your starter credit covers the current order balance."}</p>
            ${payable > 0 ? `
              <div class="payment-methods">
                <label><input type="radio" name="paymentMethod" value="Card" checked /> Card</label>
                <label><input type="radio" name="paymentMethod" value="Bank transfer" /> Bank transfer</label>
                <label><input type="radio" name="paymentMethod" value="Wallet" /> Wallet</label>
              </div>
            ` : `<input type="hidden" name="paymentMethod" value="Starter credit" />`}
          </div>
          <button class="primary-button" type="submit">${payable > 0 ? `Confirm Payment - ${money(payable)}` : "Place Order"}</button>
        </form>
        <aside class="checkout-panel">
          <h3>Final summary</h3>
          ${orderItems(state.cart)}
          <div class="summary-row"><span>Subtotal</span><strong>${money(cartSubtotal())}</strong></div>
          ${starterDiscount() ? `<div class="summary-row savings"><span>Starter credit</span><strong>- ${money(starterDiscount())}</strong></div>` : ""}
          <div class="summary-row"><span>${delivery.label}</span><strong>${money(delivery.price)}</strong></div>
          <div class="summary-row total"><span>Total due</span><strong>${money(payable)}</strong></div>
        </aside>
      </div>
    </section>
  `);
}

function checkoutSuccessPage() {
  const order = state.lastOrder;
  if (!order) return homePage();
  return layout(`
    <section class="checkout-layout">
      <div class="checkout-panel">
        <p class="eyebrow">Order placed</p>
        <h2>Thanks, ${state.user.name.split(" ")[0]}</h2>
        <p>Your order has been created and your dashboard has been updated.</p>
        <div class="success-box">
          ${order.deliveryLabel} selected. Delivery location: ${order.location || "Not specified"}.
        </div>
        <div class="button-row">
          <button class="primary-button" data-go="home">Back to Dashboard</button>
          <button class="secondary-button" data-go="meals">Order Again</button>
        </div>
      </div>
      <aside class="checkout-panel">
        <h3>Receipt</h3>
        <div class="settings-list">
          <div><span>Order ID</span><strong>${order.id}</strong></div>
          <div><span>Payment reference</span><strong>${order.reference}</strong></div>
          <div><span>Payment method</span><strong>${order.paymentMethod}</strong></div>
          <div><span>Status</span><strong>${order.paymentStatus}</strong></div>
        </div>
        ${orderItems(order.items)}
        <div class="summary-row"><span>Subtotal</span><strong>${money(order.subtotal)}</strong></div>
        ${order.discount ? `<div class="summary-row savings"><span>Starter credit</span><strong>- ${money(order.discount)}</strong></div>` : ""}
        <div class="summary-row"><span>Delivery fee</span><strong>${money(order.deliveryFee)}</strong></div>
        <div class="summary-row total"><span>Total paid</span><strong>${money(order.amount)}</strong></div>
      </aside>
    </section>
  `);
}

function orderItems(items) {
  return `
    <div class="order-list">
      ${items.map((item) => `
        <div class="order-mini">
          <span>${item.title} - ${item.subtitle}</span>
          <strong>${money(item.price)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function legalPage() {
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Legal</p>
          <h2>Terms, privacy and food safety</h2>
        </div>
      </div>
      <div class="legal-grid">
        ${legalCard("Terms & Conditions", "Orders are subject to availability, confirmed pricing, delivery coverage and successful payment where a payable balance exists. Customers must provide accurate delivery and contact information.")}
        ${legalCard("Privacy", "Customer information is used to manage accounts, fulfil orders, send delivery updates and improve service quality. Payment data should be processed only through approved payment partners in a live deployment.")}
        ${legalCard("Food Safety", "HIB kits should follow supplier verification, washing, sanitizing, portion control, sealing, batch coding, storage and final quality-check procedures before dispatch.")}
        ${legalCard("Refunds & Support", "Refund decisions should be based on failed delivery, missing items, verified quality complaints or duplicate payment. Support channels should respond within published service timelines.")}
      </div>
    </section>
  `);
}

function legalCard(title, text) {
  return `<article class="legal-card"><h3>${title}</h3><p>${text}</p></article>`;
}

function emptyBlock(title, text) {
  return `
    <div class="empty-state">
      <h3>${title}</h3>
      <p>${text}</p>
      <button class="primary-button" data-go="meals">Browse Meals</button>
    </div>
  `;
}

function siteFooter() {
  return `
    <footer class="site-footer">
      <div>
        <strong>Home in a Box</strong>
        <span>Ready-to-cook Nigerian soup kits for home delivery.</span>
      </div>
      <nav aria-label="Footer navigation">
        <button data-go="legal">Terms & Conditions</button>
        <button data-go="legal">Privacy</button>
        <button data-go="legal">Food Safety</button>
        <button data-go="settings">Support</button>
      </nav>
      <div class="credit-links">
        <span>Image credits:</span>
        ${IMAGE_CREDITS.map((credit) => `<a href="${credit.url}" target="_blank" rel="noreferrer">${credit.name} by ${credit.author}</a>`).join("")}
      </div>
    </footer>
  `;
}

function render() {
  const pages = {
    auth: authPage,
    home: homePage,
    meals: mealsPage,
    detail: detailPage,
    access: accessPage,
    orders: ordersPage,
    settings: settingsPage,
    cart: cartPage,
    checkout: checkoutPage,
    "checkout-success": checkoutSuccessPage,
    legal: legalPage,
  };

  app.innerHTML = (pages[state.page] || authPage)();
}

app.addEventListener("click", (event) => {
  const authModeTarget = event.target.closest("[data-auth-mode]");
  const goTarget = event.target.closest("[data-go]");
  const detailTarget = event.target.closest("[data-detail]");
  const sizeTarget = event.target.closest("[data-size]");
  const addOnTarget = event.target.closest("[data-addon]");
  const addTarget = event.target.closest("[data-add]");
  const waitlistTarget = event.target.closest("[data-waitlist]");
  const removeTarget = event.target.closest("[data-remove]");
  const orderFilterTarget = event.target.closest("[data-order-filter]");
  const deliveryOptionTarget = event.target.closest("[data-delivery-option]");
  const toggleTwoFactorTarget = event.target.closest("[data-toggle-2fa]");
  const toggleNotificationsTarget = event.target.closest("[data-toggle-notifications]");
  const resetTarget = event.target.closest("[data-reset-app]");
  const logoutTarget = event.target.closest("[data-logout]");

  if (authModeTarget) {
    state.authMode = authModeTarget.dataset.authMode;
    render();
    return;
  }

  if (orderFilterTarget) {
    state.orderFilter = orderFilterTarget.dataset.orderFilter;
    saveState();
    render();
    return;
  }

  if (deliveryOptionTarget) {
    state.selectedDeliveryId = deliveryOptionTarget.dataset.deliveryOption;
    saveState();
    render();
    return;
  }

  if (toggleTwoFactorTarget) {
    state.settings.twoFactor = !state.settings.twoFactor;
    saveState();
    render();
    return;
  }

  if (toggleNotificationsTarget) {
    state.settings.notifications = !state.settings.notifications;
    saveState();
    render();
    return;
  }

  if (resetTarget) {
    resetAppData();
    return;
  }

  if (goTarget) {
    go(goTarget.dataset.go);
    return;
  }

  if (detailTarget) {
    go("detail", { mealId: detailTarget.dataset.detail });
    return;
  }

  if (sizeTarget) {
    state.selectedSizeId = sizeTarget.dataset.size;
    saveState();
    render();
    return;
  }

  if (addOnTarget) {
    const id = addOnTarget.dataset.addon;
    state.selectedAddOns = state.selectedAddOns.includes(id)
      ? state.selectedAddOns.filter((item) => item !== id)
      : [...state.selectedAddOns, id];
    saveState();
    render();
    return;
  }

  if (addTarget) {
    addMealToCart(addTarget.dataset.add);
    return;
  }

  if (waitlistTarget) {
    joinWaitlist(waitlistTarget.dataset.waitlist);
    return;
  }

  if (removeTarget) {
    removeFromCart(removeTarget.dataset.remove);
    return;
  }

  if (logoutTarget) {
    state.user = null;
    state.page = "auth";
    state.authMode = "signin";
    saveState();
    render();
  }
});

app.addEventListener("submit", (event) => {
  if (event.target.id === "authForm") {
    event.preventDefault();
    loginFromForm(event.target);
  }

  if (event.target.id === "checkoutForm") {
    event.preventDefault();
    placeOrder(event.target);
  }

  if (event.target.id === "securityForm") {
    event.preventDefault();
    const data = new FormData(event.target);
    state.user.password = data.get("newPassword") || state.user.password;
    state.settings.passwordChanged = true;
    saveState();
    render();
  }

  if (event.target.id === "addressForm") {
    event.preventDefault();
    const data = new FormData(event.target);
    state.savedAddresses.push({
      id: `addr-${Date.now()}`,
      label: data.get("addressLabel") || "Address",
      address: data.get("address") || "",
    });
    saveState();
    render();
  }
});

document.addEventListener("keydown", (event) => {
  const tag = event.target.tagName;
  const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tag) || event.target.isContentEditable;
  if (!isTyping && event.key.toLowerCase() === "r") {
    event.preventDefault();
    resetAppData();
  }
});

render();
