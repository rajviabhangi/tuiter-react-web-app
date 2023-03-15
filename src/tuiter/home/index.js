import React from 'react'
import NavigationSidebar from '../navigation-sidebar'
import PostList from '../post-list'
import PostSummaryList from '../post-summary-list'
import TuitList from '../tuits/tuits-list'

function HomeComponent() {
    return (
        <>
            <h2>Home</h2>
            <TuitList />
        </>
    )
}

export default HomeComponent