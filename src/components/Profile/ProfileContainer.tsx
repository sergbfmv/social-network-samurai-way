import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, ProfileType, setUserProfile} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/reduxStore";

type ProfilePropsType = {
    setUserProfile: (data: ProfileType) => void
    profile: ProfileType | undefined
}

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
