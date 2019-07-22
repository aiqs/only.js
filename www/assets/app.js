var firstUrl = "http://www.palon.id/app/",
	urlService = firstUrl + "services/apps.php",
	urlContent = firstUrl + "contents/",
    hasLogin_1st = (localStorage.getItem("id_user") != undefined);
    
$.getScript(urlContent+"main.js");
function run_first(){
    var height = $(window).outerHeight(), height2 = height - 150;
    $("#main-loading").height(height).removeClass("hide");
    $("html").css("overflow-y", "hidden");
    $("#frame-start").height(height2).find(".display-container").height(height2);
    $("#splash-screen img.block").height(height);
}
run_first();
$("#splash-screen").on("init", function(event, slick){$("#main-loading").addClass("hide");$("#splash-screen").removeClass("hide");})
.on("afterChange",function(slide,index,cur){if(cur == 3)$("#splash-screen").slick("slickPause");});

$(document).ready(function(){
    if(!hasLogin_1st){
        $("#splash-screen").slick({
            dots: true,
            arrows: false,
            autoplay:true,
            autoplaySpeed:2400,
            speed:500,
            infinite:false
        });
        $("#splash-screen").append("<div class='dot-round center'></div>");
        $("#splash-screen .slick-dots").appendTo("#splash-screen .dot-round");
    }
});