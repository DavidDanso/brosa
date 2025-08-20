// Add scroll animations
function animateOnScroll() {
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
}
// Add hover effects for feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Category button interactions
document.querySelectorAll(".category-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".category-button").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button
    this.classList.add("active");

    // Get category data
    const category = this.getAttribute("data-category");
    console.log(`Selected category: ${category}`);

    // Add click animation
    this.style.transform = "scale(0.95) translateY(-2px)";
    setTimeout(() => {
      this.style.transform = "translateY(-2px)";
    }, 150);

    // You can add category-specific functionality here
    handleCategorySelection(category);
  });
});

function handleCategorySelection(category) {
  // Add your category-specific logic here
  // For example, show different content based on selected category
  const categoryMessages = {
    bakeries: "Perfect for bakeries! Manage bread orders and pickup times.",
    butchers: "Ideal for butcher shops! Handle meat orders efficiently.",
    sandwiches: "Great for sandwich shops! Streamline lunch orders.",
    "fries-shops": "Perfect for fries shops! Quick and easy ordering.",
    "fast-food": "Ideal for fast food! Speed up your order process.",
    "e-commerce": "Perfect for online stores! Manage all your products.",
    restaurants: "Great for restaurants! Handle dine-in and takeout orders.",
  };

  // You could show a message or update content based on selection
  // console.log(categoryMessages[category]);
}

function openWhatsApp() {
  // Add WhatsApp contact functionality
  const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hi! I'm interested in OrderLemon for my business.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Add click animation
  const button = document.querySelector(".whatsapp-button");
  button.style.transform = "scale(0.9)";

  setTimeout(() => {
    button.style.transform = "scale(1.1)";
    window.open(whatsappUrl, "_blank");
  }, 150);

  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 300);
}

// Add floating animation to WhatsApp button
document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.querySelector(".whatsapp-button");

  setInterval(() => {
    whatsappBtn.style.transform = "translateY(-3px) scale(1)";
    setTimeout(() => {
      whatsappBtn.style.transform = "translateY(0) scale(1)";
    }, 1000);
  }, 3000);
});

// Add ripple effect to category buttons
document.querySelectorAll(".category-button").forEach((button) => {
  button.addEventListener("mousedown", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
