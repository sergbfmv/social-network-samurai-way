import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId || '2'
        this.props.getUserProfileTC(userId)
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlProfileContainer)


//Types
type MapStateToPropsType = {
    profile: ProfileType | undefined
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
}

type PathParamsType = {
    userId: string
}

type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType