import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonOutLineStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: 'none',
	border: '1px solid #3D5AFE',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: 'none',
	color: '#3D5AFE',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '81px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],
	'&:hover': {
		color: '#3D5AFE',
		backgroundColor: 'rgba(41, 98, 255, 0.1)',

		boxShadow: 'none',
	},
	'&:focus': {
		boxShadow: 'none',
	},
});

export default function ButtonOutline() {
	return (
		<ButtonOutLineStyle disableRipple='true' variant='outlined'>
			Default
		</ButtonOutLineStyle>
	);
}
