import React from 'react'
import NavigationSidebar from '../navigation-sidebar'
import PostList from '../post-list'
import PostSummaryList from '../post-summary-list'
import TuitList from '../tuits/tuits-list'
import WhatsHappening from './whats-happening'

function HomeComponent() {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <TuitList />
        </>
    )
}

export default HomeComponent