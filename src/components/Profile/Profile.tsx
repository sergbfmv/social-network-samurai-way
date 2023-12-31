import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/ProfileReducer";
import {setProfileType} from "./ProfileInfo/ProfileDataForm";

type ProfileProps = {
    profile: ProfileType;
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: () => void
    saveProfile: (profile: setProfileType) => void
};

export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
};

