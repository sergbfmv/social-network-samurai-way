import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, getUserStatusTC, ProfileType, updateUserStatusTC} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId || '2'
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }


    render() {
        return (
            <div>
                <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateUserStatusTC}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC}), withRouter)
(ProfileContainer)


//Types
type MapStateToPropsType = {
    profile: ProfileType | undefined
    status: string
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType