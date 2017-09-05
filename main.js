$("document").ready(function () {

	//TARGETTING TAGS

	// $("p:first").css("border", "4px solid #ff8000");
	// $("p:last").css("border", "4px solid #ff8000");
	// $("p:even").css("border", "4px solid #ff8000");
	// $("p:odd").css("border", "4px solid #ff8000");
	// $("div p").css("border", "4px solid #ff8000");
	// $("li:first").css("border", "4px solid #ff8000");



	//TARGETTING CLASSES AND IDs

	// $("[class]").css("border", "4px solid #ff8000");
	// $("[id]").css("border", "4px solid #ff8000");
	// $("p[class]").css("border", "4px solid #ff8000");
	// $("p[id]").css("border", "4px solid #ff8000");
	// $(".puppy").css("border", "4px solid #ff8000");
	// $("p[class=kitten]").css("border", "4px solid #ff8000");
	// $("p[id=black-kitten]").css("border", "4px solid #ff8000");
	// $("p[id^=whi]").css("border", "4px solid #ff8000");
	// $("p[id^=whit]").css("border", "4px solid #ff8000");


	//GENERATIONAL THING

	//select immediate children of the parent, in this case all the h3 tags in a div class lesson
	// $("div.lesson > h3").css("border", "4px solid #ff8000");

	//Works for IDs too. select immediate children of the parent, in this case all the h3 tags in a div ID main-container
	// $("div#main-container > h3").css("border", "4px solid #ff8000");

	//Select all next siblings after a previous element
	// $("#black-van ~ p").css("border", "4px solid #ff8000");

	//Select the next specified element (in following case 'p') if it is preceeded by a specific element (in this case "ul").
	// $("ul + p").css("border", "4px solid #ff8000");


	// $(".lesson p").css("border", "3px solid #ff8000");
	// $(".lesson li").css("border", "3px solid #ff8000");
	// $(".lesson li:first").css("border", "3px solid #ff8000");
	// $(".lesson li:last").css("border", "3px solid #ff8000");
	// $(".lesson li:gt(1)").css("border", "3px solid #ff8000");


	//$("#example p:last").css("border", "3px solid #ff8000");
	//$("#example p:even").css("border", "3px solid #ff8000");
	//$("#example p:odd").css("border", "3px solid #ff8000");
	//$("#example .a:first").css("border", "3px solid #ff8000");
	//$("#example .b:even").css("border", "3px solid #ff8000");
	//$("#example p:gt(1)").css("border","3px solid #ff8000");
	//$("#example p:not(p:eq(2))").css("border", "3px solid #ff8000");


});
