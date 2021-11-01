import { useState } from "react";
import { Button } from "@material-ui/core"
import styled from "styled-components"
import { auth, db } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = (props) => {
    const channelId = props.channelId;
    const channelName = props.channelName;
    const chatRef = props.chatRef;

    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault()
        
        if (!channelId){
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput('');
    }

    

    return (
        <ChatInputContainer>
            <form action="">
                <input value={input} type="text" placeholder={`Message #${channelName}`} onChange={(e)=>{setInput(e.target.value)}} />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 28px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }
    > form > Button {
        /* bottom: 40px; */
        position: fixed;
        justify-content: flex-end;
        display: none;
    }
`