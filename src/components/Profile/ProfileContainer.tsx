import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId || '2'
        this.props.getUserProfileTC(userId)
    }


    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithUrlProfileContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlProfileContainer)


//Types
type MapStateToPropsType = {
    profile: ProfileType | undefined
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
}

type PathParamsType = {
    userId: string
}

type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType