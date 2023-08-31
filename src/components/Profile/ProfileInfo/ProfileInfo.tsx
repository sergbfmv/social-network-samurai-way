import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo: React.FC = () => {
    return (
        <div>
            <div>
                <img className={s.img} src="https://www.ens-abidjan.org/slide/Jssor.Slider.FullPack/img/home/01.jpg"
                     alt="bg-image"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+sescription
            </div>
        </div>
    );
};

