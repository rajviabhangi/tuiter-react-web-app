import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faUpload, faCircleCheck, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateTuitThunk } from '../../services/tuits-thunks'
import { useDispatch } from 'react-redux'

library.add(faComment, faRetweet, solidHeart, regularHeart, faUpload, faCircleCheck)

function TuitStats({ tuit }) {
    let [isLiked, setIsLiked] = useState(tuit.liked);
    const dispatch = useDispatch();
    // let [numberOfLikes, setNumberOfLikes] = useState(liked ? likes+1 : likes);
    const toggleLike = () => {
        setIsLiked(prev => !prev);
        !isLiked ? updateLikes(tuit.likes + 1) : updateLikes(tuit.likes - 1);

    }

    const updateLikes = (likes) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes,
            liked: !isLiked
        }))
    }
    return (
        <div className="d-flex justify-content-between align-items-center mx-3 text-muted" style={{ width: '80%' }}>
            <div><FontAwesomeIcon icon="fa-regular fa-comment" /> {tuit.replies}</div>
            <div><FontAwesomeIcon icon="fa-solid fa-retweet" /> {tuit.retuits}</div>
            <div onClick={() => toggleLike()}>{isLiked ? <FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: 'red' }} /> : <FontAwesomeIcon icon="fa-regular fa-heart" />} {tuit.likes}</div>
            <div><FontAwesomeIcon icon="fa-solid fa-upload" /></div>
        </div>
    )
}

export default TuitStats