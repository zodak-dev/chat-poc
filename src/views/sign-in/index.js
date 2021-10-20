import { Layout, Container } from './styles';
import Title from '../../components/title';
import InputGroup from '../../components/input/group';
import InputText from '../../components/input/text';
import Button from '../../components/button';

const SignIn = () => {
  const onSignIn = event => {
    event.preventDefault();
  };

  return (
    <Layout>
      <Container>
        <Title>
          Welcome
        </Title>
        <form action=".">
          <InputGroup>
            <InputText placeholder="john@mail.com" />
          </InputGroup>
          <InputGroup>
            <InputText placeholder="••••••••" type="password" />
          </InputGroup>
          <Button onClick={onSignIn}>Sign in</Button>
        </form>
      </Container>
    </Layout>
  );
};

export default SignIn;