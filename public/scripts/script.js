$(document).ready(function () {
  $(".group img").click(transition)
  // $("#UNDEFINED").click(transition_back);
  $("button.close").click(transition_back)

// Creating hover for livestream
  $('#hoverstyle1').miniPreview({ prefetch: 'pageload' });
  $('#hoverstyle2').miniPreview({ prefetch: 'parenthover' });
  $('#hoverstyle3').miniPreview({ prefetch: 'none' });
// End hover of livestream
});

function transition(){
  var src=$(this).attr("src");
  $(".display_img img").attr("src", src);
  $(".display_img").removeClass("hidden");
  console.log(src)
  $(".group").addClass("galleria-strip");
  $(".group").removeClass("galleria");
  $(this).addClass("active")
}

function transition_back(){
$(".display_img").addClass("hidden");

// $("")
$(".group").addClass("galleria");
$(".group").removeClass("galleria-strip");
}

function hide_display(){
  $(".display_img").hide();
}

$(".display_img").on("swiperight", () => swipe("right"));
$(".display_img").on("swipeleft", () => swipe("left"));

function swipe(direction){
  if (direction=="right") {

  }
}
