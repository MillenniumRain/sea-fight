import React, { ReactNode, FC } from 'react';

interface ShipTemplateProp {
	children?: ReactNode;
	length: number;
	width?: number;
	count?: number;
}

const ShipTemplate: FC<ShipTemplateProp> = ({ length, count, width }) => {
	const shipTemaplate = Array(length)
		.fill('')
		.map((i, index) => {
			return (
				<div
					key={'a' + index}
					className={`w-[29px] h-[29px] ${count ? 'bg-light-blue' : 'bg-gray-400'} border-[1px] border-white`}
					style={{ width: width + 'px', height: width + 'px' }}></div>
			);
		});

	return <>{shipTemaplate}</>;
};

export default ShipTemplate;
