
MouseClick();

//var rand = Math.floor(Math.random()*words.length);



function MouseClick() {

    document.addEventListener('click',function (event) {
        var words = ['富强','民主','文明','和谐','自由','平等','公正','法治','爱国','敬业','诚信','友善']
        var rand = Math.floor(Math.random()*words.length);
        var div = document.createElement("div");
        div.style.color = '#dd2323';
        div.style.position = 'fixed';
        div.style.left = event.clientX + 'px';
        div.style.top = event.clientY + 'px';

        div.innerHTML = words[rand];
        document.body.appendChild(div);
    });



}






