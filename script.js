// JavaScript Document
	$(document).ready(function(){
      $(".carousel").slick({
		  dots: true,
		  arrows: true,
  		  infinite: true,
		  autoplay: true,
  		  autoplaySpeed: 2000
      });
		  $(".new").click(function(){
			$("#you_may").hide();
			 $("#best_seller").hide();
			 $("#new_arrivals").show();
			  $(".new").css("background-color","white");
			  $(".best").css("background-color","#dddddd");
			  $(".you").css("background-color","#dddddd");
			  
		  });
		  $(".best").click(function(){
			$("#you_may").hide();
			 $("#best_seller").show();
			 $("#new_arrivals").hide();
			  $(".best").css("background-color","white");
			  $(".new").css("background-color","#dddddd");
			  $(".you").css("background-color","#dddddd");
		  });
			$(".you").click(function(){
			$("#you_may").show();
			 $("#best_seller").hide();
			 $("#new_arrivals").hide();
			$(".you").css("background-color","white");
			$(".best").css("background-color","#dddddd");
			$(".new").css("background-color","#dddddd");
		   });
    });

//scroll
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

	
