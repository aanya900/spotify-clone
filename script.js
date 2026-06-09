let progressBar = document.getElementById('progressBar');
let audio = new Audio('audio/1.mp3');
let currentSong = 1;

play.addEventListener('click', () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    } else {
        audio.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
});

audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background = `linear-gradient(to right, #21a600ff ${progress}%, #333 ${progress}%)`;
})

progressBar.addEventListener('input', function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #21a600ff ${value}%, #333 ${value}%)`;

    audio.currentTime = (progressBar.value * audio.duration) / 100;
});

let playMusic = Array.from(document.getElementsByClassName('playMusic'));

makeAllPlay = () => {
    playMusic.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// playMusic.forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlay();
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         play.classList.remove('fa-circle-play');
//         play.classList.add('fa-circle-pause');

//         index = parseInt(e.target.id);
//         currentSong = index;
//         audio.src = `audio/${index}.mp3`;
//         audio.currentTime = 0;
//         audio.play();
//         updateNowBar();
//     })
// });

playMusic.forEach((element) => {
    element.addEventListener('click', (e) => {
        let clickedIndex = parseInt(e.target.id);

        if (currentSong === clickedIndex && !audio.paused) {
            // Pause the song
            audio.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            play.classList.remove('fa-circle-pause');
            play.classList.add('fa-circle-play');
        } else {
            makeAllPlay();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            play.classList.remove('fa-circle-play');
            play.classList.add('fa-circle-pause');

            if (currentSong !== clickedIndex) {
                currentSong = clickedIndex;
                audio.src = `audio/${clickedIndex}.mp3`;
                audio.currentTime = 0;
            }
            
            audio.play();
            updateNowBar();
        }
    })
});

let allMusic = Array.from(document.getElementsByClassName('music-card'));

const songs = [
    {songName: "Shape of you",songDes: "A record-breaking 2017 pop song" , songImage : "images/1.jpg", songPath: "audio/1.mp3"},
    {songName: "Senorita",songDes:"A passionate, intense summer romance." , songImage : "images/2.jpg", songPath: "audio/2.mp3"},
    {songName: "Harleys in hawaii",songDes: "Tropical, romantic motorcycle love song" , songImage : "images/3.jpg", songPath: "audio/3.mp3"},
    {songName: "Diet mountain dew",songDes: "Dark, toxic, yet irresistible romance" , songImage : "images/4.jpg", songPath: "audio/4.mp3"},
    {songName:  "Levitating",songDes: "Funky, disco-infused dance-pop hit", songImage : "images/5.jpg", songPath: "audio/5.mp3"},
    {songName:  "Die with a smile",songDes: "Passionate and timeless love ballad."  , songImage : "images/6.jpg", songPath: "audio/6.mp3"},
    {songName:  "Blinding Lights",songDes: "Upbeat, nostalgic 80s-inspired synth-pop", songImage : "images/7.jpg", songPath: "audio/7.mp3"},
    {songName: "3D",songDes: "Catchy pop R&B track" , songImage : "images/8.jpg", songPath: "audio/8.mp3"},
    {songName: "Dynamite",songDes: "Catchy pop R&B track" , songImage : "images/9.jpg", songPath: "audio/9.mp3"},
    {songName: "Favourite",songDes: "Seductive and dark pop anthem" , songImage : "images/10.jpg", songPath: "audio/10.mp3"},
    {songName: "Who",songDes: "K-pop hit" , songImage : "images/11.jpg", songPath: "audio/11.mp3"},
    {songName: "Maria",songDes: "K-pop hit" , songImage : "images/12.jpg", songPath: "audio/12.mp3"},
    {songName: "Chk Chk Boom",songDes: "K-pop hit" , songImage : "images/13.jpg", songPath: "audio/13.mp3"},
    {songName: "Like Jennie",songDes: "K-pop hit" , songImage : "images/14.jpg", songPath: "audio/14.mp3"},
    {songName: "Vengeance",songDes: "K-pop hit" , songImage : "images/15.jpg", songPath: "audio/15.mp3"},
    {songName: "Gangnam Style",songDes: "K-pop hit" , songImage : "images/16.jpg", songPath: "audio/16.mp3"},
    {songName: "APT",songDes: "K-pop hit" , songImage : "images/17.jpg", songPath: "audio/17.mp3"},
    {songName: "Good Goodbye",songDes: "K-pop hit" , songImage : "images/18.jpg", songPath: "audio/18.mp3"},
    {songName: "Swim",songDes: "K-pop hit" , songImage : "images/19.jpg", songPath: "audio/19.mp3"},
    {songName: "Rover",songDes: "K-pop hit" , songImage : "images/20.jpg", songPath: "audio/20.mp3"},
    {songName: "Dillagi",songDes: "Hindi song" , songImage : "images/21.jpg", songPath: "audio/21.mp3"},
    {songName: "Khwab Dekhe Sexy Lady",songDes: "Hindi song" , songImage : "images/22.jpg", songPath: "audio/22.mp3"},
    {songName: "Tere Liye",songDes: "Hindi song" , songImage : "images/23.jpg", songPath: "audio/23.mp3"},
    {songName: "Gehra Hua",songDes: "Hindi song" , songImage : "images/24.jpg", songPath: "audio/24.mp3"},
    {songName: "Masakali",songDes: "Hindi song" , songImage : "images/25.jpg", songPath: "audio/25.mp3"},
    {songName: "Zara Sa",songDes: "Hindi song" , songImage : "images/26.jpg", songPath: "audio/26.mp3"},
    {songName: "Tere Bina",songDes: "Hindi song" , songImage : "images/27.jpg", songPath: "audio/27.mp3"},
    {songName: "Hai Rama",songDes: "Hindi song" , songImage : "images/28.jpg", songPath: "audio/28.mp3"},
    {songName: "Kaho Na Kaho",songDes: "Hindi song" , songImage : "images/29.jpg", songPath: "audio/29.mp3"},
    {songName: "Jaane Na Tu",songDes: "Hindi song" , songImage : "images/30.jpg", songPath: "audio/30.mp3"},
]


order = [...songs];

allMusic.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].songImage;
    element.getElementsByClassName('img-title')[0].innerText = songs[i].songName;
    element.getElementsByClassName('img-description')[0].innerText = songs[i].songDes;
});

let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let nowBar = document.querySelector('.now-bar');

let songOnRepeat = false;
let songOnShuffle = false;

// function shuffleSongs (originalOrder) {
//     order = [...originalOrder];
//     for(i = order.length - 1; i > 0; i--){
//         let j = Math.floor((Math.random) * (i + 1));
//         [order[i], order[j]] = [order[j], order[i]];
//     }
//     return order;
// }

// shuffle.addEventListener('click', () => {
//     if(!songOnShuffle) {
//         songOnShuffle = true;
//         songOnRepeat = false;
//         shuffle.classList.add('active');
//         repeat.classList.remove('active');

//         order = shuffleSongs(songs);
//     } else {
//         songOnShuffle = false;
//         shuffle.classList.remove('active');

//         order = songs;
//     }
// });

// repeat.addEventListener('click', () => {
//     if(!songOnRepeat) {
//         songOnRepeat = true;
//         songOnShuffle = false;
//         repeat.classList.add('active');
//         shuffle.classList.remove('active');
//     } else {
//         songOnRepeat = false;
//         repeat.classList.remove('active');
//     }
// })

let shuffledIndices = [];
let shuffleIndexPointer = 0;

// Helper function to create a randomly shuffled array of indices [0, 1, 2... 29]
function generateShuffledOrder() {
    let indices = Array.from({ length: songs.length }, (_, i) => i + 1);
    for (let i = indices.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
}

shuffle.addEventListener('click', () => {
    if (!songOnShuffle) {
        songOnShuffle = true;
        songOnRepeat = false;
        shuffle.classList.add('active');
        repeat.classList.remove('active');

        // Generate a locked pool of random tracks where no song repeats
        shuffledIndices = generateShuffledOrder();
        
        // Put our current playing song at the start of the pool so it doesn't repeat next
        let currentPos = shuffledIndices.indexOf(currentSong);
        if (currentPos !== -1) {
            shuffledIndices.splice(currentPos, 1);
            shuffledIndices.unshift(currentSong);
        }
        shuffleIndexPointer = 0;
    } else {
        songOnShuffle = false;
        shuffle.classList.remove('active');
    }
});

repeat.addEventListener('click', () => {
    if (!songOnRepeat) {
        songOnRepeat = true;
        songOnShuffle = false;
        repeat.classList.add('active');
        shuffle.classList.remove('active');
    } else {
        songOnRepeat = false;
        repeat.classList.remove('active');
    }
});

// playNextSong = () => {
//     if(!songOnRepeat){
//         let nextSong = (currentSong + 1) % playMusic.length;
//         currentSong = nextSong == 0 ? playMusic.length : nextSong;
    
//         audio.src = order[currentSong-1].songPath;
//         audio.currentTime = 0;
//         audio.play();
//         updateNowBar();
//     } else {
//         audio.src = order[currentSong-1].songPath;
//         audio.currentTime = 0;
//         audio.play();
//         updateNowBar();
//     }
// }

// playPrevSong = () => {
//     let prevSong = (currentSong - 1);
//     currentSong = prevSong == 0 ? playMusic.length : prevSong;
//     audio.src = `Audio/${currentSong}.mp3`;
//     audio.currentTime = 0;
//     audio.play();
//     updateNowBar();
// }

playNextSong = () => {
    if (songOnRepeat) {
        // Repeat mode takes highest priority
        audio.currentTime = 0;
        audio.play();
        return;
    }

    if (songOnShuffle) {
        shuffleIndexPointer++;
        
        // If all songs have played exactly once, reshuffle a new pool
        if (shuffleIndexPointer >= shuffledIndices.length) {
            shuffledIndices = generateShuffledOrder();
            shuffleIndexPointer = 0;
        }
        currentSong = shuffledIndices[shuffleIndexPointer];
    } else {
        // Standard chronological next track behavior
        currentSong = (currentSong % songs.length) + 1;
    }

    audio.src = `Audio/${currentSong}.mp3`;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
    updateCardIcons(); // Keeps play/pause graphics in sync
};

playPrevSong = () => {
    if (songOnShuffle) {
        shuffleIndexPointer--;
        // Wrap around to the end of the shuffle deck if clicking backward at track zero
        if (shuffleIndexPointer < 0) {
            shuffleIndexPointer = shuffledIndices.length - 1;
        }
        currentSong = shuffledIndices[shuffleIndexPointer];
    } else {
        // Standard chronological previous track behavior
        currentSong = currentSong - 1 === 0 ? songs.length : currentSong - 1;
    }

    audio.src = `audio/${currentSong}.mp3`;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
    updateCardIcons();
};


// function updateNowBar () {
//     nowBar.getElementsByTagName('img')[0].src = order[currentSong-1].songImage;
//     nowBar.getElementsByClassName('img-title-info')[0].innerText = order[currentSong-1].songName;
//     nowBar.getElementsByClassName('img-des-info')[0].innerText = order[currentSong-1].songDes;
// }

function updateNowBar() {
    let songData = songs[currentSong - 1];
    nowBar.getElementsByTagName('img')[0].src = songData.songImage;
    nowBar.getElementsByClassName('img-title-info')[0].innerText = songData.songName;
    nowBar.getElementsByClassName('img-des-info')[0].innerText = songData.songDes;
}


forward = document.getElementById('forward');
backward = document.getElementById('backward');

forward.addEventListener('click', () => {
    playNextSong();
})

audio.addEventListener('ended', () => {
    playNextSong();
})

backward.addEventListener('click', () => {
    playPrevSong();
});



function updateCardIcons() {
    makeAllPlay();
    let currentCardIcon = document.getElementById(currentSong);
    if (currentCardIcon && !audio.paused) {
        currentCardIcon.classList.remove('fa-circle-play');
        currentCardIcon.classList.add('fa-circle-pause');
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    }
}
