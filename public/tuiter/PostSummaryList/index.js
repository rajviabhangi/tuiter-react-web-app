import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${ posts.map(p => PostSummaryItem(p)).reduce((p, c) => `${p} ${c}`) }
        </ul>
    `)
}

export default PostSummaryList;