import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        <ul class="list-group">
            ${ posts.map(p => PostItem(p)).reduce((p, c) => `${p} ${c}`) }
        </ul>
    `)
}

export default PostList;