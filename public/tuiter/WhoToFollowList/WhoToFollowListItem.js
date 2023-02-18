const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item d-flex justify-content-between align-items-center right-bar-item">
        <img class="who-to-follow"
            src="${who.avatarIcon}">
        <div class="ms-2 me-auto">
            <div class="fw-bold">${who.userName} <i class="fa-solid fa-circle-check"></i></div>
            <span class="text-muted">@${who.handle}</span>
        </div>
        <button type="button" class="btn btn-primary rounded-btn mt-2">Follow</button>
    </li>
    `)
}

export default WhoToFollowListItem;

