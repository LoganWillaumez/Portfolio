import { Container } from '@mui/material';
import Portfolio from '../Components/Portfolio';

const Playground = () => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1600px' }}>
      <Portfolio />
    </Container>
  );
};
export default Playground;
