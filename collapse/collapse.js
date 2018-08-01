$(document).ready(() =>{

	$(".collapseButton").click(function(){
		$(".collapseButton").not(this).next().hide("5000");
		$(this).next().toggle("5000");
	})

})