// DiscordServerNav.js
import { BaseContainer } from "@components/basis/BaseContainer";
import { GlobalChannelNavItem } from "@components/global-navigation/GlobalChannelNavItem";
import { Divider, List } from "@mui/material";
import { styled } from "@mui/system";


const GlobalChannelNavContainer = styled(BaseContainer)`
    max-width: 72px;
    background-color: #e2e4e7;
`;

const GlobalChannelNavList = styled(List)`
    width: 100%; 
`;

const GlobalChannelNav = () => {
    return (
        <GlobalChannelNavContainer>
            <GlobalChannelNavList>
                <GlobalChannelNavItem channelId={1} />
                <Divider sx={{ margin: "0 16px", borderWidth: "1px" }} />
                <GlobalChannelNavItem channelId={2} channelName="너" />
                <GlobalChannelNavItem channelId={3} channelName="abc" />
            </GlobalChannelNavList>
        </GlobalChannelNavContainer>
    );
};

export { GlobalChannelNav };