import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../nav'
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";


function Tuiter() {
    return (
        <div>
            <Nav />
            <NavigationSidebar active="home" />
            <WhoToFollowListItem who={{
                userName: 'NASA', handle: 'NASA',
                avatarIcon: 'nasa.png',
            }} />
            <WhoToFollowListItem who={{
                userName: 'Tesla', handle: 'tesla',
                avatarIcon: 'tesla.png',
            }} />
            <WhoToFollowListItem who={{
                userName: 'SpaceX', handle: 'SpaceX',
                avatarIcon: 'spacex.jpg',
            }} />


            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter