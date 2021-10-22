import Styled from 'styled-components';


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

export default Flex;