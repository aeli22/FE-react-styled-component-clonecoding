import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;

    width: auto 0;
    height: 80px;

    background-color: #343a40;
    font-size: 30px;
    color: white;
    font-weight: bold;
    font-family: sans-serif;
    line-height: 1.15;
    justify-content: space-between;
`;
const BoxContainer = styled.span`
    margin-left: 50px;
    margin-top: 20px;
`;
const TextBox = styled.span`
    margin-left: 5px;
`;

const Header = () => {
    return (
        <>
            <Wrapper>
                <BoxContainer>
                    <svg
                        width="40px"
                        height="30px"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 -3 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                        />
                    </svg>
                    <TextBox>Album</TextBox>
                </BoxContainer>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    margin-left="auto"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </Wrapper>
        </>
    );
};
export default Header;
