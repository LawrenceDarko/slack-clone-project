import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar/>
                <AccessTimeIcon />
            </HeaderLeft>

            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search Slack" />
            </HeaderSearch>

            {/* Header Right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header


const HeaderSearch = styled.div`
    flex: 0.4;
    display: flex;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    >input {
        background-color: transparent;
        outline: none;
        color: #fff;
        text-align: center;
        border: none;
        min-width: 30vw;
    }

`

const HeaderContainer = styled.div`
    display: flex;   
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: #fff;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    /* justify-content: space-between; */
    /* MuiSvgIcon-root Targets only Icons in this case the AccessTIme Icon */
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
` 

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`