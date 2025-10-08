$(document).ready(function () {
  const year = new Date().getFullYear() - 1996;
  $("#year").text(year);

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $(document).on("shown.bs.tooltip", function (e) {
    setTimeout(function () {
      $(e.target).tooltip("hide");
    }, 500);
  });
});

new ClipboardJS(".clip");
