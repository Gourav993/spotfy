console.log("welcome to spotify");
let songIndex= 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let song =[
     {songName:"first song",filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, // we pass the object here
    {songName:"2song song",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"3 song song",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"4song song",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"5song song",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"6song song",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"7song song",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"8song song",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
]
 songItems.forEach((element,i) => {
 
  element.getElementsByTagName('img')[0].src= song[i].coverPath;     // add the coverimges and the song name;
  element.getElementsByClassName('songName')[0].innerText= song[i].songName;
 })




//handle play and pause click
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
       
        gif.style.opacity=0;
        
    }
})

//listen to event
//audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
   // progress= parseInt((audioElement.currentTime/audioElement.duration)*100); // what % song has played
   // myProgressBar.value = progress;

//})
//movement in progressbar

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;   //comes from above % formula
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        if(audioElement.paused ||audioElement.currentTime<=0)
        {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        }
        else{
            audioElement.pause();
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
           
            gif.style.opacity=0;
            
        }

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
     masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
   masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


