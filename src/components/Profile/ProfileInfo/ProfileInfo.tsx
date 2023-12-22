import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/ProfileReducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatuswithHooks";

type ProfileInfoProps = {
    profile: ProfileType | undefined;
    status: string
    updateStatus: (status: string) => void
};


export const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt={'avatar'} src={props.profile.photos.large} className={s.avatarLarge}/>
                <div className={s.infoBlock}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <p><b>О себе:</b> {props.profile.aboutMe}</p>
                    <p><b>Ищу работу:</b> {props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    );
};

