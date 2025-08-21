// Observer untuk animasi on-scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // Kalau cuma mau animasi sekali, uncomment baris ini:
      // observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // elemen muncul minimal 20% baru trigger
});

// Observe semua leader & member
document.querySelectorAll('.leader, .member').forEach(el => observer.observe(el));
