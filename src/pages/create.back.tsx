import Wave from 'components/Wave';
import Battlefield from 'components/Battlefield';
import React, { ReactNode, FC, useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import ShipMenu from 'components/ShipMenu';
import { AppSlice } from 'store/reducers/appSlice';

interface CreateProp {
	children?: ReactNode;
}

const Create: FC<CreateProp> = ({}) => {
	const dispatch = useAppDispatch();

	const [oneShip, setOneShip] = useState(4);
	const [twoShip, setTwoShip] = useState(3);
	const [threeShip, setThreeShip] = useState(2);
	const [fourShip, setFourShip] = useState(0);

	const [activeShip, setActiveShip] = useState(4);

	const [direction, setDirection] = useState(0);

	const HoverFieldEnterHandler = useCallback(
		(x: number, y: number) => {
			if (x === 0 || y === 0) return;
			dispatch(AppSlice.actions.trySetShip({ x, y, length: activeShip, direction }));
		},
		[activeShip, direction]
	);
	const HoverFieldLeaveHandler = useCallback(
		(x: number, y: number) => {
			if (x === 0 || y === 0) return;
			dispatch(AppSlice.actions.tryRemoveShip({ x, y, length: activeShip, direction }));
		},
		[activeShip, direction]
	);
	const onClickHandler = (x: number, y: number) => {
		switch (activeShip) {
			case 1:
				setOneShip((prev) => prev - 1);
				break;
			case 2:
				setTwoShip((prev) => prev - 1);
				break;
			case 3:
				setThreeShip((prev) => prev - 1);
				break;
			case 4:
				setFourShip((prev) => prev - 1);
				break;
		}
		dispatch(AppSlice.actions.setShip({ x, y, length: activeShip, direction }));
	};
	return (
		<>
			<div className='fixed flex flex-col  items-center h-[85vh] w-full z-10 pt-2'>
				<div className='flex flex-col items-center w-full'>
					<h1 className='text-light-blue text-[1.8em] mb-8'>Создание</h1>
					<ShipMenu
						ships={{ oneShip, twoShip, threeShip, fourShip }}
						active={activeShip}
						setActiveShip={(ship) => {
							// if (ship === activeShip) {

							// }
							// switch (activeShip) {
							// 	case 1:
							// 		setOneShip((prev) => prev - 1);
							// 		break;
							// 	case 2:
							// 		setTwoShip((prev) => prev - 1);
							// 		break;
							// 	case 3:
							// 		setThreeShip((prev) => prev - 1);
							// 		break;
							// 	case 4:
							// 		setFourShip((prev) => prev - 1);
							// 		break;
							// }
							setActiveShip(ship);
						}}
					/>
					<div>
						<button
							className='text-light-blue underline underline-offset-2 ml-[12.5px]'
							onClick={() => setDirection((prev) => (prev === 0 ? 1 : 0))}>
							Повернуть
						</button>
						<Battlefield
							onClickHandler={onClickHandler}
							HoverFieldEnterHandler={HoverFieldEnterHandler}
							HoverFieldLeaveHandler={HoverFieldLeaveHandler}
						/>
					</div>
				</div>
			</div>
			<div className='w-full fixed bottom-[5px] z-20 flex justify-center'>
				{!oneShip && !twoShip && !threeShip && !fourShip ? (
					<button className='font-bold text-7xl text-[#3579a5]  animate-pulse-slow '>В БОЙ!</button>
				) : null}
			</div>
			<Wave height={16}></Wave>
		</>
	);
};

export default Create;
