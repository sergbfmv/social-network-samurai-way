import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getAuthUserDataTC, logoutTC} from "../../redux/AuthReducer";


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserDataTC, logoutTC})(HeaderContainer)


//Types
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    getAuthUserDataTC: () => void
    logoutTC: () => void
}

type HeaderPropsType = MapStateToPropsType & MapDispatchPropsType