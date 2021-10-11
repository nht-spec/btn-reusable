import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonSizeMDStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: '0px 2px 3px 0px rgb(0 49 202 / 20%)',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: '#2962FF',
	color: 'white',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '81px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],

	'&:hover': {
		borderColor: 'none',
		boxShadow: '0px 2px 3px 0px rgb(0 49 202 / 20%)',
		backgroundColor: '#2962FF',
	},
});

export default function ButtonSizeMD() {
	return (
		<ButtonSizeMDStyle disableRipple='true' variant='contained'>
			Default
		</ButtonSizeMDStyle>
	);
}
