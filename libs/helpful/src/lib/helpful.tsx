import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HelpfulProps {}

const StyledHelpful = styled.div`
  color: pink;
`;

export function Helpful(props: HelpfulProps) {
  return (
    <StyledHelpful>
      <h1>Welcome to Helpful!</h1>
    </StyledHelpful>
  );
}

export default Helpful;
