const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item d-flex justify-content-between align-items-center border-bottom">
        <div class="me-4">
            <div class="text-muted">${post.topic}</div>
            <div class="fw-bold">${post.userName} <i class="fa-solid fa-circle-check"></i> <span
                    class="fw-normal text-muted">- ${post.time}</span></div>
            <div>${post.title}</div>
        </div>
        <img class="main-content-images"
            src="${post.image}">
    </li>
    `);
}

export default PostSummaryItem;
