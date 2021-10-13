const projArrow = document.querySelector("#projects");

projArrow.addEventListener("click", (e) => {
  if (e.target.classList.contains("projArrow")) {
    e.target.classList.add("d-none");
  }
});

// initialize tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
