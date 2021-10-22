import {Layout, Container, Flex, InputGroup, MessageArea, SideChats, ChatCard} from './styles';
import Button from '../../components/button';


const Chat = () => {
	return (
		<Layout>
			<Container>
				<Flex j_content='flex-start' w='30%' a_items='stretch' d='column'>
					<Flex j_content='flex-start' basis='10%' bg_col='darkgrey'>
						<h3>MON AVATAR</h3>
					</Flex>
					<SideChats j_content='flex-start' g='1' a_items='stretch' bg_col='gray' d='column'>
						<ChatCard bg_col='red'>
							Sacha Dupont
						</ChatCard>
					</SideChats>
				</Flex>
				<Flex j_content='flex-start' w='70%' a_items='stretch' d='column'>
					<Flex j_content='flex-start' basis='10%' bg_col="darkgrey">
						<h3>SACHA DUPONT</h3>
					</Flex>
					<Flex g='1' bg_col="purple">
						<h3>CHATS</h3>
					</Flex>
					<Flex bg_col='grey'>
						<InputGroup>
							<MessageArea name="message" />
							<Button>SEND</Button>

						</InputGroup>
					</Flex>
				</Flex>
			</Container>
		</Layout >
	);
};

export default Chat;