import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
    const [ author, setAuthor ] = useState("");
    const [ title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(author, title);
        setAuthor("");
        setTitle("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={author} placeholder={"Author name:"} required onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div>
                <input type="text" value={title} placeholder={"Song name:"} required onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Add Song"/>
            </div>
        </form>
    )
};

export default NewSongForm;