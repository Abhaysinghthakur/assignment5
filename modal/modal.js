$(document).ready(() =>{

	$(".modalButton").click(() =>{
		$(".modal").slideDown("fast");
	})

	$(".closeButton").click(() =>{
		$(".modal").hide("5000");
	})

	$("#exitButton").click(() =>{
		$(".closeButton").trigger("click")
	})

	$(".modal").click(function(e){
		if(e.target.className == "modal"){
			$(".modal").hide0("5000");
		}
	})
})