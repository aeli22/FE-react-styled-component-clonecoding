import styled from 'styled-components';
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin: 80px;
    margin-top: -100px;
`;
const MainBox = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1080px;
    height: 500px;
    margin: 0 auto;
    background-color: white;
    position: relative;
`;

const WrapperContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: 0px;

    @media (max-width: 600px) {
        flex-direction: column;
        height: auto;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 10px;
    width: 220px;
    height: 40px;
    border-radius: 10px;
    background-color: #007bff;
    color: white;
    font-size: 20px;

    @media (max-width: 600px) {
        margin: 10px 0;
        width: 90%;
    }
`;

const Wrapper2 = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 10px;
    width: 220px;
    height: 40px;
    border-radius: 10px;
    background-color: #343a40;
    font-size: 20px;
    color: white;

    @media (max-width: 600px) {
        margin: 10px 0;
        width: 90%;
    }
`;
const Main2 = styled.span`
    width: 100%;
    max-width: 1080px;
    height: 500px;
    margin: 0 auto;
    background-color: gray;
`;

const Button = () => {
    return (
        <>
            <MainBox>
                <Text>
                    <br />
                    <span style={{ fontSize: '50px', color: 'black', marginBottom: '10px' }}>Album example</span>

                    <span style={{ color: '#343a40', fontSize: '27px', marginBottom: '-px' }}>
                        Something short and leading about the collection below—its contents, the creator, etc. Make it
                        short and sweet, but not too short so folks don’t simply skip over it entirely.
                    </span>
                </Text>

                <WrapperContainer>
                    <Wrapper>Main call to action</Wrapper>
                    <Wrapper2>secondary action</Wrapper2>
                </WrapperContainer>
            </MainBox>
            <Main2></Main2>
        </>
    );
};

export default Button;
