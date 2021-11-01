import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
import { useRef, useEffect } from "react";


const Chat = () => {
    const roomId = useSelector(selectRoomId);
    const [ roomDetails ] = useDocument(roomId && db.collection('rooms').doc(roomId));
    const [ roomMessages, loading ] = useCollection( roomId && db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp", "asc"));
    const chatRef = useRef(null);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [roomId, loading])

     

    console.log(roomDetails?.data());
    console.log(roomMessages);

    return (
        <ChatContainer>
            {roomId && roomDetails && (
                <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#{roomDetails?.data().name}</strong></h4>
                        <StarBorderOutlined />
                    </HeaderLeft>

                    <HeaderRight>
                        <p>
                            <InfoOutlined /> Details
                        </p>
                    </HeaderRight>
                </Header>
                <ChatMessages>
                    {roomMessages?.docs.map((doc) => {
                        const {message, timestamp, user, userImage} = doc.data();
                        return(
                            <Message 
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            />
                        )
                    })}
                    <ChatBottom ref={chatRef}/>
                </ChatMessages>

                <ChatInput 
                    chatRef={chatRef}
                    channelName={roomDetails?.data().name}
                    channelId = {roomId}
                />
            </>
            )}
            
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`
    display: flex;
    > h4 {
        display: flex;
        text-transform: lowercase;
    }

    .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18;
    }
`

const HeaderRight = styled.div`
    > p{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    >p > .MuiSvgIcon-root{
        margin-right: 5px;
        font-size: 16px;
    }
`

const ChatMessages = styled.div``

const ChatBottom = styled.div`
    margin-top: 100px;
`