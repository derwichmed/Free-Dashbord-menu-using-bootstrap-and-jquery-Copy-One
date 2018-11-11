$(function (){
    $('.dashbord_item').click(function (){
        $('.dashbord_item_sub_menu:visible').fadeOut();
        $('.sub_nav_menu').fadeOut();
        $('.mega_menu').fadeOut();
        $(this).find('> .dashbord_item_sub_menu').fadeIn("slow");
    });
    
    $('.nav_item').click(function (){
        $('.dashbord_item_sub_menu:visible').fadeOut();
        $('.sub_nav_menu').fadeOut();
        $('.mega_menu').fadeOut();
        $(this).find('>.sub_nav_menu').fadeIn("slow");
        $('.mega_menu').fadeOut();
        $(this).find("> .mega_menu").fadeIn('slow');
    });
    
    $('.dashbord_item_sub_menu').mouseleave(function (){
       $(this).fadeOut(); 
    });
    
    $('.content_body').click(function (){
        $('.dashbord_item_sub_menu:visible').fadeOut();
        $('.sub_nav_menu').fadeOut();
        $('.mega_menu').fadeOut();
    });
    
    isDashbordHidden = true;
    $('.header_nav_dashbord > img').click(function (){
        if(isDashbordHidden){
            isDashbordHidden = false;
            $('.nav_dashbord').fadeOut("slow");
        }
        else{
            isDashbordHidden = true;
            $('.nav_dashbord').fadeIn("slow");
        }
        
    });
    
    isDashbordHidden = true;
    $('.menu_dashbord').click(function (){
        $('.header_nav').css('display','none');
        if(isDashbordHidden){
            isDashbordHidden = false;
            $('.nav_dashbord').fadeOut("slow");
        }
        else{
            isDashbordHidden = true;
            $('.nav_dashbord').fadeIn("slow");
        }
        
    });
    
    isHeaderNavHidden = true;
    $('.menu_nav_header').click(function (){
        $('.nav_dashbord').css('display','none');
        if(isHeaderNavHidden){
            isHeaderNavHidden = false;
            $('.header_nav').fadeOut("slow");
        }
        else{
            isHeaderNavHidden = true;
            $('.header_nav').fadeIn("slow");
        }
    });
});