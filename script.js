$(document).ready(function () {
    $("#stream1_btn").on("click", function () {
        $(".stream1").removeClass("highlight_stream");
        $(".stream2").removeClass("highlight_stream");
        $(".stream3").removeClass("highlight_stream");
        $(".stream1").addClass("highlight_stream");
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass("highlight_stream");
        $(".stream2").removeClass("highlight_stream");
        $(".stream3").removeClass("highlight_stream");
        $(".stream2").addClass("highlight_stream");
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass("highlight_stream");
        $(".stream2").removeClass("highlight_stream");
        $(".stream3").removeClass("highlight_stream");
        $(".stream3").addClass("highlight_stream");
    });
    $("p").click(function () {
        $("p").css("color", "red");
    });
    $("h2").hover(function () {
        $("h2").css("background-color", "lightblue");
    });
    $(".card-panel").mouseenter(function () {
        $("body").css("background-color", "black");
    });
    $(".card-panel").mouseleave(function () {
        $("body").css("background-color", "#e1e2e2");
    });
    $("#card-panel").click(function () {
        $(".card-panel").hide("slow");
    });
    $("#card-panel-4").click(function () {
        $("#card-panel-4").hide(3000);
    });
    $("#button-card-1").click(function () {
        $("#par-1").toggle("slow");
    });
    $("#button-card-1").mouseenter(function () {
        $("#par-1").fadeTo(200, 0.5);
    });
    $("button").hover(function () {
        $("button").mouseenter.removeClass(".make-red").addClass("make-border");
    });
    $("button").mouseenter(function () {
        $(this).removeClass("make-red").addClass("make-border");
    });

    $(".module-nav").on("click", function () {
        let allModulesCardsSelector = ".card";
        let thisModuleCardsSelector = "." + this.id + "-card";
        $(allModulesCardsSelector).removeClass("card-highlight");
        $(thisModuleCardsSelector).addClass("card-highlight");
    });
    $("button").click(function () {
        $(this).next().slideToggle("slow");
    });

    $("#card-btn-1").click(function () {
        $("#card p").first().addClass("red");
    });
});
