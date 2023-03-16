import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faUpload, faCircleCheck, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faComment, faRetweet, solidHeart, regularHeart, faUpload, faCircleCheck)

function TuitStats({ replies, retuits, likes, liked }) {
    let [isLiked, setIsLiked] = useState(liked);
    let [numberOfLikes, setNumberOfLikes] = useState(liked ? likes+1 : likes);
    const toggleLike = () => {
        setIsLiked(prev => !prev);
        !isLiked ? setNumberOfLikes(likes+1) : setNumberOfLikes(likes);

    }
    return (
        <div className="d-flex justify-content-between align-items-center mx-3 text-muted" style={{ width: '80%' }}>
            <div><FontAwesomeIcon icon="fa-regular fa-comment" /> {replies}</div>
            <div><FontAwesomeIcon icon="fa-solid fa-retweet" /> {retuits}</div>
            <div onClick={() => toggleLike()}>{isLiked ? <FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: 'red' }} /> : <FontAwesomeIcon icon="fa-regular fa-heart" />} {numberOfLikes}</div>
            <div><FontAwesomeIcon icon="fa-solid fa-upload" /></div>
        </div>
    )
}

export default TuitStats