import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonDisableShadowStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: 'none',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: '#3D5AFE',
	color: '#FFFFFF',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '81px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],

	'&:hover': {
		borderColor: 'none',
		boxShadow: 'none',
		backgroundColor: '#3D5AFE',
	},
});

export default function ButtonDisableShadow() {
	return (
		<ButtonDisableShadowStyle disableRipple='true' variant='contained'>
			Default
		</ButtonDisableShadowStyle>
	);
}
