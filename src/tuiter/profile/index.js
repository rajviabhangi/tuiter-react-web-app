import React from 'react';
import { useSelector } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faCakeCandles, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

library.add(faLocationDot, faCakeCandles, faCalendarDays);

function ProfileComponent() {
    const profile = useSelector(state => state.profile);
    const styles = {
        imgContainer: { position: "relative", textAlign: "center", color: "white", marginBottom: "10px" },
        mainContentImg: { display: "flex", width: "100%", height: "256px" },
        bottomLeftImg: { position: "absolute", bottom: "-15%", left: "16px", color: "white", width: "128px", height: "128px", borderRadius: "50%" },
        buttonContainer: { width: "100%", marginBottom: "20px" },
        buttonStyle: { backgroundColor: "white", color: "black", borderColor: "grey" }
    }
    return (
        <div>
            <h3>{profile.firstName} {profile.lastName}</h3>
            <div style={styles.imgContainer}>
                <img src={profile.bannerPicture} style={styles.mainContentImg} />
                <div><img src={profile.profilePicture} style={styles.bottomLeftImg}></img></div>
            </div>
            <div className="d-flex flex-row-reverse" style={styles.buttonContainer}>
                <Link to="/tuiter/edit-profile">
                    <a class="btn btn-primary rounded-pill" href="#" role="button" style={styles.buttonStyle}><b>Edit Profile</b></a>
                </Link>
            </div>
            <h4 className='m-0'><b>{profile.firstName} {profile.lastName}</b></h4>
            <p>{profile.handle}</p>
            <p>{profile.bio}</p>
            <div className="d-flex justify-content-between align-items-center text-muted" style={{ width: '80%' }}>
                <div><FontAwesomeIcon icon="fa-solid fa-location-dot" /> {profile.location}</div>
                <div><FontAwesomeIcon icon="fa-solid fa-cake-candles" /> Born {profile.dateOfBirth}</div>
                <div><FontAwesomeIcon icon="fa-solid fa-calendar-days" /> Joined {profile.dateJoined}</div>
            </div>
            <div className="d-flex flex-row mt-3 justify-content-between align-items-center" style={{ width: '40%' }}>
                <div><b>{profile.followingCount}</b> <span className='text-muted'>Following </span></div>
                <div><b>{profile.followersCount}</b> <span className='text-muted'>Followers</span></div>
            </div>
        </div>

    )
}

export default ProfileComponent
