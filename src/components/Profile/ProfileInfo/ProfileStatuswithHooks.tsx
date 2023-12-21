import React, {FC, useState} from "react";

export const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)

        props.updateStatus(status)
    }

    const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div onDoubleClick={activateEditMode}>
                    {props.status || 'No status'}
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                           value={status}
                           onBlur={deactivateEditMode}
                           onChange={onChangeStatus}
                    />
                </div>
            }
        </div>
    );

}


//types
type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}