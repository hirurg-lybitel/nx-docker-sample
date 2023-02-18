import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Helpful } from '@sample-org/helpful';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (

    <StyledApp>
      <Helpful />
      <NxWelcome title="app-1" />
    </StyledApp>
  );
}

export default App;
