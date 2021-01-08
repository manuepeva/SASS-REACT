var wave = document.querySelector('.wave');

var bottom = -170;
function moving(){
    let ct = document.getElementsByClassName("bottom");
    ct.addEventListener("click", move());
}

function move(){
    var id = setInterval(frame, 2000);

    function frame(){
        if(bottom >= -120){
            wave.style.bottom = bottom + "%";
            bottom = bottom -25;
        }else{
            wave.style.bottom = bottom + "%";
            bottom = bottom - -15;
        }
    }
    console.log('test');
}