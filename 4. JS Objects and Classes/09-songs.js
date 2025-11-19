function solve(arr){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let songsCount = arr.shift();
    let typeSong = arr.pop();

    for (let index = 1; index <=songsCount; index++) {
        let songStr = arr.shift();
        let[typeList, name, time] = songStr.split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    if (typeSong ==='all'){
        songs.forEach((currentSong)=> console.log(currentSong.name));
    }else{
        let filterd = songs.filter((currentSong)=> currentSong.typeList === typeSong);
        filterd.forEach((currentSong)=> console.log(currentSong.name));
    }
}

solve([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
);

solve([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']
);

solve([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']
);
