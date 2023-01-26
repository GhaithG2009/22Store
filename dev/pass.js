var password ="123456";
function passcheck(){

    if(document.getElementById(pass1).value !=password){
        alert('worng password');
        return false;
    }
    if(document.getElementById(pass1).value ==password){
        alert ('correct')
    }
}