$(document).ready(function () {
  $(".group img").click(transition)
  // $("#UNDEFINED").click(transition_back);
  $("button.close").click(transition_back)
});

function transition(){
  var src=$(this).attr("src");
  $(".display_img img").attr("src", src);
  $(".display_img").show();
  console.log(src)
  $(".group").addClass("galleria-strip");
  $(".group").removeClass("galleria");
}

function transition_back(){
$(".display_img").hide();
// $("")
$(".group").addClass("galleria");
$(".group").removeClass("galleria-strip");
}

function hide_display(){
  $(".display_img").hide();
}
