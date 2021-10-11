import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonTextDisabledStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: 'none',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: 'none',
	color: '#9E9E9E',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '81px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],
});

export default function ButtonTextDisabled() {
	return (
		<ButtonTextDisabledStyle
			disabled='true'
			disableRipple='true'
			variant='text'
		>
			Disabled
		</ButtonTextDisabledStyle>
	);
}
