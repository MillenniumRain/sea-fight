import Image from 'next/image';
import React, { ReactNode, FC } from 'react';
import { EField } from 'types/battelfield.type';
import crossImage from 'static/assets/svg/cross.svg';

interface FieldProp {
	children?: ReactNode;
	letter?: string;
}

const Field: FC<FieldProp> = React.memo(({ letter }) => {
	console.log(1);
	switch (letter) {
		case EField.DEAD:
			return (
				<div className='w-full h-full bg-[#13537c] border-[1px] border-white flex justify-center items-center'>
					<Image alt='' src={crossImage} className='to-white' />
				</div>
			);
		case EField.EMPTY:
			return null;
		case EField.WOUNDED:
			return (
				<div className='w-full h-full flex bg-light-blue border-[1px] border-white justify-center items-center '>
					<Image alt='' className='to-white' src={crossImage} />
				</div>
			);
		case EField.MISS:
			return (
				<div className='w-full h-full flex justify-center items-center '>
					<Image alt='' src={crossImage} />
				</div>
			);
		case EField.NO_PLACE:
			return (
				<div className='w-full h-full bg-red-300 border-[1px] border-white flex justify-center items-center'>
					<Image alt='' className='to-light-red' src={crossImage} />
				</div>
			);
		case EField.DANGER:
			return <div className='w-full h-full bg-red-800 border-[1px] border-white'></div>;
		case EField.PHANTOM_SHIP:
			return <div className='w-full h-full bg-light-blue/50 border-[1px] border-white'></div>;
		case EField.SHIP:
			return <div className='w-full h-full bg-light-blue border-[1px] border-white'></div>;

		default:
			return <div className='w-full h-full flex justify-center items-center'>{letter}</div>;
	}
});

export default Field;
