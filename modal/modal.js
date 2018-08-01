$(document).ready(() =>{

	$(".modalButton").click(() =>{
		$(".modal").slideDown("fast");
	})

	$(".closeButton").click(() =>{
		$(".modal").hide();
	})

	$("#exitButton").click(() =>{
		$(".closeButton").trigger("click")
	})

	$(".modal").click(function(e){
		if(e.target.className == "modal"){
			$(".modal").hide();
		}
	})
})