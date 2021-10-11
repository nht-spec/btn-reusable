import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonColorDangerStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: '0px 2px 3px 0px rgb(211 47 47 / 20%)',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: '#D32F2F',
	color: '#FFFFFF',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '104px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],

	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#9A0007',
		boxShadow: '0px 2px 3px 0px rgb(211 47 47 / 20%)',
	},

	'&:focus': {
		boxShadow: '0px 2px 3px 0px rgb(211 47 47 / 20%)',
	},
});

export default function ButtonColorDanger() {
	return (
		<ButtonColorDangerStyle disableRipple='true' variant='contained'>
			Danger
		</ButtonColorDangerStyle>
	);
}
