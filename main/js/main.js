  // 현재 스크롤바의 위치를 저장하는 변수 (px)
var currentScrollTop = 0;
     
// 비동기식 jQuery이므로 window load 후 jQuery를 실행해야 함
window.onload = function() {
    // 새로고침 했을 경우를 대비한 메소드 실행
    scrollController();
     
    // 스크롤을 하는 경우에만 실행됨
    $(window).on('scroll', function() {
        scrollController();
    });
}

var illustIndex = -1;   
var illustMaxIndex = 7;
var brandingIndex = -1;
var brandingMaxIndex = 7;
var editIndex = -1;
var editMaxIndex = 7;
var uxSlideIndex = -1;
var uxSlideMaxIndex = 7;

$(function(){
    /* soft scroll */
    $('a[href^="#"]').on('click',function (e) {
        //e.preventDefault();
        var id = $(this).attr('href');
        var offset = 200;
        var target = $(id).offset().top - offset;

        var target = $(id).offset().top - offset;
            $('html, body').animate({scrollTop:target}, 500);
           // event.preventDefault();
    });

    /* illust slider*/
    var illustSlider = $('#illustSlider');
    var illustSliderLength = illustSlider.children().length;

    $('#illustThumbnailList').children().click(function(){
        $('#illustThumbnailList').children('img').removeClass('on');
        clickIndex = $(this).addClass('on').index();

        //마지막 사진 처리
        if(clickIndex == illustMaxIndex) clickIndex = -1;

        doIllustSlider(illustSlider , illustSliderLength , clickIndex);
        illustIndex = clickIndex;
    });

    /* end illust slider*/

    /* branding slider*/
    var brandingSlider = $('#brandingSlider');
    var brandingSliderLength = brandingSlider.children().length;

    doBrandingSlider(brandingSlider , brandingSliderLength , 2);
    $('#brandingThumbnailList').children().click(function(){
        $('#brandingThumbnailList').children('img').removeClass('on');

        clickIndex = $(this).addClass('on').index();
        doBrandingSlider(brandingSlider , brandingSliderLength , clickIndex);
    });
    /* end branding slider*/

    /* edit slider*/
    var editSlider = $('#editSlider');
    var editSliderLength = editSlider.children().length;

    doEditSlider(editSlider , editSliderLength , 3);
    $('#editThumbnailList').children().click(function(){
        $('#editThumbnailList').children('img').removeClass('on');

        clickIndex = $(this).addClass('on').index();
        doEditSlider(editSlider , editSliderLength , clickIndex);
    });
    /* end edit slider*/

    /* ux slider */
    var uxSlider = $('#uxSlider');
    var uxSliderLength = uxSlider.children().length;

    doUxSlider(uxSlider , uxSliderLength , 0);
    $('#uxThumbnailList').children().click(function(){
        $('#uxThumbnailList').children('img').removeClass('on');

        clickIndex = $(this).addClass('on').index();
        doUxSlider(uxSlider , uxSliderLength , clickIndex);
    });
    /* end ux slider */

    //auto slide
    setInterval(function(){
       $('#illustThumbnailList').children('img').removeClass('on');
        illustIndex ++;
        doIllustSlider(illustSlider , illustSliderLength , illustIndex); 
        if(illustIndex == illustMaxIndex) illustIndex = -1;
    },3000);

    //google map
    googleMapInit();
});

// 이미지 슬라이드 실행 함수
function doIllustSlider(illustSlider , illustSliderLength , clickIndex){
    illustSlider.find('on').removeClass('on');
    illustSlider.find('li').not('#illustSlider>ul>li:eq('+clickIndex+')').fadeOut(300);
    illustSlider.find("li").eq(clickIndex).fadeIn(300,function () {
      $(this).addClass("on");
      $('#illustThumbnailList>img:eq('+ clickIndex +')').addClass('on');
    });

}

function doBrandingSlider(brandingSlider , brandingSliderLength , clickIndex){
    brandingSlider.find('on').removeClass('on');
    brandingSlider.find('li').not('#brandingSlider>ul>li:eq('+clickIndex+')').fadeOut(300);
    brandingSlider.find("li").eq(clickIndex).fadeIn(300,function () {
      $(this).addClass("on");
    });
}

function doEditSlider(editSlider , uxSliderLength , clickIndex){
    editSlider.find('on').removeClass('on');
    editSlider.find('li').not('#editSlider>ul>li:eq('+clickIndex+')').fadeOut(300);
    editSlider.find("li").eq(clickIndex).fadeIn(300,function () {
      $(this).addClass("on");
    });
}

function doUxSlider(uxSlider , uxSliderLength , clickIndex){
    uxSlider.find('on').removeClass('on');
    uxSlider.find('li').not('#uxSlider>ul>li:eq('+clickIndex+')').fadeOut(300);
    uxSlider.find("li").eq(clickIndex).fadeIn(300,function () {
      $(this).addClass("on");
    });
} 
// end 이미지 슬라이드 실행 함수

// 메인 메뉴의 위치를 제어하는 함수
function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop < 685) {
        $('#mjVideo').css('top', -(currentScrollTop));
        $('#mjMenubar').css('top', 685-(currentScrollTop));
        if ($('#mjMenubar').hasClass('fixed')) {
            $('#mjMenubar').removeClass('fixed');
            $('#mjMenubar .menu-icon').removeClass('on');
        }
    } else {
        if (!$('#mjMenubar').hasClass('fixed')) {
            $('#mjVideo').css('top', -685);
            $('#mjMenubar').css('top', 0);
            $('#mjMenubar').addClass('fixed');
            $('#mjMenubar').addClass('on');
        }
    }

    //about 부분
    if(currentScrollTop < 1546){
        $('#headerAbout').addClass('menuRadio');
        $('#headerPortfolio').removeClass('menuRadio');
        $('#headerDirection').removeClass('menuRadio');
    //portfolio 부분
    }else if(currentScrollTop < 4313){
        $('#headerAbout').removeClass('menuRadio');
        $('#headerPortfolio').addClass('menuRadio');
        $('#headerDirection').removeClass('menuRadio');
    //Direction 부분
    }else{
        $('#headerAbout').removeClass('menuRadio');
        $('#headerPortfolio').removeClass('menuRadio');
        $('#headerDirection').addClass('menuRadio');
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
            var map = new google.maps.Map(document.getElementById('mjDirection'), mapOptions);

            var marker = new google.maps.Marker({
                                                    position: myLatlng,
                                                    map: map,
                                                    title: markerTitle
            });

            var infowindow = new google.maps.InfoWindow(
                                                        {
                                                            content: contentString,
                                                            maxWidth: markerMaxWidth
                                                        }
            );

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
}