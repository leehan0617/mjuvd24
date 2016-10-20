$(function() {
    $('#accordian1').find('img').click(function() {
        $(this).parent().find('img').not(this).next().slideUp();
        $(this).next().slideToggle(300);

        var src = '';

        if ($('#accordian1Img').attr('src') === '../../commonImg/accordian_bx1.png') {
            src = '../../commonImg/accordian_bx2.png';
        } else if ($('#accordian1Img').attr('src') === '../../commonImg/accordian_bx2.png') {
            src = '../../commonImg/accordian_bx1.png';
        }else if($('#accordian1Img').attr('src') === '../../commonImg/accordian_illust1.png'){
          src = '../../commonImg/accordian_illust2.png';
        }else if($('#accordian1Img').attr('src') === '../../commonImg/accordian_illust2.png'){
          src = '../../commonImg/accordian_illust1.png';
        }else if($('#accordian1Img').attr('src') === '../../commonImg/accordian_edit1.png'){
          src = '../../commonImg/accordian_edit2.png';
        }else if($('#accordian1Img').attr('src') === '../../commonImg/accordian_edit2.png'){
          src = '../../commonImg/accordian_edit1.png';
        }else if($('#accordian1Img').attr('src') === '../../commonImg/accordian_ux1.png'){
          src = '../../commonImg/accordian_ux2.png';
        }else if($('#accordian1Img').attr('src') === '../../commonImg/accordian_ux2.png'){
          src = '../../commonImg/accordian_ux1.png';
        }

        $('#accordian1Img').attr('src', src);
    });

    $('#accordian2').find('img').click(function() {
        $(this).parent().find('img').not(this).next().slideUp();
        $(this).next().slideToggle(300);
        var src = ($('#accordian2Img').attr('src') === '../../commonImg/accordian_member1.png') ?
            '../../commonImg/accordian_member2.png' :
            '../../commonImg/accordian_member1.png';
        $('#accordian2Img').attr('src', src);
    });
});
