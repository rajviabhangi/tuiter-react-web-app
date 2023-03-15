import React from "react";
import './tuit-item.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faUpload, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TuitStats from "./tuit-stats";

library.add(faComment, faRetweet, faHeart, faUpload, faCircleCheck)

const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "images/spacex.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return (
        <li className="list-group-item d-flex justify-content-center align-items-begin wd-post-list-item">
            <div>
                <img src={tuit.image} className="wd-post-image" />
            </div>
            <div>
                <div className="d-flex flex-column justify-content-center align-items-begin">
                    <div className="mx-3">
                        <b>{tuit.userName}</b> <FontAwesomeIcon icon="fa-solid fa-circle-check" className="wd-verified" /> <span className="text-muted">{tuit.handle} - {tuit.time}</span>
                    </div>
                    <div className="mx-3 mb-3">
                        {tuit.tuit}
                    </div>
                    <TuitStats replies={tuit.replies} retuits={tuit.retuits} likes={tuit.likes} liked={tuit.liked} />
                </div>
            </div>
        </li>
    )
};
export default TuitItem;

