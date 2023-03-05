$( document ).ready(function() {
    $('.single_page_navigation').click(function(){
        $('.single_page_navigation').removeClass('active_navigation');
        $(this).addClass('active_navigation');
    })
    if ($(window).width() > 991) {
        $('.main_navigation_search_hold').removeAttr('style');
    }
    $(".menu_burger").click(function () {
        if ($(".main_navigation_search_hold").is(":hidden")) {
          $(".main_navigation_search_hold").slideDown("slow");
        } else {
          $(".main_navigation_search_hold").slideUp("slow");
        }
      })
    $('.modal_window').removeClass('hidden')
    $('.contact_form').submit(function(e) {
        e.preventDefault();
    });
})
$( window ).resize(function() {
    if ($(window).width() > 992) {
        $('.main_navigation_search_hold').css('display' , 'flex');
    }
  });

  function closeModal(){
    $('.modal_window').addClass('hidden')
  }

  function sendRequest(){
    alert('Request sent !')
    $('.modal_window').addClass('hidden')
  }