import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const ButtonEndIconStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: '0px 2px 3px 0px rgb(0 49 202 / 20%)',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: '#2962FF',
	color: 'while',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '105px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],

	'&:hover': {
		borderColor: 'none',
		boxShadow: '0px 2px 3px 0px rgb(0 49 202 / 20%)',
		backgroundColor: '#2962FF',
	},
});

export default function ButtonEndIcon() {
	return (
		<ButtonEndIconStyle
			disableRipple='true'
			endIcon={<AddShoppingCartIcon />}
			variant='contained'
		>
			Default
		</ButtonEndIconStyle>
	);
}
