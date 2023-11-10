import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/ProfileReducer";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoProps = {
    profile: ProfileType | undefined;
};


export const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.img} src="https://www.ens-abidjan.org/slide/Jssor.Slider.FullPack/img/home/01.jpg"
                     alt="bg-image"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.aboutMe}</p>
                <p><b>Ищу работу:</b> {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
};

