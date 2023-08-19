import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                    alt="Company logo"/>
            </header>
            <nav className='nav'>
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <main className='main'>
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
            </main>
        </div>
    );
}


export default App;
