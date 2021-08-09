import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Nana Quame</h2>
                    <h3><FiberManualRecordIcon /></h3>
                    
                </SidebarInfo>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
`

const SidebarHeader = styled.div``

const SidebarInfo = styled.div`` 