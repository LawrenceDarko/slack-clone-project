import styled from 'styled-components'
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';



const SidebarOption = (props) => {
    const Icon = props.Icon;
    const title = props.title;
    const id = props.id;
    const addChannelOption = props.addChannelOption;

    // This is Redux
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Please Enter a Channel Name');

        if(channelName){
            db.collection("rooms").add({
                name: channelName,
            });
        }
    };

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
    };
    
     

    return (
        // When any of the sidebar is clicked if it is having the addChannel Prop fire "addChannel function" if not fire "selectChannel fucntion"
        // The '&&' is Just like an if statement and the '?' is also like if and else statement
        <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize="small" style={{padding: '10px'}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <SidebarOptionChannel>
                    <span>#</span>{title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    );
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    opacity: 0.5;

    :hover{
        color: #fff;
        opacity: 1;
        background-color: #340e36;
    }
    
    > h3 {
        font-weight: 500;
    }
    
    >h3 > span {
        padding: 15px;
    }
`
const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 100;
`