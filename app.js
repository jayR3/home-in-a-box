const PRICES = [
  { id: "two", label: "2 servings", price: 5000, note: "For two people" },
  { id: "four", label: "4 servings", price: 12000, note: "Small group pack" },
  { id: "family", label: "Family size", price: 22000, note: "Serves 6-7 people" },
];

const IMAGE_CREDITS = [
  {
    name: "Egusi soup an igbo delicacy",
    author: "Bibisuccess",
    url: "https://commons.wikimedia.org/wiki/File:Egusi_soup_an_igbo_delicacy.jpg",
  },
  {
    name: "Ogbono soup with assorted meats",
    author: "Bukky658",
    url: "https://commons.wikimedia.org/wiki/File:Ogbono_soup_with_assorted_meats.jpg",
  },
  {
    name: "Okra soup with stew",
    author: "Mohammed9ja",
    url: "https://commons.wikimedia.org/wiki/File:Okra_soup_with_stew.jpg",
  },
  {
    name: "Local bush meat pepper soup",
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
    description: "A rich melon-seed soup kit with vegetables, pepper blend, spices, and a protein pack.",
    highlights: ["Melon seed base", "Best with beef or fish", "Survey favorite"],
    ingredients: [
      "Ground egusi",
      "Washed ugu or spinach",
      "Palm oil sachet",
      "Pepper and onion blend",
      "Crayfish and seasoning mix",
      "Protein pack: beef, fish, or assorted option",
      "Simple cooking guide",
    ],
    steps: [
      "Add the pepper blend and palm oil to a pot and simmer for 3 minutes.",
      "Stir in the egusi base and a small amount of water or stock.",
      "Add the protein pack and seasoning mix, then simmer until thick.",
      "Fold in the vegetables and cook for another 2-3 minutes.",
      "Serve with rice, swallow, yam, or plantain.",
    ],
  },
  {
    id: "ogbono",
    name: "Ogbono Soup Kit",
    shortName: "Ogbono",
    status: "Available",
    accent: "#4f8f52",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ogbono_soup_with_assorted_meats.jpg",
    description: "A draw-soup kit built around ground ogbono, leafy greens, spices, and quick-cook protein.",
    highlights: ["Draw texture", "Assorted protein option", "Quick weekday soup"],
    ingredients: [
      "Ground ogbono",
      "Washed leafy greens",
      "Palm oil sachet",
      "Pepper and onion blend",
      "Crayfish and seasoning mix",
      "Protein pack: beef, fish, or assorted option",
      "Simple cooking guide",
    ],
    steps: [
      "Warm the palm oil gently and stir in the ogbono base.",
      "Add water or stock in small amounts while stirring to build the draw texture.",
      "Add the protein pack, pepper blend, and seasoning mix.",
      "Simmer for 5-7 minutes, then add the leafy greens.",
      "Taste, adjust water if needed, and serve hot.",
    ],
  },
  {
    id: "okro",
    name: "Okro Soup Kit",
    shortName: "Okro",
    status: "Available",
    accent: "#2f9f84",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Okra_soup_with_stew.jpg",
    description: "A fresh okro kit with pre-cut okro, pepper blend, vegetables, and a ready protein option.",
    highlights: ["Fresh chopped okro", "Light and fast", "Good for lunch"],
    ingredients: [
      "Fresh chopped okro",
      "Washed leafy vegetables",
      "Pepper and onion blend",
      "Crayfish and seasoning mix",
      "Palm oil or light oil sachet",
      "Protein pack: beef, fish, or assorted option",
      "Simple cooking guide",
    ],
    steps: [
      "Bring a small amount of water or stock to a gentle boil.",
      "Add the pepper blend, seasoning mix, and protein pack.",
      "Stir in the chopped okro and cook briefly to keep it fresh.",
      "Add vegetables and oil, then simmer for 2-3 minutes.",
      "Serve immediately for the best texture.",
    ],
  },
  {
    id: "pepper-soup",
    name: "Pepper Soup Kit",
    shortName: "Pepper Soup",
    status: "Pipeline",
    inPipeline: true,
    accent: "#c9472b",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Local_bush_meat_pepper_soup.jpg",
    description: "A spicy pepper soup kit planned for launch after protein handling and shelf-life testing.",
    highlights: ["Coming later", "Spice-led", "Waitlist open"],
    ingredients: [
      "Pepper soup spice blend",
      "Scent leaf",
      "Pepper and onion blend",
      "Ginger and garlic mix",
      "Protein pack option",
      "Simple cooking guide",
    ],
    steps: [
      "This kit is in the product pipeline.",
      "Recipe testing, protein handling, and packaging validation will happen before launch.",
      "Customers can join the waitlist from this prototype.",
    ],
  },
];

const subscriptions = [
  {
    id: "starter",
    name: "Starter Duo",
    price: 19000,
    cadence: "Monthly",
    description: "Four 2-serving boxes per month for students or light weekly cooking.",
    includes: ["4 soup kits", "Mix any available soup", "Home or campus delivery"],
  },
  {
    id: "workweek",
    name: "Workweek Classic",
    price: 36000,
    cadence: "Monthly",
    description: "Eight 2-serving boxes for busy professionals who cook twice a week.",
    includes: ["8 soup kits", "Priority office delivery", "Change soups monthly"],
  },
  {
    id: "family",
    name: "Family Table",
    price: 82000,
    cadence: "Monthly",
    description: "Four family-size packs for households that want weekend soup planning handled.",
    includes: ["4 family packs", "Serves 6-7 people per pack", "Protein choice per delivery"],
  },
  {
    id: "office",
    name: "Office Pantry",
    price: 90000,
    cadence: "Monthly",
    description: "A workplace plan for teams that want ready-to-cook meal kits delivered to the office.",
    includes: ["20 mixed 2-serving boxes", "Office drop-off", "Monthly usage report"],
    office: true,
  },
];

const DEFAULT_METRICS = {
  totalOrders: 2,
  totalSpent: 41000,
  activeSubscription: "Workweek Classic",
  favoriteSoup: "Egusi",
  nextDelivery: "Friday office drop-off",
  officeDeliveries: 1,
};

const DEFAULT_ORDERS = [
  {
    id: "HIB-2401",
    date: "May 02, 2026",
    title: "Egusi Soup Kit",
    subtitle: "2 servings kit",
    channel: "Home delivery",
    status: "Completed",
    amount: 5000,
    balance: 5000,
  },
  {
    id: "HIB-2402",
    date: "May 04, 2026",
    title: "Workweek Classic Subscription",
    subtitle: "Monthly plan",
    channel: "Office delivery",
    status: "In progress",
    amount: 36000,
    balance: 41000,
  },
];

function defaultState() {
  return {
    page: "auth",
    authMode: "signup",
    user: null,
    selectedMealId: null,
    selectedSizeId: "two",
    cart: [],
    metrics: { ...DEFAULT_METRICS },
    orders: DEFAULT_ORDERS.map((order) => ({ ...order })),
    orderFilter: "All",
    settings: {
      twoFactor: false,
      passwordChanged: false,
      subscriptionCancelled: false,
    },
    orderPlaced: false,
    waitlistJoined: false,
    lastOrder: null,
  };
}

const state = defaultState();

const app = document.querySelector("#app");

function resetPrototype() {
  Object.assign(state, defaultState());
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function orderStatusOptions() {
  return ["All", "In progress", "Completed", "Cancelled"];
}

function filteredOrders() {
  if (state.orderFilter === "All") return state.orders;
  return state.orders.filter((order) => order.status === state.orderFilter);
}

function nextOrderId() {
  return `HIB-${2400 + state.orders.length + 1}`;
}

function money(value) {
  return `N${value.toLocaleString("en-NG")}`;
}

function getMeal(id) {
  return meals.find((meal) => meal.id === id);
}

function getSize(id) {
  return PRICES.find((size) => size.id === id);
}

function getPlan(id) {
  return subscriptions.find((plan) => plan.id === id);
}

function go(page, payload = {}) {
  state.page = page;
  if (page !== "checkout") state.orderPlaced = false;
  if (payload.mealId) {
    state.selectedMealId = payload.mealId;
    state.selectedSizeId = "two";
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function loginFromForm(form) {
  const data = new FormData(form);
  const email = data.get("email") || "customer@hib.com";
  const fallbackName = email.split("@")[0].replace(/[._-]+/g, " ");
  state.user = {
    name: data.get("name") || fallbackName || "Client User",
    email,
    phone: data.get("phone") || "0800 000 0000",
    country: data.get("country") || "Nigeria",
    password: data.get("password") || "demo-password",
  };
  state.page = "home";
  render();
}

function addMealToCart(mealId, sizeId) {
  const meal = getMeal(mealId);
  const size = getSize(sizeId);
  if (!meal || !size || meal.inPipeline) return;

  state.cart.push({
    id: `meal-${meal.id}-${size.id}-${Date.now()}`,
    type: "meal",
    title: meal.name,
    subtitle: `${size.label} kit`,
    mealId: meal.id,
    price: size.price,
  });
  go("cart");
}

function addPlanToCart(planId) {
  const plan = getPlan(planId);
  if (!plan) return;

  state.cart.push({
    id: `plan-${plan.id}-${Date.now()}`,
    type: "subscription",
    title: `${plan.name} Subscription`,
    subtitle: `${plan.cadence} plan`,
    planId: plan.id,
    price: plan.price,
  });
  go("cart");
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter((item) => item.id !== itemId);
  render();
}

function cartTotal(items = state.cart) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function placeOrder(form) {
  const data = new FormData(form);
  const items = [...state.cart];
  const deliveryType = data.get("deliveryType") || "home";
  const total = cartTotal(items);
  const subscriptionItem = items.find((item) => item.type === "subscription");
  const mealItem = items.find((item) => item.mealId);

  state.metrics.totalOrders += 1;
  state.metrics.totalSpent += total;
  state.metrics.nextDelivery = deliveryType === "office" ? "Next office drop-off: Friday" : "Next home delivery: Friday";
  if (deliveryType === "office") state.metrics.officeDeliveries += 1;
  if (subscriptionItem) {
    state.metrics.activeSubscription = subscriptionItem.title.replace(" Subscription", "");
    state.settings.subscriptionCancelled = false;
  }
  if (mealItem) state.metrics.favoriteSoup = getMeal(mealItem.mealId).shortName;

  const newBalance = state.orders.reduce((sum, order) => sum + order.amount, 0) + total;
  state.orders.unshift({
    id: nextOrderId(),
    date: "May 06, 2026",
    title: items.length === 1 ? items[0].title : `${items.length} items checkout`,
    subtitle: items.map((item) => item.subtitle).join(" + "),
    channel: deliveryType === "office" ? "Office delivery" : "Home delivery",
    status: "In progress",
    amount: total,
    balance: newBalance,
  });

  state.lastOrder = {
    items,
    total,
    deliveryType,
    deliveryLabel: deliveryType === "office" ? "Office delivery" : "Home delivery",
    location: deliveryType === "office" ? data.get("officeAddress") : data.get("location"),
  };

  state.cart = [];
  state.orderPlaced = true;
  render();
}

function joinWaitlist(mealId) {
  state.waitlistJoined = true;
  state.selectedMealId = mealId;
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
        <span>Ready-to-cook soup kit</span>
        <div class="pack-dots" aria-hidden="true">
          <i></i><i></i><i></i><i></i>
        </div>
      </div>
    </button>
  `;
}

function layout(content) {
  if (state.page === "auth") return content;
  const count = state.cart.length;
  const userName = state.user ? state.user.name.split(" ")[0] : "Guest";

  return `
    <div class="app-shell">
      <header class="topbar">
        <button class="brand" data-go="home" aria-label="Go to customer dashboard">
          <span class="brand-mark">HIB</span>
          <span class="brand-copy">
            <span>Home in a Box</span>
            <small>hib.com preview</small>
          </span>
        </button>
        <nav class="nav-actions" aria-label="Primary navigation">
          <button class="nav-button ${state.page === "home" ? "active" : ""}" data-go="home">Home</button>
          <button class="nav-button ${state.page === "meals" ? "active" : ""}" data-go="meals">Meals</button>
          <button class="nav-button ${state.page === "subscriptions" ? "active" : ""}" data-go="subscriptions">Subscriptions</button>
          <button class="nav-button ${state.page === "settings" ? "active" : ""}" data-go="settings">Settings</button>
          <button class="nav-button ${state.page === "cart" ? "active" : ""}" data-go="cart">
            Cart <span class="cart-count">${count}</span>
          </button>
          <button class="nav-button" data-logout>Hi, ${userName}</button>
        </nav>
      </header>
      <main class="page">${content}</main>
      ${creditsFooter()}
    </div>
  `;
}

function authPage() {
  const isSignup = state.authMode === "signup";
  return `
    <main class="auth-page">
      <section class="auth-visual">
        <p class="eyebrow">Ready-to-cook Nigerian soup kits</p>
        <h1>Cook local soup faster without losing the home-cooked feel.</h1>
        <p class="lead">
          Home in a Box helps students, busy professionals, offices, and families order pre-cut ingredients,
          protein options, and simple cooking instructions for Nigerian soups.
        </p>
        <div class="auth-preview-grid">
          ${meals.slice(0, 3).map((meal) => `
            <button class="mini-food" data-auth-preview="${meal.id}">
              <img src="${meal.image}" alt="${meal.name}" />
              <span>${meal.shortName}</span>
            </button>
          `).join("")}
        </div>
      </section>
      <section class="auth-card" aria-label="${isSignup ? "Sign up" : "Sign in"} form">
        <div class="auth-tabs">
          <button class="${isSignup ? "active" : ""}" data-auth-mode="signup">Sign Up</button>
          <button class="${!isSignup ? "active" : ""}" data-auth-mode="signin">Sign In</button>
        </div>
        <h2>${isSignup ? "Create your HIB account" : "Welcome back"}</h2>
        <p>${isSignup ? "Enter customer details before viewing the product experience." : "Sign in with email and password to return to the customer dashboard."}</p>
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
            <div class="field">
              <label for="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" placeholder="0800 000 0000" required />
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
          <button class="primary-button" type="submit">${isSignup ? "Create Account" : "Log In"}</button>
        </form>
      </section>
    </main>
  `;
}

function homePage() {
  const firstName = state.user ? state.user.name.split(" ")[0] : "there";
  return layout(`
    <section class="dashboard-hero">
      <div>
        <p class="eyebrow">Customer dashboard</p>
        <h1>Welcome back, ${firstName}</h1>
        <p class="lead">
          Track your soup-kit orders, subscription status, delivery preference, and next cooking plan from one place.
        </p>
        <div class="button-row">
          <button class="primary-button" data-go="meals">Browse Meals</button>
          <button class="secondary-button" data-go="subscriptions">View Subscriptions</button>
        </div>
      </div>
      <div class="dashboard-showcase">
        ${foodVisual(meals[0])}
      </div>
    </section>

    <section class="metric-grid" aria-label="Customer metrics">
      ${metricCard("Total orders", state.metrics.totalOrders)}
      ${metricCard("Total spent", money(state.metrics.totalSpent))}
      ${metricCard("Active subscription", state.metrics.activeSubscription)}
      ${metricCard("Favorite soup", state.metrics.favoriteSoup)}
      ${metricCard("Next delivery", state.metrics.nextDelivery)}
      ${metricCard("Office deliveries", state.metrics.officeDeliveries)}
    </section>

    ${orderDetailsSection()}

    <section class="home-block">
      <div class="section-head">
        <div>
          <p class="eyebrow">Recommended meals</p>
          <h2>Start with the launch menu</h2>
        </div>
        <p>Each card combines the cooked result with a designed package mockup so clients can see both the promise and the product format.</p>
      </div>
      <div class="meal-grid featured">
        ${meals.slice(0, 3).map(mealCard).join("")}
      </div>
    </section>

    <section class="home-block graphic-band">
      <div>
        <p class="eyebrow">How it works</p>
        <h2>From kit to pot in a few steps</h2>
      </div>
      <div class="process-grid">
        ${processStep("1", "Choose a soup", "Select Egusi, Ogbono, Okro, or join Pepper Soup waitlist.")}
        ${processStep("2", "Pick pack size", "Choose 2 servings, 4 servings, or family size for 6-7 people.")}
        ${processStep("3", "Cook fast", "Use the pre-cut ingredients and simple steps to finish dinner quickly.")}
      </div>
    </section>
  `);
}

function orderDetailsSection() {
  const orders = filteredOrders();
  const closingBalance = orders.reduce((sum, order) => sum + order.amount, 0);
  return `
    <section class="home-block order-statement">
      <div class="section-head compact">
        <div>
          <p class="eyebrow">Order details</p>
          <h2>Activity Statement</h2>
        </div>
        <div class="filter-row" aria-label="Order status filters">
          ${orderStatusOptions().map((status) => `
            <button class="${state.orderFilter === status ? "active" : ""}" data-order-filter="${status}">${status}</button>
          `).join("")}
        </div>
      </div>
      <div class="statement-table-wrap">
        <table class="statement-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Reference</th>
              <th>Order</th>
              <th>Channel</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Running total</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map((order) => `
              <tr>
                <td>${order.date}</td>
                <td>${order.id}</td>
                <td><strong>${order.title}</strong><span>${order.subtitle}</span></td>
                <td>${order.channel}</td>
                <td><span class="statement-status ${order.status.toLowerCase().replace(" ", "-")}">${order.status}</span></td>
                <td>${money(order.amount)}</td>
                <td>${money(order.balance)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="statement-summary">
        <span>${orders.length} record${orders.length === 1 ? "" : "s"} shown</span>
        <strong>Filtered total: ${money(closingBalance)}</strong>
      </div>
    </section>
  `;
}

function metricCard(label, value) {
  return `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function processStep(number, title, text) {
  return `
    <button class="process-card" data-go="meals">
      <span>${number}</span>
      <strong>${title}</strong>
      <p>${text}</p>
    </button>
  `;
}

function mealsPage() {
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Choose your soup</p>
          <h2>Meal Selection</h2>
        </div>
        <p>Each available kit can be ordered as a 2-serving pack, 4-serving pack, or family pack for 6-7 people.</p>
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
        <div class="highlight-row">
          ${meal.highlights.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="price-list" aria-label="${meal.name} prices">
          ${PRICES.map((price) => `
            <div class="price-row">
              <span>${price.label}</span>
              <strong>${money(price.price)}</strong>
            </div>
          `).join("")}
        </div>
      </div>
      <button class="${meal.inPipeline ? "secondary-button" : "primary-button"}" data-detail="${meal.id}">
        ${meal.inPipeline ? "View Pipeline Details" : "View Details"}
      </button>
    </article>
  `;
}

function detailPage() {
  const meal = getMeal(state.selectedMealId) || meals[0];
  const selectedSize = getSize(state.selectedSizeId);
  const actionButton = meal.inPipeline
    ? `<button class="primary-button" data-waitlist="${meal.id}">${state.waitlistJoined ? "Waitlist Joined" : "Join Launch Waitlist"}</button>`
    : `<button class="primary-button" data-add="${meal.id}">Add to Cart - ${money(selectedSize.price)}</button>`;

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
            <span>Cook-time target: 15 minutes</span>
            <span>${meal.status}</span>
            <span>Sizes: 2, 4, family</span>
          </div>
          <div class="serving-picker">
            <h3>Choose serving size</h3>
            <div class="size-options">
              ${PRICES.map((size) => `
                <button class="size-card ${state.selectedSizeId === size.id ? "selected" : ""}" data-size="${size.id}">
                  <strong>${size.label}</strong>
                  <span>${money(size.price)} - ${size.note}</span>
                </button>
              `).join("")}
            </div>
          </div>
          ${actionButton}
          ${meal.inPipeline && state.waitlistJoined ? `<div class="success-box">You are on the Pepper Soup launch waitlist.</div>` : ""}
        </div>
        <div class="info-columns">
          <div class="list-panel">
            <h3>Ingredients</h3>
            <ul class="clean-list">
              ${meal.ingredients.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="list-panel">
            <h3>Cooking steps</h3>
            <ol class="step-list">
              ${meal.steps.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </div>
        </div>
      </div>
    </section>
  `);
}

function subscriptionsPage() {
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Subscription models</p>
          <h2>Subscribe for routine cooking</h2>
        </div>
        <p>Subscriptions turn the product from an occasional box into a weekly habit for students, professionals, families, and offices.</p>
      </div>
      <div class="subscriptions-grid">
        ${subscriptions.map(planCard).join("")}
      </div>
    </section>
  `);
}

function planCard(plan) {
  return `
    <article class="plan-card ${plan.office ? "office-plan" : ""}">
      <div>
        <span class="status-pill">${plan.cadence}</span>
        <h3>${plan.name}</h3>
        <p>${plan.description}</p>
      </div>
      <strong class="plan-price">${money(plan.price)}</strong>
      <ul class="clean-list">
        ${plan.includes.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button class="primary-button" data-plan="${plan.id}">Subscribe</button>
    </article>
  `;
}

function settingsPage() {
  const hasSubscription = state.metrics.activeSubscription !== "None yet";
  const subscriptionState = state.settings.subscriptionCancelled ? "Cancellation scheduled" : "Active";
  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Account settings</p>
          <h2>Security and Plan Controls</h2>
        </div>
        <p>Manage account security, delivery preferences, and subscription status from one place.</p>
      </div>
      <div class="settings-grid">
        <article class="settings-card">
          <h3>Profile</h3>
          <div class="settings-list">
            <div><span>Name</span><strong>${state.user.name}</strong></div>
            <div><span>Email</span><strong>${state.user.email}</strong></div>
            <div><span>Phone</span><strong>${state.user.phone}</strong></div>
            <div><span>Country</span><strong>${state.user.country}</strong></div>
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
            ${state.settings.passwordChanged ? `<div class="success-box">Password updated for this prototype session.</div>` : ""}
          </form>
        </article>

        <article class="settings-card">
          <h3>Two-factor authentication</h3>
          <p>Add an extra verification step before account access.</p>
          <div class="toggle-row">
            <span>${state.settings.twoFactor ? "2FA is active" : "2FA is off"}</span>
            <button class="secondary-button" data-toggle-2fa>${state.settings.twoFactor ? "Turn Off" : "Activate 2FA"}</button>
          </div>
        </article>

        <article class="settings-card plan-management">
          <h3>Subscription management</h3>
          <div class="settings-list">
            <div><span>Current plan</span><strong>${state.metrics.activeSubscription}</strong></div>
            <div><span>Status</span><strong>${subscriptionState}</strong></div>
          </div>
          <details>
            <summary>Plan options</summary>
            <p>Use this section when a customer needs to pause, downgrade, or end a plan.</p>
            <div class="button-row">
              <button class="secondary-button" data-go="subscriptions">Change Plan</button>
              <button class="quiet-danger-button" data-cancel-subscription ${hasSubscription && !state.settings.subscriptionCancelled ? "" : "disabled"}>Cancel Subscription</button>
            </div>
          </details>
        </article>

        <article class="settings-card reset-card">
          <h3>Prototype reset</h3>
          <p>Press <strong>R</strong> anywhere outside a form field to reset the demo back to the first sign-up screen.</p>
          <button class="secondary-button" data-reset-demo>Reset Demo</button>
        </article>
      </div>
    </section>
  `);
}

function cartPage() {
  const total = cartTotal();
  const cartContent = state.cart.length
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
          <h3>Order Summary</h3>
          <div class="summary-row"><span>Items</span><strong>${state.cart.length}</strong></div>
          <div class="summary-row total"><span>Total</span><strong>${money(total)}</strong></div>
          <button class="primary-button" data-go="checkout">Checkout</button>
          <button class="secondary-button" data-go="meals">Add More Meals</button>
        </aside>
      </div>
    `
    : `
      <div class="empty-state">
        <h3>Your cart is empty</h3>
        <p>Browse meal kits or add a subscription plan to begin.</p>
        <div class="button-row">
          <button class="primary-button" data-go="meals">Browse Meals</button>
          <button class="secondary-button" data-go="subscriptions">View Subscriptions</button>
        </div>
      </div>
    `;

  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Cart</p>
          <h2>Your Soup Kit Order</h2>
        </div>
      </div>
      ${cartContent}
    </section>
  `);
}

function checkoutPage() {
  if (state.orderPlaced && state.lastOrder) {
    return layout(`
      <section class="checkout-layout">
        <div class="checkout-panel">
          <p class="eyebrow">Order placed</p>
          <h2>Thanks, ${state.user.name.split(" ")[0]}</h2>
          <p>Your prototype order has been recorded and your dashboard metrics have been updated.</p>
          <div class="success-box">
            ${state.lastOrder.deliveryLabel} selected. Delivery location: ${state.lastOrder.location || "Not specified"}.
          </div>
          <div class="button-row">
            <button class="primary-button" data-go="home">Back to Dashboard</button>
            <button class="secondary-button" data-go="meals">Order Again</button>
          </div>
        </div>
        <aside class="checkout-panel">
          <h3>Final Summary</h3>
          ${orderItems(state.lastOrder.items)}
          <div class="summary-row total"><span>Total</span><strong>${money(state.lastOrder.total)}</strong></div>
        </aside>
      </section>
    `);
  }

  if (!state.cart.length) {
    return layout(`
      <section class="empty-state">
        <h2>No items to checkout</h2>
        <p>Add a soup kit or subscription before placing an order.</p>
        <button class="primary-button" data-go="meals">Browse Meals</button>
      </section>
    `);
  }

  return layout(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Checkout</p>
          <h2>Delivery Details</h2>
        </div>
      </div>
      <div class="checkout-layout">
        <form class="checkout-panel form-grid" id="checkoutForm">
          <div class="delivery-choice">
            <label>
              <input type="radio" name="deliveryType" value="home" checked />
              <span>Home delivery</span>
            </label>
            <label>
              <input type="radio" name="deliveryType" value="office" />
              <span>Office delivery</span>
            </label>
          </div>
          <div class="field">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" value="${state.user.name}" required />
          </div>
          <div class="field">
            <label for="location">Home location</label>
            <input id="location" name="location" type="text" placeholder="E.g. Yaba, Lagos" />
          </div>
          <div class="field office-field">
            <label for="officeName">Office / company name</label>
            <input id="officeName" name="officeName" type="text" placeholder="E.g. Sterling Towers" />
          </div>
          <div class="field office-field">
            <label for="officeAddress">Office delivery address</label>
            <input id="officeAddress" name="officeAddress" type="text" placeholder="Street, building, floor" />
          </div>
          <div class="field">
            <label for="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" value="${state.user.phone}" required />
          </div>
          <button class="primary-button" type="submit">Place Order</button>
        </form>
        <aside class="checkout-panel">
          <h3>Order Summary</h3>
          ${orderItems(state.cart)}
          <div class="summary-row total"><span>Total</span><strong>${money(cartTotal())}</strong></div>
        </aside>
      </div>
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

function creditsFooter() {
  return `
    <footer class="site-footer">
      <span>Prototype image credits:</span>
      ${IMAGE_CREDITS.map((credit) => `
        <a href="${credit.url}" target="_blank" rel="noreferrer">${credit.name} by ${credit.author}</a>
      `).join("")}
    </footer>
  `;
}

function render() {
  const pages = {
    auth: authPage,
    home: homePage,
    meals: mealsPage,
    detail: detailPage,
    subscriptions: subscriptionsPage,
    settings: settingsPage,
    cart: cartPage,
    checkout: checkoutPage,
  };

  app.innerHTML = (pages[state.page] || authPage)();
}

app.addEventListener("click", (event) => {
  const authModeTarget = event.target.closest("[data-auth-mode]");
  const goTarget = event.target.closest("[data-go]");
  const detailTarget = event.target.closest("[data-detail]");
  const sizeTarget = event.target.closest("[data-size]");
  const addTarget = event.target.closest("[data-add]");
  const planTarget = event.target.closest("[data-plan]");
  const waitlistTarget = event.target.closest("[data-waitlist]");
  const removeTarget = event.target.closest("[data-remove]");
  const logoutTarget = event.target.closest("[data-logout]");
  const authPreviewTarget = event.target.closest("[data-auth-preview]");
  const orderFilterTarget = event.target.closest("[data-order-filter]");
  const toggleTwoFactorTarget = event.target.closest("[data-toggle-2fa]");
  const cancelSubscriptionTarget = event.target.closest("[data-cancel-subscription]");
  const resetTarget = event.target.closest("[data-reset-demo]");

  if (authModeTarget) {
    state.authMode = authModeTarget.dataset.authMode;
    render();
    return;
  }

  if (authPreviewTarget) {
    state.authMode = "signup";
    render();
    return;
  }

  if (orderFilterTarget) {
    state.orderFilter = orderFilterTarget.dataset.orderFilter;
    render();
    return;
  }

  if (toggleTwoFactorTarget) {
    state.settings.twoFactor = !state.settings.twoFactor;
    render();
    return;
  }

  if (cancelSubscriptionTarget) {
    state.settings.subscriptionCancelled = true;
    state.metrics.activeSubscription = "None yet";
    state.orders.unshift({
      id: nextOrderId(),
      date: "May 06, 2026",
      title: "Subscription cancellation",
      subtitle: "Plan access ends after current billing cycle",
      channel: "Account settings",
      status: "Cancelled",
      amount: 0,
      balance: state.orders.reduce((sum, order) => sum + order.amount, 0),
    });
    render();
    return;
  }

  if (resetTarget) {
    resetPrototype();
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
    render();
    return;
  }

  if (addTarget) {
    addMealToCart(addTarget.dataset.add, state.selectedSizeId);
    return;
  }

  if (planTarget) {
    addPlanToCart(planTarget.dataset.plan);
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
    render();
  }
});

document.addEventListener("keydown", (event) => {
  const tag = event.target.tagName;
  const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tag) || event.target.isContentEditable;
  if (!isTyping && event.key.toLowerCase() === "r") {
    event.preventDefault();
    resetPrototype();
  }
});

render();
