$(function(){
    //google map 실행
    googleMapInit();

    /* soft scroll */
    $('a[href^="#"]').on('click',function (e) {
        //e.preventDefault();
        var id = $(this).attr('href');
        var offset = 10;
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
        pagerCustom: '#bx-pager'
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
})

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