$(document).ready(function () {
  $(".galleria-strip img").click(transition)
  // $("#UNDEFINED").click(transition_back);

});

function transition(){
  var src=$(this).attr("src");
  $(".display_img img").attr("src", src);
  console.log(src)
  $(".galleria").addClass("galleria-strip");
  $(".galleria").removeClass("galleria");
}

function transition_back(){
$(".galleria-strip").addClass("galleria");
$(".galleria-strip").removeClass("galleria-strip");
}
