$(function () {
    console.log("ハンバーガー");
    // ハンバーガー
    $(".nav-toogle").on("click",function () {
        $(".nav-toggle, .nav").toggleClass("show");
    });
});