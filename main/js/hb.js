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
        onSlideAfter : function($slideElement , oldIndex , newIndex){
            /*console.log('test');
            console.log($slideElement);
            console.log(oldIndex);
            console.log(newIndex)
            ;*/
            if(newIndex == '7'){
                $('#bx-pager').children().remove();
                $('#bx-pager').append('<a data-slide-index="8" href=""><img src="img/img01.jpg" style="width:130px; height:130px;"/></a>');
                $('#bx-pager').append('<a data-slide-index="9" href=""><img src="img/img02.jpg" style="width:130px; height:130px;"/></a>');
                $('#bx-pager').append('<a data-slide-index="10" href=""><img src="img/img03.jpg" style="width:130px; height:130px;"/></a>');
                $('#bx-pager').append('<a data-slide-index="11" href=""><img src="img/img04.jpg" style="width:130px; height:130px;"/></a>');
                $('#bx-pager').append('<a data-slide-index="12" href=""><img src="img/img01.jpg" style="width:130px; height:130px;"/></a>');
                $('#bx-pager').append('<br/>');
                $('#bx-pager').append('<a data-slide-index="13" href=""><img src="img/img02.jpg" style="width:130px; height:130px;"/></a>');
                $('#bx-pager').append('<a data-slide-index="14" href=""><img src="img/img03.jpg" style="width:130px; height:130px;"/></a>');
                $('#bx-pager').append('<a data-slide-index="15" href=""><img src="img/img04.jpg" style="width:130px; height:130px;"/></a>');
            }
        }
    });

    // branding slider
    var bxSlider2 = $('.bxSlider2').bxSlider({
        mode : 'fade',
        captions : true,
        auto : true,
        pagerCustom: '#bx-pager2'
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
}