import { BaseContainer } from "@components/basis/BaseContainer";
import { MySettingNav } from "@components/my-setting/MySettingNav";
import { MySettingProfile } from "@components/my-setting/MySettingProfile";
import styled from "@emotion/styled";




const MySettingMainContainer = styled(BaseContainer)`
    background-color: #f2f3f5;
    display: flex;
    flex-direction: row;
`;

const MySettingNavContainer = styled.div`
    min-width: 192px;
    width: 477px;
    background-color: #e2e4e7;
    display: flex;
    justify-content: flex-end;
`;

const MySettingProfileContainer = styled.div`
    min-width: 550px;
    width: 100%;
    padding: 60px 40px 80px 40px;
    display: flex;
    justify-content: flex-start;
    overflow-y: auto;
`;


const MySetting = () => {

    return (
        <MySettingMainContainer>
            <MySettingNavContainer>
                <MySettingNav />
            </MySettingNavContainer>
            <MySettingProfileContainer>
                <MySettingProfile />
            </MySettingProfileContainer>
        </MySettingMainContainer>
    );
};
export { MySetting };