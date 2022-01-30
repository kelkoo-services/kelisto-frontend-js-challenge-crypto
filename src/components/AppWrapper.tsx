import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
`;

export default AppWrapper;