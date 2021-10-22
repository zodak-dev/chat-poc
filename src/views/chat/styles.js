import Styled from 'styled-components';
import Flex from '../../components/flex';

export const Layout = Styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
	background-color:#0f161a;
`;

export const Container = Styled.div`
  display: flex;
  width: 80vw;
	height: 90vh;
  border-radius: 8px;
`;

export const InputGroup = Styled.div`
	display: flex;
	flex-grow:1;
	align-content: stretch;
	color:white;
`;

export const MessageArea = Styled.textarea`
	flex: 1 0 auto;
`;

export const SideHeader = Styled(Flex)`
	color:white;
	background-color:#2a2f32;
	padding:10px 16px;
	flex-basis:8%;
`;

export const SideChats = Styled(Flex)`
	overflow-y:auto;
	flex:1;
`;

export const ChatHeader = Styled(Flex)`
	color:white;
	background-color:#2a2f32;
	padding:10px 16px;
	border-left:1px solid rgba(241,241,242,0.11);
	flex-basis:8%;
`;

export const MainChat = Styled(Flex)`
	overflow-y:auto;
	justify-content:flex-start;
	flex:1;
	background-color:#1a1a1a;
	align-items:stretch;
	flex-direction:column;
`;

export const ChatCard = Styled(Flex)`
	min-height:80px;
	background-color:#131c21;
	color:white;
	border-top:1px solid #30383d;
	&:hover {
		cursor: pointer;
	}
`;