$(function(){
  //script 입력영역
  var comp_footer = new Vue({
    el: '#footer',
    components: {
      'news-component': {
        template: '<p>SAMLI Group, which operates the bakery brand SAMLI, announced on the 12th that it has acquired the "Consumer Centered Management (CCM) Certification for the second half of 2019" hosted by the Fair Distance Committee and certified by Korea Consumer Agency.</p>'
      }
    }
  })

  $(".wrap").each(function(){
    $(this).mouseenter(function(){
      // $(this).css("background","#fff000");
      var thisWrap = $(this); //현재 .wrap 가져오기
      var itemsNum = $(this).find(".items"); //현재 this 안의 items가져오기
      var itemsLeng = $(this).find(".items").length;
      itemsNum.mouseenter (function(){
        /*mouseenter 실행구문*/
        var thisIndex = $(this).index();
        // itemsNum.removeClass("on");
        $(this).addClass("on");
        /*animation*/
        if(thisIndex == 0){
          thisWrap.css("margin-left","0px");
          $("html,body").animate({scrollLeft : "100px"},1500);
        }else if( thisIndex == itemsLeng - 1 ){
          thisWrap.css("margin-left","-100px");
        }else{
          thisWrap.css("margin-left","-50px");
        }
      }).mouseleave(function(){
        /*mouseleave 실행구문*/
        itemsNum.removeClass("on");
        thisWrap.css("margin-left","0px");
      });
    });
  });
});//end

//gallery paging
$(function(){
/*script 영역 gallery script  만들기 예*/
  var marginLeftPw;
  $("img.prev").css("display","none");//초기실행 시 prev 버튼 삭제
  /*thumb nail 이미지로 작동 하는 스크립트*/
  $("#nav a").click(function(){
    var imgSrc = $(this).attr("href");
    if($("#main img:last").is(":not(:animated)")){
      $("#main img").before("<img src='"+imgSrc+"' alt=''>");
      $("#main img:last").fadeOut("slow",function(){
        $(this).remove();
      });
    }
    // $("#main img").attr("src",$(this).attr("href"));
    return false;
  });


  console.log(parseInt($("#nav .page_wrap").css("margin-left")))
  //parseInt : string 혹은 다른 자료형을 정수형으로 변환해주는 method

  /*prev, next 버튼으로 작동 하는 스크립트*/
  const marginNumber = 150;

  $("img.next").click(function(){
    marginLeftPw = $("#nav .page_wrap").css("margin-left");
    $("#nav .page_wrap").animate({ marginLeft: parseInt(marginLeftPw) - marginNumber +"px"},"1000",function(){
      /*next 버튼을 click 후 animation 끝난 후 실행 영역*/
      marginLeftPw = parseInt($("#nav .page_wrap").css("margin-left"));
      $("img.prev").css("display","inline-block");
      if( marginLeftPw == -450 ){//3번째 페이지 노출 될때
        $("img.next").css("display","none");
      }
    });
  });

  $("img.prev").click(function(){
    marginLeftPw = $("#nav .page_wrap").css("margin-left");
    $("#nav .page_wrap").animate({ marginLeft: parseInt(marginLeftPw) + marginNumber +"px"},"slow",function(){
      /*prev 버튼을 click 후 animation 끝난 후 실행 영역*/
      marginLeftPw = parseInt($("#nav .page_wrap").css("margin-left"));
      $("img.next").css("display","inline-block");
      console.log(marginLeftPw);
      if( marginLeftPw == 0 ){
        $("img.prev").css("display","none");
      }
    });
  });
});// document ready

//community faq paging
$(function(){
  $(".tbl_content:nth-child(3)").addClass("none");
  $(".gbtn.next").click(function(){
    $(".tbl_content:nth-child(3)").removeClass("none");
    $(".tbl_content:nth-child(2)").addClass("none");
  });

  $(".gbtn.prev").click(function(){
    $(".tbl_content:nth-child(3)").addClass("none");
    $(".tbl_content:nth-child(2)").removeClass("none");
  });
});
