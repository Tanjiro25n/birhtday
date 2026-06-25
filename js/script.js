
// 🎁 SLIDE REDIRECT
function goToSurprise(){
    document.body.classList.add("slide-out");

    setTimeout(()=>{
        window.location.href = "surprise.html";
    }, 600);
}


const photos = document.getElementById("photos");
const birthday = document.getElementById("birthday");
const bye = document.getElementById("bye");

setTimeout(() => {
    photos.classList.add("left");
    birthday.classList.remove("right");
}, 7000);

setTimeout(() => {
    birthday.classList.add("left");
    bye.classList.remove("right");
}, 14000);



