var back = document.getElementById("back");
var car = document.getElementById("car");
var road = document.getElementById("road");
var position = 0;
var move;

function motion_start()
{
    move = setInterval(movingCar , 10);
    function movingCar()
    {
        position++;
        if(position > 1040)
        {
            clearInterval(move);
            position = 0;
            car.style.left = position + 'px';
        }
        else
        car.style.left = position + 'px';
    }
}

function motion_stop()
{
    clearInterval(move);
}

function change(img)
{
    var theme = back.style.backgroundImage = "url("+img+")";
    back.style.height = 77 + 'vh';
    back.style.backgroundSize = "cover";
    if(img == 'img1.jpg' || img=='img4.jpg' || img=='img5.jpg' || img=='img6.jpg')
    {
        back.style.backgroundPosition = "top";
    }
    else
    back.style.backgroundPosition = "bottom";
    
}
