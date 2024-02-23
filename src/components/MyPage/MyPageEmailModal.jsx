import styled from "@emotion/styled";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import PropTypes from "prop-types";

const EmailModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 350px;
    background-color: #ffffff;
    box-shadow: 0 3px 3px rgba(0,0,0,0.2);
    box-shadow: 24px;
    padding: 4px; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;



const MyPageEmailModal = ({ onClose }) => {
    return (
        <EmailModalContainer>
            <Button
                sx={{
                    minWidth: "30px",
                    height: "30px",
                    padding: 0,
                    margin: "10px 15px 10px 400px",
                    color: "gray",
                    right: "20px"
                }}
                onClick={onClose}
            >
                x
            </Button>
            <h3 style={{
                marginLeft: "10px",
                marginRight: "10px"
            }}
            >
                이메일 주소 변경
            </h3>
            <p style={{
                marginLeft: "10px",
                marginRight: "10px"
            }}
            >
                새로운 이메일 주소를 입력하세요
            </p>
            <FormControl sx={{
                width: "350px",
                marginBottom: "20px"
            }}
            >
                <InputLabel>
                    이메일
                </InputLabel>
                <Input />
            </FormControl>
            <Button
                variant="contained"
                sx={{
                    minWidth: "80px",
                    maxWidth: "80px",
                    height: "40px",
                    marginLeft: "350px"
                }}
            >
                완료
            </Button>
        </EmailModalContainer>
    );
};

MyPageEmailModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};
export { MyPageEmailModal };