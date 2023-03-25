import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faDove, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from "react-router-dom";

library.add(faHouse, faDove, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis)

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2] || 'home';
    return (
        <div className="list-group">
            <a className="list-group-item d-flex justify-content-start align-items-center sidebar-list-item p-xl-20" href="/">
                <FontAwesomeIcon icon="fa-solid fa-dove" /> <span className="d-none d-xl-block ms-3"> Tuiter</span>
            </a>
            <Link to='/tuiter/home' className={`list-group-item ${active === 'home' ? 'active' : ''}  d-flex justify-content-start align-items-center sidebar-list-item p-xl-20`}>
                <FontAwesomeIcon icon="fa-solid fa-house" /> <span className="d-none d-xl-block ms-3"> Home</span>
            </Link>
            <Link to='/tuiter/explore' className={`list-group-item ${active === 'explore' ? 'active' : ''} d-flex justify-content-start align-items-center sidebar-list-item p-xl-20`}>
                <FontAwesomeIcon icon="fa-solid fa-hashtag" /> <span className="d-none d-xl-block ms-3"> Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>

            <a className={`list-group-item ${active === 'notifications' ? 'active' : ''} d-flex justify-content-start align-items-center sidebar-list-item p-xl-20`}>
                <FontAwesomeIcon icon="fa-solid fa-bell" /> <span className="d-none d-xl-block ms-3"> Notifications</span>
            </a>
            <a className={`list-group-item ${active === 'messages' ? 'active' : ''} d-flex justify-content-start align-items-center sidebar-list-item p-xl-20`}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" /> <span className="d-none d-xl-block ms-3"> Messages</span>
            </a>
            <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''} d-flex justify-content-start align-items-center sidebar-list-item p-xl-20`}>
                <FontAwesomeIcon icon="fa-solid fa-bookmark" /> <span className="d-none d-xl-block ms-3"> Bookmarks</span>
            </a>
            <a className={`list-group-item ${active === 'lists' ? 'active' : ''} d-flex justify-content-start align-items-center sidebar-list-item p-xl-20`}>
                <FontAwesomeIcon icon="fa-solid fa-list" /> <span className="d-none d-xl-block ms-3"> Lists</span>
            </a>
            <Link to='/tuiter/profile' className={`list-group-item ${active === 'profile' ? 'active' : ''} d-flex justify-content-start align-items-center sidebar-list-item p-xl-20`}>
                <FontAwesomeIcon icon="fa-solid fa-user" /> <span className="d-none d-xl-block ms-3"> Profile</span>
            </Link>
            <a className={`list-group-item ${active === 'more' ? 'active' : ''} d-flex justify-content-start align-items-center sidebar-list-item p-xl-20`}>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis" /> <span className="d-none d-xl-block ms-3"> More</span>
            </a>

        </div>
    );
}

export default NavigationSidebar;