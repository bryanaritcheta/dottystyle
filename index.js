$(document).ready(function() {
    // Handler for mobile menu burger
    $(".mobile-navigation-burger").click(function() {
        $(this).find("a").toggleClass("active");
        $(this).closest(".mobile-menu").find(".mobile-navigation").toggleClass("active");
    });
});