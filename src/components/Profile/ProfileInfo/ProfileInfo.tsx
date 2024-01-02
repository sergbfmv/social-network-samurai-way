import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {profileContactsType, ProfileType} from "../../../redux/ProfileReducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatuswithHooks";
import userPhoto from '../../../assets/images/defaultAvatar.jpeg'
import {ProfileDataForm} from "./ProfileDataForm";

type ProfileInfoProps = {
    profile: ProfileType;
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
};


export const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
    const [editMode, setEditMode] = useState(false)

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
                    {editMode
                        ? <ProfileDataForm profile={props.profile} saveProfile={props.saveProfile} setEditMode={setEditMode}/>
                        : <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={() => setEditMode(true)}/>}
                </div>
            </div>
        </div>
    );
};


const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <>
            {props.isOwner && <button onClick={props.activateEditMode}>Редактировать профиль</button>}
            <p><b>Меня зовут:</b> {props.profile.fullName}</p>
            <p><b>О себе:</b> {props.profile.aboutMe}</p>
            <p><b>Ищу работу:</b> {props.profile.lookingForAJob ? 'Да! Дайте офер!' : 'Не ищу, жду чуда'}</p>
            {props.profile.lookingForAJob && <p><b>Мои скилы:</b> {props.profile.lookingForAJobDescription}</p>}
            <div>
                <b>Контакты:</b> {Object.keys(props.profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key}
                                contactValue={props.profile?.contacts[key as keyof profileContactsType]}/>
            })}
            </div>
        </>
    )
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div><b>{contactTitle}</b> : {contactValue}</div>
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner?: boolean
    activateEditMode?: () => void
}
