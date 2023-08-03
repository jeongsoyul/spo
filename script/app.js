$(function(){
    //menu
    $("header .menu>li,.submenu").mouseover(function(){
        $(".submenu",this).stop(true).slideDown();
    });
    $("header .menu>li,.submenu").mouseout(function(){
        $(".submenu",this).stop(true).slideUp();
    });

    //header logo 변경
    $("header").on({
        mouseover:function(){
            $("header .logo img").attr('src','./img/logo_b.png')
        },
        mouseout:function(){
            $("header .logo img").attr('src','./img/logo.png')
        }
    })

    //hamberger

    let open = document.querySelector(".open");
    console.log(open)

    let close = document.querySelector(".close");
    console.log(close)
    
    let nav = document.querySelector("nav");
    console.log(nav)
    
    open.addEventListener('click',()=>{
        nav.style.display="block"
        open.style.display="none"
    });
    
    close.addEventListener('click',()=>{
        nav.style.display="none"
        open.style.display="block"
    });

    //scoll top

    
    let Tbtn  = $(".top");  //Tbtn = top button의미

    $(window).scroll(()=>{

     if($(this).scrollTop() > 100){
         Tbtn.stop(true).fadeIn();
     }else{
         Tbtn.stop(true).fadeOut();
     }
    }); //스크롤을 100을 내렸을때 버튼이 사라졌다가 원래대로하면 보이게 

    Tbtn.click(()=>{
        $(window).scrollTop(0);
        //수직상의 (위치값) 으로 이동
        //버튼을 클릭했을 때 창이 0값으로 올라감

    });

    // slide

    // $('.allbox').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //     ]
    // });


      
///
});