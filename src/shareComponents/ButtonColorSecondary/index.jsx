import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonColorSecondaryStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: '0px 2px 3px 0px rgb(69 90 100 / 20%)',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: '#455A64',
	color: '#FFFFFF',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '104px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],

	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#1C313A',
		boxShadow: '0px 2px 3px 0px rgb(69 90 100 / 20%)',
	},

	'&:focus': {
		boxShadow: '0px 2px 3px 0px rgb(69 90 100 / 20%)',
	},
});

export default function ButtonColorSecondary() {
	return (
		<ButtonColorSecondaryStyle disableRipple='true' variant='contained'>
			Secondary
		</ButtonColorSecondaryStyle>
	);
}
