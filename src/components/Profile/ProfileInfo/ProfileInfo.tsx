import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/ProfileReducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatuswithHooks";
import userPhoto from '../../../assets/images/defaultAvatar.jpeg'

type ProfileInfoProps = {
    profile: ProfileType | undefined;
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
};


export const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img alt={'avatar'} src={props.profile.photos.large || userPhoto} className={s.avatarLarge}/>
                    <div className={s.uploadBtnArea}>{props.isOwner &&
                        <input type={'file'} onChange={onMainPhotoSelected}/>}
                    </div>
                </div>
                <div className={s.infoBlock}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <p><b>О себе:</b> {props.profile.aboutMe}</p>
                    <p><b>Ищу работу:</b> {props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    );
};

