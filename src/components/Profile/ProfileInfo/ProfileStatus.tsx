import React from "react";

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'No status'}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeHandler} onBlur={this.deactivateEditMode} autoFocus={true}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}


//types
type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}