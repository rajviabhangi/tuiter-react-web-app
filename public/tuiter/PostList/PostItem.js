const PostItem = (post) => {
    return (`
    <li class="list-group-item d-flex justify-content-center align-items-begin wd-post-list-item">
        <div>
            <img src="${post.avatar}" class="wd-post-image" />
        </div>
        <div>
            <div class="d-flex flex-column justify-content-center align-items-begin">
                <div class="mx-3">
                    <b>${post.handle}</b> <i class="fa-solid fa-circle-check"></i> <span class="text-muted">@${post.handle}
                        - ${post.time}</span>
                </div>
                <div class="mx-3">
                    ${post.title}
                </div>
                <div class="card wd-post-card-container my-3 mx-3">
                    <img src="${post.image}" class="card-img-top wd-post-card-img" alt="Post Image">
                    <div class="card-body">
                        <p class="card-title">${post.heading}
                        </p>
                        <p class="card-text text-muted">${post.description}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mx-3" style="width: 80%;">
                    <div><i class="fa-regular fa-comment"></i> ${post.comment}</div>
                    <div><i class="fa-solid fa-retweet"></i> ${post.retweet}</div>
                    <div><i class="fa-regular fa-heart"></i> ${post.likes}</div>
                    <div><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
                </div>
            </div>
        </div>
    </li>
    `);
}

export default PostItem;