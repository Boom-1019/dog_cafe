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




// 點按page-top回到最上方
$('.page-top').on('click', function(){
    $('html, body').animate({ scrollTop: 0 })
})//.page-top


// new WOW().init()




//----------//Banner輪播//---------//
//第2層最前面補上(複製)最後一張圖
$('.banner-child').prepend( $('.banner-child>img').last().clone() )
//第2層最前面補上(複製)第二張圖(其實是第一張)
$('.banner-child').append( $('.banner-child>img').eq(1).clone() )

// let currentLeftNum = 0 //左邊位移的距離(0/-??)
let currentNum = 1 //當前的數字
let parentWidth = $('.banner-parent').width() //父層寬
let imgLength = $('.banner-child>img').length//子層(圖片)個數
let childTotalWidth = parentWidth * imgLength//父層寬*子層個數


$('.banner-child').css({'margin-left': -parentWidth * currentNum})//調整第二層一開始位移的位置
$('.banner-child').width( childTotalWidth )//子層寬=父層寬*子層圖片個數(只讀一次)
$('.banner-child>img').width( parentWidth ) //子層圖片寬 = 父層寬

//蓋板loading
$(window).on('load',function(){
    $('.loading-overlay').addClass('active')
    parentWidth = $('.banner-parent').width()
    childTotalWidth = parentWidth * imgLength
    $('.banner-child').css({'margin-left': -parentWidth * currentNum})
    $('.banner-child').width( childTotalWidth )
    $('.banner-child>img').width( parentWidth )
})//window loading

// for 迴圈 從0到圖片總數-2 的條件下，i累加1
for (let i = 0; i < imgLength-3; i++){
    $('.indicator>li.active').after('<li></li>')
}

//縮放時的變化
$(window).resize(function(){
    parentWidth = $('.banner-parent').width()
    childTotalWidth = parentWidth * imgLength
    $('.banner-child').css({'margin-left': -parentWidth * currentNum})
    $('.banner-child').width( childTotalWidth )
    $('.banner-child>img').width( parentWidth )
})


$('.right-arrow').on('click',function(){
    // console.log('外',currentNum)
    if(currentNum==imgLength-1){//假如當前數字=圖片總數

    }else{

        currentNum = currentNum+1 //當前數字累加1
        common()
        // $('.banner-child').animate({'margin-left':-parentWidth * (currentNum-1)})
        // console.log('內',currentNum)
    }
})// .right-arrow end

$('.left-arrow').on('click',function(){
    // console.log('外',currentNum)
    if(currentNum==0){
        
    }else{
        currentNum = currentNum-1 //當前數字累加1
        common()
        // $('.banner-child').animate({'margin-left': -parentWidth * (currentNum-1)})
        // console.log('內',currentNum)
    }
})// .left-arrow end


$('.indicator>li').on('click',function(){
    // console.log('當前',currentNum)
    // console.log('點擊的',$(this).index())//序列號
    //index()序列號//
    //eq()第幾個元素//
    currentNum = $(this).index()+1//當前的數字=點擊序列+1//
    common()
    console.log($('.indicator>li').eq(0))
    // $('.indicator>li').eq(currentNum-1).addClass('active')
    // $('.indicator>li').eq(currentNum-1).siblings().removeClass('active')
    //^圓圈按鈕的切換^//
})//indicator>li END


function common(){

// $('.banner-child').animate({'margin-left': -parentWidth * (currentNum)},callback)
$('.banner-child').animate({'margin-left': -parentWidth * currentNum},function(){
    //callback函式執行完後執行
    //假如當前數字 = 總數-1
    if(currentNum == imgLength-1){
        currentNum = 1
    }
    if(currentNum==0){
        currentNum = imgLength-2
    }

    //動畫結束後執行圓圈跳下一個//
    $('.banner-child').css({'margin-left': -parentWidth * currentNum})
    console.log(currentNum)
    $('.indicator>li').eq(currentNum-1).addClass('active')
    $('.indicator>li').eq(currentNum-1).siblings().removeClass('active')
    
})//callback END

}//common() END

setInterval(function(){
$('.right-arrow').click()
},3000)




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
