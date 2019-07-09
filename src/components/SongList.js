import React, { useState, /*useEffect*/ } from "react";
import uuid from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        { author: "Kansas", title: "Dust in the Wind", id: 1},
        { author: "Bob Dylan", title: "Blowin' in the Wind", id: 2},
        { author: "Deep Purple", title: "Solider of Fortune", id: 3}
    ]);
    /*const [ age, setAge ] = useState(20);*/
    const addSong = ( author, title ) => {
        setSongs([...songs, { author, title, id: uuid()}]);
    };
    /*useEffect(()=> {
        console.log("useEffect hook ran", songs);
    }, [songs]);
    useEffect(()=> {
        console.log("useEffect hook ran", age);
    }, [age]);*/
    return(
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return( <li key={song.id}>{song.author} - {song.title}</li> )
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            {/*<button onClick={() => setAge(age + 1)}>Age ++: {age}</button>*/}
        </div>
    )
};

export default SongList;