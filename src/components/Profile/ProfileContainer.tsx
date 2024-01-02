import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileTC,
    getUserStatusTC,
    ProfileType,
    savePhoto,
    updateUserStatusTC
} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile = () => {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizesUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatusTC}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizesUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC, savePhoto}), withRouter)
(ProfileContainer)


//Types
type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizesUserId: number
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
    getUserStatusTC: (userId: number) => void
    updateUserStatusTC: (status: string) => void
    savePhoto: () => void
}

type PathParamsType = {
    userId: string
}

type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType