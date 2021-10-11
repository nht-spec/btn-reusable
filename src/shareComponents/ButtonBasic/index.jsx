import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonBasicStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: '0px 2px 3px 0px rgb(51 51 51 / 20%)',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: '#E0E0E0',
	color: '#3F3F3F',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '81px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],

	'&:hover': {
		color: '#3F3F3F',
		backgroundColor: '#AEAEAE',
		boxShadow: '0px 2px 3px 0px rgb(51 51 51 / 20%)',
	},

	'&:focus': {
		boxShadow: '0px 2px 3px 0px rgb(51 51 51 / 20%)',
	},
});

export default function ButtonBasic() {
	return (
		<ButtonBasicStyle disableRipple='true' variant='contained'>
			Default
		</ButtonBasicStyle>
	);
}
