new WOW().init();


//----------FAQ切換-----------//
$('.tab-link>a').on('click',function(e){
    e.preventDefault()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    //^上方按鈕區塊的切換^//

    $($(this).attr('href')).addClass('active')
    $($(this).attr('href')).siblings().removeClass('active')
})//tab-link END

$('.question-content').on('click', function(){
    $(this).toggleClass('active')
    $(this).siblings().removeClass('active')

})//.question-content end


// 捲軸事件

// 定義捲軸高變數
let offsetTop
let product1Top = $('.section-1').offset().top 
$(window).scroll(function(){
    offsetTop = $(window).scrollTop()
    //console.log( '捲軸高', offsetTop )
    // console.log('product1',product1Top)
//    if( offsetTop >=  product1Top){
//         console.log('test')
//    }


    // 捲軸高度>=400，會出現page-top的按鈕
    if( offsetTop >= 400){
        $('.page-top').addClass('active')
    }else{
        $('.page-top').removeClass('active')
    }
})//scroll end

// 點按page-top回到最上方
$('.page-top').on('click', function(){
    $('html, body').animate({ scrollTop: 0 })
})//.page-top


//================
// 手機版 PC版 menu nav
//================
// 定義視窗寬度的變數
let windowWidth = $(window).width()

// 進網頁直接執行一次 判斷
if ( windowWidth >= 768 ){
    // 大於等於768執行
    // $('nav>ul>li').hover(function(){}, function(){})
    $('nav>ul>li').hover(function(){
        // 滑鼠滑入執行
        $(this).find('.submenu').addClass('active')
    }, function(){
        // 滑鼠滑出執行
        $(this).find('.submenu').removeClass('active')

    })
}else{
    // 小於768執行
    $('#btn-nav-switch').on('click', function(){
        $('nav').toggleClass('active')
    })// btn-nav-switch end
    
    $('nav>ul>li').on('click',function(){
        $(this).find('.submenu').toggleClass('active')
    })// nav>ul>li end
}// windowWidth>=768 end

// 每一次縮放視窗的時候執行
$(window).resize(function(){
    gsapAnimate()
    console.log( $(window).width() )
    // widthWidth 在每次縮放視窗寬度時，換上當前的視窗寬度的數值
    windowWidth = $(window).width()
    if ( windowWidth >= 768 ){
        // 大於等於768執行
        // $('nav>ul>li').hover(function(){}, function(){})
        $('nav>ul>li').hover(function(){
            // 滑鼠滑入執行
            $(this).find('.submenu').addClass('active')
        }, function(){
            // 滑鼠滑出執行
            $(this).find('.submenu').removeClass('active')
    
        })
    }else{
        // 小於768執行
        $('#btn-nav-switch').on('click', function(){
            $('nav').toggleClass('active')
        })// btn-nav-switch end
        
        $('nav>ul>li').on('click',function(){
            $(this).find('.submenu').toggleClass('active')
        })// nav>ul>li end
    }// windowWidth>=768 end
})// window resize end



//-----商品頁小圖換大圖-------//
$('.thumbnails>img').on('click', function(e){
    $('.main-img>img').attr('src',$(this).attr('src'))
    //大圖的src屬性路徑與點擊的縮圖的src屬性路徑交換//

    $('#product-description').text( $(this).attr('alt') )
    // html():包含標籤  text():純文字 val():表單值

    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})//thumbnails>img end
