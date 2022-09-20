let count;
let second;
let minutes;
let hour;
let timerid

$(document).ready(function(){
    //スタートボタン
    $(".start").click(function(){
        count=0,second=0,minutes=0,hour=0;
        $(".start").prop("disabled",true);
        $(".stop").prop("disabled",false);
        $(".reset").prop("disabled",false);
        timerid = setInterval(countup,100);
    });
    
    function countup(){
        count++;
        if(count < 10){
            $(".millisecond").text(count);
        }
    
        else{
            count -= 10;
            second++;
            $(".millsecond").text(count);
            if(second < 60){
                $(".second").text(second);
            }
            else{
                second -= 60;
                minutes++;
                $(".second").text(second);
                if(minutes < 60){
                    $(".minutes").text(minutes);
                }
                else{
                    minutes -= 60;
                    $(".minutes").text(minutes);
                    $(".hour").text(hour);
                }
            }
        }
    }
    //ストップボタン
    $(".stop").click(function(){
        clearInterval(timerid);
        $(".stop").prop("disabled",true);
    });
    
    //リセットボタン
    $(".reset").click(function(){
        count=0,second=0,minutes=0,hour=0;
        $(".millisecond").text(0);
        $(".second").text(0);
        $(".minutes").text(0);
        $(".hour").text(0);
        $(".start").prop("disabled",false);
    });
    
});

