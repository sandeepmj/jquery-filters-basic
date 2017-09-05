$("document").ready(function () {

	//TARGETTING TAGS

	// $("p:first").css("border", "4px solid red");
	// $("p:last").css("border", "4px solid red");
	// $("p:even").css("border", "4px solid red");
	// $("p:odd").css("border", "4px solid red");
	// $("div p").css("border", "4px solid red");
	// $("li:first").css("border", "4px solid red");



	//TARGETTING CLASSES AND IDs
	// $("p[class]").css("border", "4px solid red");
	// $("p[class=kitten]").css("border", "4px solid red");
	// $("p[id=black-kitten]").css("border", "4px solid red");
	$("p[id^=black]").css("border", "4px solid red");

	// $(".lesson p").css("border", "3px solid red");
	// $(".lesson li").css("border", "3px solid red");
	// $(".lesson li:first").css("border", "3px solid red");
	// $(".lesson li:last").css("border", "3px solid red");
	// $(".lesson li:gt(1)").css("border", "3px solid red");


	//$("#example p:last").css("border", "3px solid red");
	//$("#example p:even").css("border", "3px solid red");
	//$("#example p:odd").css("border", "3px solid red");
	//$("#example .a:first").css("border", "3px solid red");
	//$("#example .b:even").css("border", "3px solid red");
	//$("#example p:gt(1)").css("border","3px solid red");
	//$("#example p:not(p:eq(2))").css("border", "3px solid red");


});
