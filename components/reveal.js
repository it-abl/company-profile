
const io = new IntersectionObserver(es => es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
}),{threshold:.2});
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));
