import Image from 'next/image';
import React, { ReactNode, FC } from 'react';
import ship from 'static/assets/images/ship.png';
interface WaveProp {
	children?: ReactNode;
	height?: number;
}

const Wave: FC<WaveProp> = ({ children, height = 85 }) => {
	return (
		<div className='fixed w-[100vw] h-[100vh] overflow-hidden'>
			<div
				className={`relative min-h-[100vh] flex justify-center items-center ${
					height === 85 ? 'ocean' : 'bg-[#13537C]'
				} `}>
				{children}
				<div className='first-wave' style={{ bottom: `${height}vh` }}>
					<Image src={ship} alt={'ship'} className='relative mx-auto bottom-[5px] rotate-[185deg]' />
				</div>
				<div className='second-wave' style={{ bottom: `${height - 2.5}vh` }}></div>
				<div className='third-wave' style={{ bottom: `${height - 5}vh` }}></div>
			</div>
		</div>
	);
};

export default Wave;
