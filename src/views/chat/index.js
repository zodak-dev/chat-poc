import {Layout, Container, InputGroup, MessageArea, SideChats, ChatCard, MainChat, SideHeader, ChatHeader} from './styles';
import Flex from '../../components/flex';
import Button from '../../components/button';
import Msgbox from '../../components/chatmsg';


const Chat = () => {
	return (
		<Layout>
			<Container>
				<Flex j_content='flex-start' w='30%' a_items='stretch' d='column'>
					<SideHeader j_content='flex-start'>
						<Flex>
							Icon
						</Flex>
						<Flex>
							User
						</Flex>
					</SideHeader>
					<SideChats j_content='flex-start' g='1' a_items='stretch' bg_col='#2a2f32' d='column'>
						<ChatCard>
							Sacha Dupont
						</ChatCard>
						<ChatCard>
							David Laborde
						</ChatCard>
						<ChatCard>
							Le Belge
						</ChatCard>
						<ChatCard>
							Le Suiche
						</ChatCard>
						<ChatCard>
							Sacha Dupont
						</ChatCard>
						<ChatCard>
							Sacha Dupont
						</ChatCard>
						<ChatCard>
							Sacha Dupont
						</ChatCard>
						<ChatCard>
							Sacha Dupont
						</ChatCard>
						<ChatCard>
							Sacha Dupont
						</ChatCard>
						<ChatCard>
							Sacha Dupont
						</ChatCard>

					</SideChats>
				</Flex>
				<Flex j_content='flex-start' w='70%' a_items='stretch' d='column'>
					<ChatHeader j_content='flex-start'>
						<span>SACHA DUPONT</span>
					</ChatHeader>
					<MainChat>
						<Msgbox isSent={true} message="Salut" />
						<Msgbox isSent={false} message="Wsh, bien ?" />
						<Msgbox isSent={true} message="Salut" />
						<Msgbox isSent={false} message="Wsh, bien ?" />
						<Msgbox isSent={true} message="Salut" />
						<Msgbox isSent={false} message="Wsh, bien ?" />
						<Msgbox isSent={true} message="Salut" />
						<Msgbox isSent={false} message="Wsh, bien ?" />
						<Msgbox isSent={true} message="Salut" />
						<Msgbox isSent={false} message="Wsh, bien ?" />
						<Msgbox isSent={true} message="Salut" />
						<Msgbox isSent={false} message="Wsh, bien ?" />
						<Msgbox isSent={true} message="Salut" />
						<Msgbox isSent={false} message="Wsh, bien ?" />
					</MainChat>
					<Flex bg_col='#2a2f32'>
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