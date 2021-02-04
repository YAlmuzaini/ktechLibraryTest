$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})


$('#myTest').on('shown.bs.collapse', function (e) {
    var parent = document.getElementById("bologna-list");
    $(parent).removeClass('nav-tabs card-header-tab').addClass('navbar-nav mr-auto pl-3');
}).on('hidden.bs.collapse', function (e) {
   $(parent).addClass('nav-tabs card-header-tabs').removeClass('navbar-nav mr-auto pl-3');
})

$('.nav-tabs>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});