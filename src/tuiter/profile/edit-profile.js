import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { setProfile } from '../reducers/profile-reducer';

library.add(faXmark);

function EditProfile() {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDob] = useState(profile.dateOfBirth);

    const styles = {
        imgContainer: { position: 'relative', textAlign: 'center', color: 'white', marginBottom: '60px' },
        mainContentImg: { display: 'flex', width: '100%', height: '256px' },
        bottomLeftImg: { position: 'absolute', bottom: '-15%', left: '16px', color: 'white', width: '128px', height: '128px', borderRadius: '50%' },
        buttonContainer: { width: '100%', marginBottom: '20px' },
        buttonStyle: { backgroundColor: 'black', color: 'white', borderColor: 'black' },
    };

    const saveProfile = () => {
        console.log('Saving profile');
        dispatch(setProfile({ firstName, lastName, bio, location, website, dob }));
        navigate('/tuiter/profile');
    }

    return (
        <div>
            <div className='d-flex flex-row justify-content-between align-items-center mt-1 mb-2'>
                <div>
                    <h4 className="m-0 p-0">
                        <Link className='me-4' to='/tuiter/profile'><FontAwesomeIcon icon="fa-solid fa-xmark" style={{color: "grey"}}/></Link>
                        <b>Edit Profile</b>
                    </h4>
                </div>
                <div>
                    <button class="btn btn-primary rounded-pill" role="button" style={styles.buttonStyle} onClick={() => saveProfile()}><b>Save</b></button>
                </div>
            </div>
            <div style={styles.imgContainer}>
                <img src={profile.bannerPicture} style={styles.mainContentImg} />
                <div>
                    <img src={profile.profilePicture} style={styles.bottomLeftImg}></img>
                </div>
            </div>
            <div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="firstNameId" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label for="firstNameId">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="lastNameId" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label for="lastNameId">Last Name</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Leave a bio here"
                        id="bioId"
                        style={{ height: '100%' }}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                    <label for="bioId">Bio</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="locationId" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <label for="locationId">Location</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="websiteId" value={website} onChange={(e) => setWebsite(e.target.value)} />
                    <label for="websiteId">Website</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="dobId"
                        value={dob}
                        placeholder="MM/DD/YYYY"
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <label for="dobId">Date Of Birth</label>
                </div>
            </div>
        </div>
    );
}
export default EditProfile;
