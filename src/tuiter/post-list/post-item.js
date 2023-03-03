import React from 'react'
import './post-item.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faUpload, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faComment, faRetweet, faHeart, faUpload, faCircleCheck)

function PostItem({ post = {
    avatar: "/images/elon.jpg",
    userName: "Elon Musk",
    handle: "elonmusk",
    time: "23h",
    title: "Amazing show about @Inspiration4x mission!",
    image: "/images/space.jpg",
    heading: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    description: "From training to launch to landing, this all-access docusaries rides along with the inspiration4 crew on the first all civilian orbital space...",
    comment: "4.2K",
    retweet: "3.5K",
    likes: "37.5K"
}}) {
  return (
    <li className="list-group-item d-flex justify-content-center align-items-begin wd-post-list-item">
        <div>
            <img src={post.avatar} className="wd-post-image" />
        </div>
        <div>
            <div className="d-flex flex-column justify-content-center align-items-begin">
                <div className="mx-3">
                    <b>{post.userName}</b> <FontAwesomeIcon icon="fa-solid fa-circle-check" /> <span className="text-muted">@{post.handle}
                        - {post.time}</span>
                </div>
                <div className="mx-3">
                    {post.title}
                </div>
                <div className="card wd-post-card-container my-3 mx-3">
                    <img src={post.image} className="card-img-top wd-post-card-img" alt="Post Image" />
                    <div className="card-body">
                        <p className="card-title">{post.heading}
                        </p>
                        <p className="card-text text-muted">{post.description}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-3 text-muted" style={{width: '80%'}}>
                    <div><FontAwesomeIcon icon="fa-regular fa-comment" /> {post.comment}</div>
                    <div><FontAwesomeIcon icon="fa-solid fa-retweet" /> {post.retweet}</div>
                    <div><FontAwesomeIcon icon="fa-regular fa-heart" /> {post.likes}</div>
                    <div><FontAwesomeIcon icon="fa-solid fa-upload" /></div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default PostItem