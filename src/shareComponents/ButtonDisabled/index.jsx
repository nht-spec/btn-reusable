import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonDisabledStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: '0px 2px 3px 0px rgb(51 51 51 / 20%)',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: '#E0E0E0',
	color: '#9E9E9E',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '81px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],
});

export default function ButtonDisabled() {
	return (
		<ButtonDisabledStyle
			disabled='true'
			disableRipple='true'
			variant='contained'
		>
			Disabled
		</ButtonDisabledStyle>
	);
}
