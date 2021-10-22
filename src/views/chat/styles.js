import Styled from 'styled-components';

export const Layout = Styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
	background: rgb(2,0,36);
	background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);	
`;

export const Container = Styled.div`
  display: flex;
  width: 80vw;
	height: 90vh;
  border-radius: 8px;
`;

export const Flex = Styled.div`
	display:flex;
	align-items:${props => props.a_items ? props.a_items : 'center'};
	width:${props => props.w};
	justify-content:${props => props.j_content ? props.j_content : 'center'};
	flex-direction:${props => props.d ? props.d : 'row'};
	flex-wrap:${props => props.f_wrap ? 'wrap' : 'nowrap'};
	background-color:${props => props.bg_col};
	flex-grow:${props => props.g ? props.g : '0'};
	flex-basis:${props => props.basis ? props.basis : 'auto'};
`;

export const InputGroup = Styled.div`
	display: flex;
	flex-grow:1;
	align-content: stretch;
`;

export const MessageArea = Styled.textarea`
	flex: 1 0 auto;
`;

export const SideChats = Styled(Flex)`
	overflow-y:auto;
`;

export const MainChat = Styled(Flex)`
	overflow-y:auto;
	justify-content:flex-start;
	flex:1;
	background-color:grey;
	align-items:stretch;
	flex-direction:column;
`;

export const ChatCard = Styled(Flex)`
	min-height:80px;
	background-color:MediumSeaGreen;
	&:hover {
		cursor: pointer;
	}
`;

export const MessageWrapper = Styled(Flex)`
	flex-direction:column;
`;

export const MessageBox = Styled(Flex)`
	overflow-wrap: anywhere;
	white-space: pre-wrap;
	width:60%;
	margin:6px;
	border-radius:8px;
	padding:12px;
`;