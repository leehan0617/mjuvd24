// (헤더고정을 위해)현재 스크롤바의 위치를 저장하는 변수 (px)
var currentScrollTop = 0;

//헤더고정
window.onload = function() {
    // 새로고침 했을 경우를 대비한 메소드 실행
    scrollController();

    //스크롤을 하는 경우에만 실행됨
    $(window).on('scroll', function() {
        scrollController();
    });
}

$(function(){
    //google map 실행
    googleMapInit();

    // illust slider
    $('.secondSlideList').hide();
    $('.thirdSlideList').hide();
    $('#illustFirstPointer').removeClass('slideDotOff');
    $('#illustFirstPointer').addClass('slideDotOn');
    //branding slider
    $('.brandingSecondSlideList').hide();
    $('.brandingThirdSlideList').hide();
    $('#brandingFirstPointer').removeClass('slideDotOff');
    $('#brandingFirstPointer').addClass('slideDotOn');

    /* soft scroll */
    $('a[href^="#"]').on('click',function (e) {
        //e.preventDefault();
        var id = $(this).attr('href');
        var offset = 100;
        var target = $(id).offset().top - offset;

        var target = $(id).offset().top - offset;
            $('html, body').animate({scrollTop:target}, 500);
           // event.preventDefault();
    });

    // illust slider
    var bxSlider = $('.bxSlider').bxSlider({
        mode : 'fade',
        captions : true,
        auto : true,
        pagerCustom: '#bx-pager',
        //임의로 없애기위해서 셀럭터이름 무작이로 지음
        nextSelector: '#dd',
        prevSelector: '#ss',
        onSlideNext : function($slideElement, oldIndex, newIndex){
            // console.log(oldIndex , newIndex);
            if(newIndex == '8'){
                $('.secondSlideList').show();
                $('.firstSlideList').hide();
                $('.thirdSlideList').hide();

                $('#illustSecondPointer').removeClass('slideDotOff');
                $('#illustSecondPointer').addClass('slideDotOn');

                $('#illustFirstPointer').removeClass('slideDotOn');
                $('#illustFirstPointer').addClass('slideDotOff');

                $('#illustThirdPointer').removeClass('slideDotOn');
                $('#illustThirdPointer').addClass('slideDotOff');
            }else if(newIndex == '16'){
                $('.thirdSlideList').show();
                $('.firstSlideList').hide();
                $('.secondSlideList').hide();

                $('#illustThirdPointer').removeClass('slideDotOff');
                $('#illustThirdPointer').addClass('slideDotOn');

                $('#illustSecondPointer').removeClass('slideDotOn');
                $('#illustSecondPointer').addClass('slideDotOff');

                $('#illustFirstPointer').removeClass('slideDotOn');
                $('#illustFirstPointer').addClass('slideDotOff');
            }else if(newIndex == '0'){
                $('.firstSlideList').show();
                $('.secondSlideList').hide();
                $('.thirdSlideList').hide();

                $('#illustFirstPointer').removeClass('slideDotOff');
                $('#illustFirstPointer').addClass('slideDotOn');

                $('#illustSecondPointer').removeClass('slideDotOn');
                $('#illustSecondPointer').addClass('slideDotOff');

                $('#illustThirdPointer').removeClass('slideDotOn');
                $('#illustThirdPointer').addClass('slideDotOff');
            }
        }
    });

    $('#illustFirstPointer').click(function(){
        bxSlider.stopAuto();
        bxSlider.goToSlide(0);
        bxSlider.startAuto();

        // var idx = bxSlider.getCurrentSlide()
        $('.firstSlideList').show();
        $('.secondSlideList').hide();
        $('.thirdSlideList').hide();

        $('#illustFirstPointer').removeClass('slideDotOff');
        $('#illustFirstPointer').addClass('slideDotOn');

        $('#illustSecondPointer').removeClass('slideDotOn');
        $('#illustSecondPointer').addClass('slideDotOff');

        $('#illustThirdPointer').removeClass('slideDotOn');
        $('#illustThirdPointer').addClass('slideDotOff');
    });

    $('#illustSecondPointer').click(function(){
      bxSlider.stopAuto();
      bxSlider.goToSlide(8);
      bxSlider.startAuto();

      $('.secondSlideList').show();
      $('.firstSlideList').hide();
      $('.thirdSlideList').hide();

      $('#illustSecondPointer').removeClass('slideDotOff');
      $('#illustSecondPointer').addClass('slideDotOn');

      $('#illustFirstPointer').removeClass('slideDotOn');
      $('#illustFirstPointer').addClass('slideDotOff');

      $('#illustThirdPointer').removeClass('slideDotOn');
      $('#illustThirdPointer').addClass('slideDotOff');
    });

    $('#illustThirdPointer').click(function(){
      bxSlider.stopAuto();
      bxSlider.goToSlide(16);
      bxSlider.startAuto();

      $('.thirdSlideList').show();
      $('.firstSlideList').hide();
      $('.secondSlideList').hide();

      $('#illustThirdPointer').removeClass('slideDotOff');
      $('#illustThirdPointer').addClass('slideDotOn');

      $('#illustSecondPointer').removeClass('slideDotOn');
      $('#illustSecondPointer').addClass('slideDotOff');

      $('#illustFirstPointer').removeClass('slideDotOn');
      $('#illustFirstPointer').addClass('slideDotOff');
    });

    // branding slider
    var bxSlider2 = $('.bxSlider2').bxSlider({
        mode : 'fade',
        captions : true,
        auto : true,
        pagerCustom: '#bx-pager2',
        nextSelector: '#ddd',
        prevSelector: '#sss',
        onSlideNext : function($slideElement, oldIndex, newIndex){
            // console.log(oldIndex , newIndex);
            if(newIndex == '8'){
                $('.brandingSecondSlideList').show();
                $('.brandingFirstSlideList').hide();
                $('.brandingThirdSlideList').hide();

                $('#brandingSecondPointer').removeClass('slideDotOff');
                $('#brandingSecondPointer').addClass('slideDotOn');

                $('#brandingFirstPointer').removeClass('slideDotOn');
                $('#brandingFirstPointer').addClass('slideDotOff');

                $('#brandingThirdPointer').removeClass('slideDotOn');
                $('#brandingThirdPointer').addClass('slideDotOff');
            }else if(newIndex == '16'){
                $('.brandingThirdSlideList').show();
                $('.brandingFirstSlideList').hide();
                $('.brandingSecondSlideList').hide();

                $('#brandingThirdPointer').removeClass('slideDotOff');
                $('#brandingThirdPointer').addClass('slideDotOn');

                $('#brandingSecondPointer').removeClass('slideDotOn');
                $('#brandingSecondPointer').addClass('slideDotOff');

                $('#brandingFirstPointer').removeClass('slideDotOn');
                $('#brandingFirstPointer').addClass('slideDotOff');
            }else if(newIndex == '0'){
                $('.brandingFirstSlideList').show();
                $('.brandingSecondSlideList').hide();
                $('.brandingThirdSlideList').hide();

                $('#brandingFirstPointer').removeClass('slideDotOff');
                $('#brandingFirstPointer').addClass('slideDotOn');

                $('#brandingSecondPointer').removeClass('slideDotOn');
                $('#brandingSecondPointer').addClass('slideDotOff');

                $('#brandingThirdPointer').removeClass('slideDotOn');
                $('#brandingThirdPointer').addClass('slideDotOff');
            }
        }
    });

    $('#brandingFirstPointer').click(function(){
      bxSlider2.stopAuto();
      bxSlider2.goToSlide(0);
      bxSlider2.startAuto();

      $('.brandingFirstSlideList').show();
      $('.brandingSecondSlideList').hide();
      $('.brandingThirdSlideList').hide();

      $('#brandingFirstPointer').removeClass('slideDotOff');
      $('#brandingFirstPointer').addClass('slideDotOn');

      $('#brandingSecondPointer').removeClass('slideDotOn');
      $('#brandingSecondPointer').addClass('slideDotOff');

      $('#brandingThirdPointer').removeClass('slideDotOn');
      $('#brandingThirdPointer').addClass('slideDotOff');
    });

    $('#brandingSecondPointer').click(function(){
      bxSlider2.stopAuto();
      bxSlider2.goToSlide(8);
      bxSlider2.startAuto();

      $('.brandingSecondSlideList').show();
      $('.brandingFirstSlideList').hide();
      $('.brandingThirdSlideList').hide();

      $('#brandingSecondPointer').removeClass('slideDotOff');
      $('#brandingSecondPointer').addClass('slideDotOn');

      $('#brandingFirstPointer').removeClass('slideDotOn');
      $('#brandingFirstPointer').addClass('slideDotOff');

      $('#brandingThirdPointer').removeClass('slideDotOn');
      $('#brandingThirdPointer').addClass('slideDotOff');
    });

    $('#brandingThirdPointer').click(function(){
      bxSlider2.stopAuto();
      bxSlider2.goToSlide(16);
      bxSlider2.startAuto();

      $('.brandingThirdSlideList').show();
      $('.brandingFirstSlideList').hide();
      $('.brandingSecondSlideList').hide();

      $('#brandingThirdPointer').removeClass('slideDotOff');
      $('#brandingThirdPointer').addClass('slideDotOn');

      $('#brandingSecondPointer').removeClass('slideDotOn');
      $('#brandingSecondPointer').addClass('slideDotOff');

      $('#brandingFirstPointer').removeClass('slideDotOn');
      $('#brandingFirstPointer').addClass('slideDotOff');
    });

    //editorial slider
    var bxSlider3 = $('.bxSlider3').bxSlider({
        mode : 'fade',
        captions : true,
        auto : true,
        pagerCustom: '#bx-pager3'
    });

    //ux slider
    var bxSlider4 = $('.bxSlider4').bxSlider({
        mode : 'fade',
        captions : true,
        auto : true,
        pagerCustom: '#bx-pager4'
    });

    $(document).on('click' , '.bx-next, .bx-prev, #bx-pager' , function(){
          bxSlider.stopAuto();
          bxSlider.startAuto();
    });

    $(document).on('click' , '.bx-next, .bx-prev, #bx-pager2' , function(){
          bxSlider2.stopAuto();
          bxSlider2.startAuto();
    });

    $(document).on('click' , '.bx-next, .bx-prev, #bx-pager3' , function(){
          bxSlider3.stopAuto();
          bxSlider3.startAuto();
    });

    $(document).on('click' , '.bx-next, .bx-prev, #bx-pager4' , function(){
          bxSlider4.stopAuto();
          bxSlider4.startAuto();
    });
});

//헤더고정 구현 함수
function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop < 685) {
        $('#videoSection').css('top', - (currentScrollTop));
        $('#navWrap').css('top', 685- (currentScrollTop));
    } else {
        $('#navWrap').css('top', 0);
    }
    //height 별 글자색깔 변화하는 기능
    //about 부분
    if(currentScrollTop < 1000){
        $('#headerAbout').addClass('changeHeaderColor');
        $('#headerPortfolio').removeClass('changeHeaderColor');
        $('#headerDirection').removeClass('changeHeaderColor');
    //portfolio 부분
    }else if(currentScrollTop < 3564){
        $('#headerAbout').removeClass('changeHeaderColor');
        $('#headerPortfolio').addClass('changeHeaderColor');
        $('#headerDirection').removeClass('changeHeaderColor');
    //Direction 부분
    }else{
        $('#headerAbout').removeClass('changeHeaderColor');
        $('#headerPortfolio').removeClass('changeHeaderColor');
        $('#headerDirection').addClass('changeHeaderColor');
    }
}
//구글 지도
function googleMapInit(){
    var x_point = 37.576530;
    var y_point = 127.001514;

    var zoomLevel = 18;

    var markerTitle = '명지대 시각디자인';
    var markerMaxWidth = 300;

    var contentString = '<div>명지대학교<br/>시각디자인학과 졸업전시회</div>';

    var myLatlng = new google.maps.LatLng(x_point, y_point);
    var mapOptions = {
        zoom: zoomLevel,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: markerTitle
    });

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}$('#illustSecondPointer').addClass('slideDotOff');
