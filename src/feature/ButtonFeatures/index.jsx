import React from 'react';
import style from './style.scss';
import ButtonBasic from '../../shareComponents/ButtonBasic';
import ButtonColorDefault from '../../shareComponents/ButtonColorDefault';
import ButtonColorPrimary from '../../shareComponents/ButtonColorPrimary';
import ButtonColorSecondary from '../../shareComponents/ButtonColorSecondary';
import ButtonDisabled from '../../shareComponents/ButtonDisabled';
import ButtonDisableShadow from '../../shareComponents/ButtonDisableShadow';
import ButtonEndIcon from '../../shareComponents/ButtonEndIcon';
import ButtonOutline from '../../shareComponents/ButtonOutline';
import ButtonSizeLG from '../../shareComponents/ButtonSizeLG';
import ButtonSizeMD from '../../shareComponents/ButtonSizeMD';
import ButtonSizeSM from '../../shareComponents/ButtonSizeSM';
import ButtonStartIcon from '../../shareComponents/ButtonStartIcon';
import ButtonText from '../../shareComponents/ButtonText';
import ButtonTextDisabled from '../../shareComponents/ButtonTextDisabled';
import ButtonColorDanger from '../../shareComponents/ButtonColorDanger';
ButtonFeatures.propTypes = {};

function ButtonFeatures() {
	return (
		<div className='btn'>
			<div className='btn-list'>
				<ButtonBasic />
				<ButtonOutline />
				<ButtonText />
			</div>

			<div className='btn-list'>
				<ButtonDisableShadow />
				<ButtonDisabled />
				<ButtonTextDisabled />
			</div>

			<div className='btn-list'>
				<ButtonStartIcon />
				<ButtonEndIcon />
			</div>

			<div className='btn-list'>
				<ButtonSizeSM />
				<ButtonSizeMD />
				<ButtonSizeLG />
			</div>

			<div className='btn-list'>
				<ButtonColorDefault />
				<ButtonColorPrimary />
				<ButtonColorSecondary />
				<ButtonColorDanger />
			</div>
		</div>
	);
}

export default ButtonFeatures;
