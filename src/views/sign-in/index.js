import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'raviger';
import { useInput } from '../../hooks';
import { signIn } from '../../redux/user/user.actions';

import { Layout, Container } from './styles';
import Title from '../../components/title';
import InputGroup from '../../components/input/group';
import InputText from '../../components/input/text';
import Button from '../../components/button';

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [credentials,, setCredentialsOnChange] = useInput({ email: '', password: '' });

  const onSignIn = event => {
    event.preventDefault();

    dispatch(signIn(credentials));
  };

  if (user.isLoggedIn)
    return <Redirect to="/chat" />;

  return (
    <Layout>
      <Container>
        <Title>
          Welcome
        </Title>
        <form action=".">
          <InputGroup>
            <InputText name="email" onChange={setCredentialsOnChange} placeholder="john@mail.com" />
          </InputGroup>
          <InputGroup>
            <InputText name="password" onChange={setCredentialsOnChange} placeholder="••••••••" type="password" />
          </InputGroup>
          <Button onClick={onSignIn}>Sign in</Button>
        </form>
      </Container>
    </Layout>
  );
};

export default SignIn;