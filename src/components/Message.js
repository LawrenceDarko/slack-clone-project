import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

const Message = (props) => {
    const message = props.message;
    const timestamp = props.timestamp;
    const user = props.user;
    const userImage = props.userImage;

    console.log(userImage)
    return (
        <MessageContainer>
            <img src={userImage} alt="" />
            <MessageInfo>
                <h4>
                    {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
 display: flex;
 align-items: center;
 padding: 20px;

 > img {
     height: 50px;
     border-radius: 30px;
 }
`

const MessageInfo = styled.div`
    padding-left: 10px;
    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`
const MessageAvatar = styled(Avatar)`
    cursor: pointer;
    margin-right: 20px;

    :hover {
    opacity: 0.8;
    >.MuiSvgIcon-root {
        height: 150px;
        width: 150px;

    }
}
`