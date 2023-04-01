import React from "react";
import './tuit-item.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faUpload, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

library.add(faComment, faRetweet, faHeart, faUpload, faCircleCheck)

const TuitItem = (
   {tuit}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item d-flex justify-content-center align-items-begin wd-post-list-item">
            <div>
                <img src={tuit.image} className="wd-post-image" />
            </div>
            <div>
                <div className="d-flex flex-column justify-content-center align-items-begin">
                    <div className="mx-3">
                        <div>
                            <b>{tuit.userName}</b> <FontAwesomeIcon icon="fa-solid fa-circle-check" className="wd-verified" /> <span className="text-muted">{tuit.handle} - {tuit.time}</span>
                            <i className="bi bi-x-lg float-end"
                                onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>
                    <div className="mx-3 mb-3">
                        {tuit.tuit}
                    </div>
                    <TuitStats tuit={tuit} replies={tuit.replies} retuits={tuit.retuits} likes={tuit.likes} liked={tuit.liked} />
                </div>
            </div>
        </li>
    )
};
export default TuitItem;

