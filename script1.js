$(document).ready(function () {
  $('#btnUmum').click(function () {
    $('#el').toggle(1000);
  });

  $('#hapus').click(function (e) {
    // $(e).parent().remove();
    $('#hapus').parent().remove();
  });
});
