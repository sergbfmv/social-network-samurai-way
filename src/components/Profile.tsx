import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.ens-abidjan.org/slide/Jssor.Slider.FullPack/img/home/01.jpg" alt="bg-image"/>
            </div>
            <div>
                ava+sescription
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
};

