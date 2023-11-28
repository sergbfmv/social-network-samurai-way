import React from "react";

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode.bind(this)}>
                        {this.props.status}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}


//types
type ProfileStatusPropsType = {
    status: string
}