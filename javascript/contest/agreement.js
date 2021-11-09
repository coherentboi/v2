var r = document.querySelector(':root');

function rules(){
    var isCheckboxChecked = document.getElementById("checked").checked;
    if (isCheckboxChecked == true){
        //Send them to the contest!
        window.location = "contestPage.html"
    }
    else{
        r.style.setProperty('--checked','block');
    }
}