import {Layout, Container, Flex, InputGroup, MessageArea, SideChats, ChatCard, MainChat, MessageBox, MessageWrapper} from './styles';
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
					<Flex j_content='flex-start' basis='10%' bg_col="darkgrey">
						<h3>SACHA DUPONT</h3>
					</Flex>
					<MainChat>
						<MessageWrapper a_items='flex-start'>
							<MessageBox bg_col='MediumSeaGreen'>
								<span>This means that your reducers need to contain logic for handling the success and error states. You can roll your own, or use handleAction()/handleActions(), also included in the redux-actions library, to help create these "error aware" reducers. I'll leave you to look at the docs for handleAction().</span>
							</MessageBox>
							<MessageBox bg_col='MediumSeaGreen'>
								<span>Wsh bien ou quoi.</span>
							</MessageBox>
						</MessageWrapper>
						<MessageWrapper a_items='flex-end'>
							<MessageBox bg_col='Red'>
								<span>Ici c'estun message 11111.</span>
							</MessageBox>
							<MessageBox bg_col='Red'>
								<span>Ici c'estun message 222222.</span>
							</MessageBox>
						</MessageWrapper>
						<MessageWrapper a_items='flex-start'>
							<MessageBox bg_col='MediumSeaGreen'>
								<span>This means that your reducers need to contain logic for handling the success and error states. You can roll your own, or use handleAction()/handleActions(), also included in the redux-actions library, to help create these "error aware" reducers. I'll leave you to look at the docs for handleAction().</span>
							</MessageBox>
							<MessageBox bg_col='MediumSeaGreen'>
								<span>Wsh bien ou quoi.</span>
							</MessageBox>
						</MessageWrapper>
						<MessageWrapper a_items='flex-end'>
							<MessageBox bg_col='Red'>
								<span>Ici c'estun message 11111.</span>
							</MessageBox>
							<MessageBox bg_col='Red'>
								<span>Ici c'estun message 222222.</span>
							</MessageBox>
						</MessageWrapper>
						<MessageWrapper a_items='flex-start'>
							<MessageBox bg_col='MediumSeaGreen'>
								<span>This means that your reducers need to contain logic for handling the success and error states. You can roll your own, or use handleAction()/handleActions(), also included in the redux-actions library, to help create these "error aware" reducers. I'll leave you to look at the docs for handleAction().</span>
							</MessageBox>
							<MessageBox bg_col='MediumSeaGreen'>
								<span>Wsh bien ou quoi.</span>
							</MessageBox>
						</MessageWrapper>
						<MessageWrapper a_items='flex-end'>
							<MessageBox bg_col='Red'>
								<span>Ici c'estun message 11111.</span>
							</MessageBox>
							<MessageBox bg_col='Red'>
								<span>Ici c'estun message 222222.</span>
							</MessageBox>
						</MessageWrapper>
						<MessageWrapper a_items='flex-start'>
							<MessageBox bg_col='MediumSeaGreen'>
								<span>This means that your reducers need to contain logic for handling the success and error states. You can roll your own, or use handleAction()/handleActions(), also included in the redux-actions library, to help create these "error aware" reducers. I'll leave you to look at the docs for handleAction().</span>
							</MessageBox>
							<MessageBox bg_col='MediumSeaGreen'>
								<span>Wsh bien ou quoi.</span>
							</MessageBox>
						</MessageWrapper>
						<MessageWrapper a_items='flex-end'>
							<MessageBox bg_col='Red'>
								<span>Ici c'estun message 11111.</span>
							</MessageBox>
							<MessageBox bg_col='Red'>
								<span>Ici c'estun message 222222.</span>
							</MessageBox>
						</MessageWrapper>
					</MainChat>
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