import {useSelector} from 'react-redux';
import {Layout, Container, InputGroup, MessageArea, SideChats, ChatCard, MainChat, SideHeader, ChatHeader} from './styles';
import Flex from '../../components/flex';
import Button from '../../components/button';
import Msgbox from '../../components/chatmsg';
import {User, PaperPlaneRight} from 'phosphor-react';


const Chat = () => {
	const user = useSelector(state => state.user);

	return (
		<Layout>
			<Container>
				<Flex j_content='flex-start' w='30%' a_items='stretch' d='column'>
					<SideHeader j_content='flex-start'>
						<Flex>
							<User weight="fill" size={32} />
							<span>{user.firstName}</span>
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
						<User weight="fill" size={32} />
						<span>SACHA DUPONT</span>
					</ChatHeader>
					<MainChat>
						<Msgbox isSent={true} message="Salut" />
						<Msgbox isSent={false} message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nibh quis faucibus rhoncus, tellus augue ullamcorper nunc, vitae ullamcorper erat ipsum condimentum enim. Duis mollis lorem non commodo imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Aenean eget dolor vitae urna vestibulum ornare. Nunc consequat rhoncus eleifend. Vestibulum congue lorem non lacus fermentum, ac pellentesque quam porta. Integer non ornare nisi, at faucibus felis. Quisque pretium, arcu ut euismod dignissim, arcu neque congue nisl, vel tristique sem magna ac tortor. In fringilla in ante non tempus." />
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
							<Button>
								<PaperPlaneRight weight="fill" size={32} />
							</Button>
						</InputGroup>
					</Flex>
				</Flex>
			</Container>
		</Layout >
	);
};

export default Chat;