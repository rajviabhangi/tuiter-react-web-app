const NavigationSidebar = () => {
    return (`
    <div class="list-group">
        <a class="list-group-item d-flex justify-content-start align-items-center sidebar-list-item text-white p-xl-20" href="/"><i class="fab fa-twitter"></i></a>
        <a class="list-group-item d-flex justify-content-start align-items-center sidebar-list-item text-white p-xl-20" href="#">
            <i class="fa fa-home fa-lg"></i><span class="d-none d-xl-block ms-3"> Home</span>
        </a>
        <a class="list-group-item sidebar-active d-flex justify-content-start align-items-center text-white sidebar-list-item p-xl-20 bg-primary"
            href="#">
            <i class="fa fa-hashtag fa-lg fa-regular"></i> <span class="d-none d-xl-block ms-3"> Explore</span>
        </a>
        <a class="list-group-item d-flex justify-content-start align-items-center sidebar-list-item text-white p-xl-20"
            href="#">
            <i class="fa fa-bell fa-lg fa-regular"></i> <span class="d-none d-xl-block ms-3"> Notifications</span>
        </a>
        <a class="list-group-item d-flex justify-content-start align-items-center sidebar-list-item text-white p-xl-20"
            href="#">
            <i class="fa fa-envelope fa-lg fa-regular"></i> <span class="d-none d-xl-block ms-3"> Messages</span>
        </a>
        <a class="list-group-item d-flex justify-content-start align-items-center sidebar-list-item text-white p-xl-20"
            href="#">
            <i class="fa fa-bookmark fa-lg fa-regular"></i> <span class="d-none d-xl-block ms-3"> Bookmarks</span>
        </a>
        <a class="list-group-item d-flex justify-content-start align-items-center sidebar-list-item text-white p-xl-20"
            href="#">
            <i class="fa fa-list fa-lg"></i> <span class="d-none d-xl-block ms-3"> Lists</span>
        </a>
        <a class="list-group-item d-flex justify-content-start align-items-center sidebar-list-item text-white p-xl-20"
            href="#">
            <i class="fa fa-user fa-lg fa-regular"></i> <span class="d-none d-xl-block ms-3"> Profile</span>
        </a>
        <a class="list-group-item d-flex justify-content-start align-items-center sidebar-list-item text-white p-xl-20"
            href="#">
            <i class="fa fa-ellipsis-h fa-lg"></i> <span class="d-none d-xl-block ms-3"> More</span>
        </a>
    </div>
    <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
    </div>
    `);
}

export default NavigationSidebar;

