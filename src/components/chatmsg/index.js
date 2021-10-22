import Styled from 'styled-components';
import Flex from '../flex';


const Msgbox = ({isSent, message}) => {

	return (
		<MessageWrapper isSent={isSent}>
			<MessageBox isSent={isSent}>
				<span>
					{message}
				</span>
			</MessageBox>
		</MessageWrapper>
	);
};

const MessageWrapper = Styled(Flex)`
	flex-direction:column;
	align-items:${props => props.isSent ? 'flex-end' : 'flex-start'};
`;

const MessageBox = Styled(Flex)`
	overflow-wrap: anywhere;
	white-space: pre-wrap;
	width:55%;
	margin:6px;
	border-radius:8px;
	padding:8px;
	background-color:${props => props.isSent ? 'Teal' : 'dimgrey'};
	justify-content:flex-start;
	color:white;
`;

export default Msgbox;