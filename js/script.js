// Mobile menu toggle
document.getElementById("menu-btn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("open");
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("open");
  });
});

// Scroll animation for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".section-fade-in").forEach((section) => {
  observer.observe(section);
});

// Welcome popup
window.addEventListener("load", function () {
  const popup = document.getElementById("welcome-popup");
  const submitBtn = document.getElementById("welcome-submit");
  const input = document.getElementById("visitor-name");
  const welcomeText = document.getElementById("welcome-text");

  // Tampilkan popup saat load halaman
  popup.classList.remove("hidden");

  submitBtn.addEventListener("click", function () {
    const name = input.value.trim();
    if (name) {
      welcomeText.textContent = `Welcome to my portfolio, ${name}! 👋`;
      popup.classList.add("hidden");
    } else {
      alert("Please enter your name!");
    }
  });
});

// Handle "Message Us" form submit
document.getElementById('message-form').addEventListener('submit', function(e) {
  e.preventDefault(); // cegah reload halaman

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Regex untuk hanya huruf dan spasi
  const nameRegex = /^[A-Za-z\s]+$/;

  // Validasi
  if (!name || !email || !message) {
    alert("⚠️ Semua field wajib diisi!");
    return;
  }

  if (!nameRegex.test(name)) {
    alert("⚠️ Nama hanya boleh huruf dan spasi (tidak boleh angka/simbol).");
    return;
  }

  // Jika lolos validasi → tampilkan popup data
  alert(
    `✅ Terima kasih sudah mengisi form!\n\n` +
    `Nama   : ${name}\n` +
    `Email  : ${email}\n` +
    `Subject  : ${subject}\n` +
    `Pesan  : ${message}`
  );

  // Reset form setelah submit
  this.reset();
});


