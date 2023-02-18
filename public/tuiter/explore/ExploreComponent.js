import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return (`
    <div class="row search-bar-container">
        <div class="d-flex align-items-center justify-content-between">
            <div class="input-group me-2 search-bar">
                <span class="input-group-text search-btn-group no-border" id="basic-addon1"><i
                        class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control search-btn-group no-border"
                    placeholder="Search Tuiter" aria-label="Search" aria-describedby="basic-addon1">
            </div>
            <a href="explore-settings.html" class="black-color"><i class="fa-solid fa-gear fa-lg"></i></a>
        </div>
    </div>

    <div class="row pe-3">
        <ul class="nav nav-pill nav-fill m-2">
            <li class="nav-item active-nav">
                <a class="nav-link p-2 fw-bold" aria-current="page" href="for-you.html">For you</a>
                <div class="active-tab"></div>
            </li>
            <li class="nav-item">
                <a class="nav-link p-2 fw-bold text-muted" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link p-2 fw-bold text-muted" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link p-2 fw-bold text-muted" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-sm-none d-md-block">
                <a class="nav-link p-2 fw-bold text-muted"
                    href="entertainment.html">Entertainment</a>
            </li>
        </ul>
    </div>

    <div>
    <div class="img-container">
        <img class="main-content-img" src="../../images/starship.jpg">
        <div class="bottom-left-text fw-bold fs-3">SpaceX's Starship</div>
    </div>
    ${PostSummaryList()}
    </div>
    `);
}

export default ExploreComponent;