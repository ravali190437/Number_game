function myIncFunc(){
    let temp = document.getElementById("demo").innerHTML;
    console.log(temp);
    if (temp == 10){
        alert("Try to Decrease, it doesnt Increment more")
        return;
    }
    document.getElementById("demo").innerHTML = ++temp;
}

function myDecFunc(){
    let temp = document.getElementById("demo").innerHTML;
    console.log(temp);
    if (temp == -10){
        alert("Try to Increase, it doesnt Deccrement more")
        return;
    }
    document.getElementById("demo").innerHTML = --temp;
}