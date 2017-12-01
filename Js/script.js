$(document).ready(function () {
    //Slide 
    $("#prox").click(function () {
        $(".d1").addClass("d4");
        $(".d4").removeClass("d1");
        $(".d2").addClass("d1");
        $(".d1").removeClass("d2");
        $(".d3").addClass("d2");
        $(".d2").removeClass("d3");
        $(".d4").addClass("d3");
        $(".d3").removeClass("d4");
    });

    $("#prev").click(function () {
        $(".d3").addClass("d4");
        $(".d4").removeClass("d3");
        $(".d2").addClass("d3");
        $(".d3").removeClass("d2");
        $(".d1").addClass("d2");
        $(".d2").removeClass("d1");
        $(".d4").addClass("d1");
        $(".d1").removeClass("d4");
    });

    //header 
    $(".c1").click(function () {
        $("#header").addClass("header_C1");
        $("#header").removeClass("header_C2");
        $("#header").removeClass("header_C3");
        $("#header").removeClass("header_C4");
        $("#header").removeClass("header_C5");
        $("#header").removeClass("header_C6");
        $(".cimg1").addClass("cActive");
        $(".cimg2").removeClass("cActive");
        $(".cimg3").removeClass("cActive");
        $(".cimg4").removeClass("cActive");
        $(".cimg5").removeClass("cActive");
        $(".cimg6").removeClass("cActive");
    });

    $(".c2").click(function () {
        $("#header").addClass("header_C2");
        $("#header").removeClass("header_C1");
        $("#header").removeClass("header_C3");
        $("#header").removeClass("header_C4");
        $("#header").removeClass("header_C5");
        $("#header").removeClass("header_C6");
        $(".cimg2").addClass("cActive");
        $(".cimg1").removeClass("cActive");
        $(".cimg3").removeClass("cActive");
        $(".cimg4").removeClass("cActive");
        $(".cimg5").removeClass("cActive");
        $(".cimg6").removeClass("cActive");
    });

    $(".c3").click(function () {
        $("#header").addClass("header_C3");
        $("#header").removeClass("header_C2");
        $("#header").removeClass("header_C1");
        $("#header").removeClass("header_C4");
        $("#header").removeClass("header_C5");
        $("#header").removeClass("header_C6");
        $(".cimg3").addClass("cActive");
        $(".cimg2").removeClass("cActive");
        $(".cimg1").removeClass("cActive");
        $(".cimg4").removeClass("cActive");
        $(".cimg5").removeClass("cActive");
        $(".cimg6").removeClass("cActive");
    });

    $(".c4").click(function () {
        $("#header").addClass("header_C4");
        $("#header").removeClass("header_C2");
        $("#header").removeClass("header_C3");
        $("#header").removeClass("header_C1");
        $("#header").removeClass("header_C5");
        $("#header").removeClass("header_C6");
        $(".cimg4").addClass("cActive");
        $(".cimg2").removeClass("cActive");
        $(".cimg3").removeClass("cActive");
        $(".cimg1").removeClass("cActive");
        $(".cimg5").removeClass("cActive");
        $(".cimg6").removeClass("cActive");
    });

    $(".c5").click(function () {
        $("#header").addClass("header_C5");
        $("#header").removeClass("header_C2");
        $("#header").removeClass("header_C3");
        $("#header").removeClass("header_C4");
        $("#header").removeClass("header_C1");
        $("#header").removeClass("header_C6");
        $(".cimg5").addClass("cActive");
        $(".cimg2").removeClass("cActive");
        $(".cimg3").removeClass("cActive");
        $(".cimg4").removeClass("cActive");
        $(".cimg1").removeClass("cActive");
        $(".cimg6").removeClass("cActive");
    });

    $(".c6").click(function () {
        $("#header").addClass("header_C6");
        $("#header").removeClass("header_C2");
        $("#header").removeClass("header_C3");
        $("#header").removeClass("header_C4");
        $("#header").removeClass("header_C5");
        $("#header").removeClass("header_C1");
        $(".cimg6").addClass("cActive");
        $(".cimg2").removeClass("cActive");
        $(".cimg3").removeClass("cActive");
        $(".cimg4").removeClass("cActive");
        $(".cimg5").removeClass("cActive");
        $(".cimg1").removeClass("cActive");
    });
});
