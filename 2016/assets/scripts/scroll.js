$(document).on("scroll", function() {
	
  var pixels = $(document).scrollTop()

  $("div").css("left", -0.5 * pixels)

})