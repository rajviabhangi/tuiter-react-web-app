import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
            <ul class="list-group right-bar">
                <li class="list-group-item d-flex justify-content-between align-items-center right-bar-item">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Who to follow</div>
                    </div>
                </li>
                ${ who.map(w => WhoToFollowListItem(w)).reduce((p, c) => `${p} ${c}`) }
            </ul>
 `);
}

export default WhoToFollowList;
