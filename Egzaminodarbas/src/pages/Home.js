import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import '../css/Home.css';

export function Home({ isAuth }) {
    const [editTitle, setEditTitle] = useState("");
    const [editText, setEditText] = useState("");
    const [postIdToEdit, setPostIdToEdit] = useState(null);
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "Eshop2");

    

    useEffect(() => {
        const getPosts = async () => {
            console.log("uhoh");
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);

    let navigate = useNavigate();

    const deletePost = async (id) => {
        const postDoc = doc(db, "Eshop2", id);
        await deleteDoc(postDoc);
        navigate("/");
    };

    const handleEditClick = (id, title, text) => {
        setPostIdToEdit(id);
        setEditTitle(title);
        setEditText(text);
    };

    const handleSaveEdit = async () => {
        if (!postIdToEdit) return;

        const postDoc = doc(db, "Eshop2", postIdToEdit);
        await updateDoc(postDoc, {
            title: editTitle,
            postText: editText,
        });

        setPostIdToEdit(null);
        setEditTitle("");
        setEditText("");

        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <div className="homePage">
            {postLists.map((post) => {
                return (
                    <div className="post" key={post.id}>
                        <div className="postheader">
                        {/* isAuth && post.author.id === auth.currentUser.uid &&  */}
                            {isAuth &&<button className="deletePostbtn" onClick={() => deletePost(post.id)}>
                                x
                            </button>}

                            <div className="title">
                                <h2>{post.title}</h2>
                            </div>
                        </div>
                        {postIdToEdit === post.id ? (
                            <div>
                                <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                <textarea className="textareaedit" value={editText} onChange={(e) => setEditText(e.target.value)} /><br/>
                                <button className="editPostbtn1" onClick={handleSaveEdit}>Išsaugoti</button>
                            </div>
                            
                        ) : (
                            <div className="postTextContainer">{post.postText}</div>
                        )}
                        {isAuth &&<button className="editPostbtn" onClick={() => handleEditClick(post.id, post.title, post.postText)}>
                                Redaguoti
                            </button>}
                        <h3>@{post.author.name}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default Home