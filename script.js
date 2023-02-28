
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let pbar = document.getElementById("myPbar");
let playB = document.getElementById("masterPlay");
let a = document.getElementById("song_f");
let songs = [
    {songName : "aje- lopll", filePath : "1.mp3", coverPath : "1.jpg"},
    {songName : "subbbba - janjigir", filePath : "2.mp3", coverPath : "2.jpg"},
    {songName : "ahyjinf lpoop lpoew", filePath : "3.mp3", coverPath : "3.jpg"},
    {songName : "powella ke same lopgifj", filePath : "4.mp3", coverPath : "4.jpg"},
    {songName : "hilpoope lpop - mkile", filePath : "5.mp3", coverPath : "5.jpg"},
    {songName : "kangarooa", filePath : "6.mp3", coverPath : "6.jpg"},
    {songName : "jinchurikia", filePath : "7.mp3", coverPath : "7.jpg"},
    {songName : "amklkkkk le m", filePath : "8.mp3", coverPath : "8.jpg"},
    {songName : "ajude jsklf", filePath : "9.mp3", coverPath : "9.jpg"},
    {songName : "@3$%#$%^^^^^&*()__", filePath : "10.mp3", coverPath : "10.jpg"},
    {songName : "ghlkjkla", filePath : "2.mp3", coverPath : "2.jpg"}
]

let songItems = Array.from(document.getElementsByClassName("song"));
let time =
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

playB.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play();
        playB.innerText = "pause_circle";
        songItems[songIndex].getElementsByClassName("material-icons")[0].innerText = "pause_circle";
        a.innerText = songs[songIndex].songName;

    }
    else{
        audioElement.pause();
        
        playB.innerText = "play_circle";
        
        songItems[songIndex].getElementsByClassName("material-icons")[0].innerText = "play_circle";
    }
})


pbar.addEventListener("change", ()=>{
    audioElement.currentTime = (pbar.value*audioElement.duration)/100;
})

Array.from(document.getElementsByClassName("md-18")).forEach((element, i)=>{
    element.addEventListener("click",(e)=>{
    audioElement.pause();
    if(songIndex!=i){
        console.log(songIndex);
        songItems[songIndex].getElementsByClassName("md-18")[0].innerText = 'play_circle';
        songIndex = i;
        audioElement.src = songs[i].filePath;

    }
    if(e.target.innerText === "play_circle"){
        audioElement.play();
        e.target.innerText = "pause_circle";
        playB.innerText = "pause_circle";
        a.innerText = songs[songIndex].songName;
    
    }
    else{
        audioElement.pause();
        e.target.innerText = "play_circle";
        playB.innerText = "play_circle";
    
    }
    })
})
audioElement.addEventListener("timeupdate" ,()=>{
    
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    pbar.value = progress;
})

let next = document.getElementById("next");
next.addEventListener("click", ()=>{
    audioElement.pause();
    songItems[songIndex].getElementsByClassName("md-18")[0].innerText = 'play_circle';
    songIndex = (songIndex+1)% 10;
    audioElement.src = songs[songIndex].filePath;
    a.innerText = songs[songIndex].songName;
    
    audioElement.play();
    playB.innerText = "pause_circle";
    songItems[songIndex].getElementsByClassName("material-icons")[0].innerText = "pause_circle";
     

})

let prev = document.getElementById("prev");
prev.addEventListener("click", ()=>{
    audioElement.pause();
    songItems[songIndex].getElementsByClassName("md-18")[0].innerText = 'play_circle';
    if(songIndex===0){songIndex = 9;}
    else{songIndex -= 1;}
    audioElement.src = songs[songIndex].filePath;
    a.innerText = songs[songIndex].songName;
    audioElement.play();
    playB.innerText = "pause_circle";
    songItems[songIndex].getElementsByClassName("material-icons")[0].innerText = "pause_circle";
     

})