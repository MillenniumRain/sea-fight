import React, { ReactNode, FC } from 'react';
import ShipTemplate from './ShipTemplate';

export interface IShip {
	count: number;
	length: number;
}

interface ShipMenuProp {
	children?: ReactNode;
	ships: IShip[];
	active: number;
	setActiveShip: (ship: number) => void;
}
const ShipMenu: FC<ShipMenuProp> = ({ ships, active, setActiveShip }) => {
	const color = (number: number) => {
		if (number) return 'bg-light-blue';
		return 'bg-gray-400';
	};

	return (
		<div className='flex justify-evenly w-full mb-4 max-w-[450px] flex-wrap'>
			{ships?.map((ship, index) => {
				return (
					<div
						className='flex flex-col items-center justify-center  cursor-pointer'
						key={ship.length}
						onClick={() => {
							setActiveShip(index);
						}}>
						<div
							className={`flex mb-2 ${
								active === index ? 'outline outline-2 outline-black -outline-offset-3 ' : ''
							}`}>
							<ShipTemplate length={ship.length} count={ship.count} />
						</div>
						<div className={`${ship.count === 0 ? 'text-gray-400' : ''}`}>{ship.count}</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShipMenu;
