var elCaroosel = document.querySelector('.caroosel')

var count = 0
function fnPrevious(){
    if(count > 0){
        count = count - 1
    }
    elCaroosel.style.transform = `translateX(-${600 * count}px)`
}

function fnNext(){
    if(count < 5){
    count = count + 1
    }
    elCaroosel.style.transform = `translateX(-${600 * count}px)`
}