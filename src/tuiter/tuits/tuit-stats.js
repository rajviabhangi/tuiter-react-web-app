import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faUpload, faCircleCheck, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faComment, faRetweet, solidHeart, regularHeart, faUpload, faCircleCheck)

function TuitStats({replies, retuits, likes, liked}) {
    return (
        <div className="d-flex justify-content-between align-items-center mx-3 text-muted" style={{ width: '80%' }}>
            <div><FontAwesomeIcon icon="fa-regular fa-comment" /> {replies}</div>
            <div><FontAwesomeIcon icon="fa-solid fa-retweet" /> {retuits}</div>
            <div>{liked ? <FontAwesomeIcon icon="fa-solid fa-heart" style={{color:'red'}}/> : <FontAwesomeIcon icon="fa-regular fa-heart" /> } {likes}</div>
            <div><FontAwesomeIcon icon="fa-solid fa-upload" /></div>
        </div>
    )
}

export default TuitStats