$(document).ready(function() {
    // Handler for mobile menu burger
    $(".mobile-navigation-burger").click(function() {
        $(this).find("a").toggleClass("active");
        $(this).closest(".mobile-menu").find(".mobile-navigation").toggleClass("active");
    });

    // Handler for mobile menu
    $(".mobile-navigation a").click(function() {
        $(this).closest(".mobile-navigation").removeClass("active");
        $(".mobile-navigation-burger a").toggleClass("active");
    });

    // Handler for tabs
    $(".tab-header").click(function() {
        //console.log("Test");
        //
        $(this).closest(".tab-header-container").find(".tab-header").removeClass("default");
        $(this).closest(".tab-header-container").find(".tab-header").removeClass("active");
        $(this).closest(".tab-header").addClass("active");
        //
        $(this).closest(".wrapper").find(".tab-content").removeClass("default");
        $(this).closest(".wrapper").find(".tab-content").removeClass("active");
    });
    //
    //
    $("#tab-header-1").click(function() {
        $("#tab-content-1").addClass("active");
    });
    //
    $("#tab-header-2").click(function() {
        $("#tab-content-2").addClass("active");
    });
    //
    $("#tab-header-3").click(function() {
        $("#tab-content-3").addClass("active");
    });
    //
    $("#tab-header-4").click(function() {
        $("#tab-content-4").addClass("active");
    });
    //
    $("#tab-header-5").click(function() {
        $("#tab-content-5").addClass("active");
    });

    // Handler for video play button
    // Play
    $(".play-video-button").click(function() {
        $(this).closest("section").find("#section-1-static").toggleClass("hidden");
        $(this).closest("section").find("#section-1-video").toggleClass("hidden");
    });
    // Close
    $(".close-video-button").click(function() {
        $(this).closest("section").find("#section-1-static").toggleClass("hidden");
        $(this).closest("section").find("#section-1-video").toggleClass("hidden");
    });
});

// Handler for side menu
// Function for checking if section is in view
function isInView(elem) {
    var OffsetTop = $(elem).offset().top;
    var ScrollTop = $(window).scrollTop();
    var ElemHeight = $(elem).height();
    var IsInView = false;

    if ((ScrollTop >= OffsetTop) && ((OffsetTop + ElemHeight - 1) - ScrollTop >= 0)) {
        IsInView = true;
    }

    return IsInView;
}
// Scroll position observer
$(window).scroll(function() {
    // Default handler
    if (
        (!isInView($("#section-1"))) ||
        (!isInView($("#section-2"))) ||
        (!isInView($("#section-3"))) ||
        (!isInView($("#section-4")))
    ) {
        $(".side-navigation li a").removeClass("default");
        $(".side-navigation li a").removeClass("active");
    }
    // Handler for section 1
    if (isInView($("#section-1"))) {
        $("#side-nav-section-1").addClass("active");
    }
    // Handler for section 2
    if (isInView($("#section-2"))) {
        $("#side-nav-section-2").addClass("active");
    }
    // Handler for section 3
    if (isInView($("#section-3"))) {
        $("#side-nav-section-3").addClass("active");
    }
    // Handler for section 4
    if (isInView($("#section-4"))) {
        $("#side-nav-section-4").addClass("active");
    }
    // Handler for section 1
    if (isInView($("#section-5"))) {
        $("#side-nav-section-5").addClass("active");
    }
})