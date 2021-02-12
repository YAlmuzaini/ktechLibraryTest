$(function () {
    var hash = window.location.hash;
    hash && $('#bologna-list a[href="' + hash + '"]').tab('show');

    $('#bologna-list a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
        var scrollmem = $('body').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);
    });
});


$('#myTest').on('shown.bs.collapse', function (e) {
    e.preventDefault()
    var parent = document.getElementById("bologna-list");
    $(parent).removeClass('nav-tabs card-header-tab').addClass('navbar-nav mr-auto pl-3');
}).on('hidden.bs.collapse', function (e) {
    e.preventDefault()
    $(parent).addClass('nav-tabs card-header-tabs').removeClass('navbar-nav mr-auto pl-3');
})

$('.nav-tabs>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});