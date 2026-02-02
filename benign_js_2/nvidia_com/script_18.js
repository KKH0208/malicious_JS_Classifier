/* 元のURL: https://nvidia.com */

    if($(".nav-langglobe-icon").length){
    
    $(".nav-langglobe-icon").click(function(e){
            e.preventDefault();
            $(".navglobicon > ul > li> ul").toggleClass("phonetabletshow");		
            });
    
    
        
    
    $('body').on("click", function() {
        
        
                    if (event.target.id == "nv-login-selector" || $(event.target).parents("#nv-login-selector").length) {
                        
                        if ($(".phonetabletshow").length){
                            //$(".navglobicon > ul > li> ul").addClass("phonetabletshow");
                        }
                    }else {
                        $(".phonetabletshow").removeClass("phonetabletshow");
                    }
                    
                });
    
    $(window).scroll(function() {
        
        if ($(".phonetabletshow").length){
            
              $(".phonetabletshow").removeClass("phonetabletshow");
        }
    });
    
    }
    
    

