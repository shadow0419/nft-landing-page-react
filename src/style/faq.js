import styled from "styled-components";
// export const StyledFooter = styled.div`
//   background: ${`url(${gtavImg})`};
//   background-size: cover;
//   margin: 100px 0 0 0;
//   width: 100%;
// `;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const FooterBody = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 50px;
  align-items: flex-end;
  position: relative;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    padding: 40px;
    align-items: center;
    & > *:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
export const SocialLink = styled.a`
  text-decoration: none;
`;
