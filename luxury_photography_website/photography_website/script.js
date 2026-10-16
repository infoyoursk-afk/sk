// Before publishing, replace this with your real enquiry email address.
const STUDIO_EMAIL = "your-email@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("enquiry-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Photography enquiry — ${form.get("event")}`);
  const body = encodeURIComponent(
    `Name: ${form.get("name")}\nContact: ${form.get("contact")}\nEvent: ${form.get("event")}\n\nPlans:\n${form.get("message") || "(Not provided)"}`
  );
  if (!STUDIO_EMAIL || STUDIO_EMAIL === "your-email@example.com") {
    alert("Website demo: please add your real email address in script.js (STUDIO_EMAIL) before using the enquiry form.");
    return;
  }
  window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`;
});
