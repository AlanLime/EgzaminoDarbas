import React, {useState } from "react";
import '../css/Createpost.css';
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost(){

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "Eshop2")
    let navigate = useNavigate();
    const createPost = async () => {
        await addDoc(postsCollectionRef, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }});
        navigate("/");
    };

    return(
        <div className="create-post-page">
            {""} 
        <div className="cpContainer">
            <h1 className="cptitle">Sukurkite Skelbimą!</h1>
            <hr className="leline"/>
            <div className="inputGp">
                <label>Koks Skelbimo Pavadinimas?</label>
                <input placeholder="Title..." onChange={(event) => {setTitle(event.target.value)}}/>
            </div>
            <div className="inputGp">
            <label>Apie ka norite skelbti?</label>
            <textarea placeholder="Post..." className="textarea1" onChange={(event) => {setPostText(event.target.value)}}></textarea>
            </div>
            <div className="inputGp">
            </div>
            <button onClick={createPost} className="cbt" >Paskelbti</button>
        </div>
        </div>
        )
}

export default CreatePost