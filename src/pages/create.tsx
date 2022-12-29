import Wave from 'components/Wave';
import Battlefield from 'components/Battlefield';
import React, { ReactNode, FC, useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import ShipMenu from 'components/ShipMenu';
import { AppSlice } from 'store/reducers/appSlice';
import { IShip } from 'types/battelfield.type';
import ShipTemplate from 'components/ShipTemplate';

interface CreateProp {
	children?: ReactNode;
}

const Create: FC<CreateProp> = ({}) => {
	const dispatch = useAppDispatch();
	const ships = useAppSelector((state) => state.app.ships);
	const activeShip = useAppSelector((state) => state.app.active);
	const direction = useAppSelector((state) => state.app.direction);

	const HoverFieldEnterHandler = useCallback(
		(x: number, y: number) => {
			if (x === 0 || y === 0) return;
			dispatch(AppSlice.actions.trySetShip({ x, y }));
		},
		[activeShip, direction]
	);
	const HoverFieldLeaveHandler = useCallback(
		(x: number, y: number) => {
			if (x === 0 || y === 0) return;
			dispatch(AppSlice.actions.tryRemoveShip({ x, y }));
		},
		[activeShip, direction]
	);
	const onClickHandler = (x: number, y: number) => {
		dispatch(AppSlice.actions.setShip({ x, y }));
	};
	return (
		<>
			<div className='fixed flex flex-col  items-center h-[85vh] w-full z-10 pt-2'>
				<div className='flex flex-col items-center w-full'>
					<h1 className='text-light-blue text-[1.8em] mb-8'>Создание</h1>
					<ShipMenu
						ships={ships}
						active={activeShip}
						setActiveShip={(activeShip) => {
							dispatch(AppSlice.actions.setActive(activeShip));
						}}
					/>
					<div
						onContextMenu={(e) => {
							e.preventDefault();
							dispatch(AppSlice.actions.setDirection());
						}}>
						<div className='flex justify-between'>
							<button
								className='text-light-blue underline underline-offset-2 ml-[12.5px] flex mb-4'
								onClick={() => dispatch(AppSlice.actions.setDirection())}>
								<span className='mr-2'>Повернуть</span>
								{activeShip !== null ? (
									<div className={`flex items-center ${direction === 1 ? 'rotate-90' : ''}`}>
										<ShipTemplate length={activeShip + 1} count={1} width={15} />
									</div>
								) : null}
							</button>
							<button
								className='text-light-blue underline underline-offset-2 ml-[12.5px] flex mb-4'
								onClick={() => dispatch(AppSlice.actions.removeShip())}>
								<span className=''>Отменить</span>
							</button>
						</div>
						<Battlefield
							onClickHandler={onClickHandler}
							HoverFieldEnterHandler={HoverFieldEnterHandler}
							HoverFieldLeaveHandler={HoverFieldLeaveHandler}
						/>
					</div>
				</div>
			</div>
			<div className='w-full fixed bottom-[5px] z-20 flex justify-center'>
				{!ships[0]?.count && !ships[1]?.count && !ships[2]?.count && !ships[3]?.count ? (
					<button className='font-bold text-7xl text-[#3579a5]  animate-pulse-slow '>В БОЙ!</button>
				) : null}
			</div>
			<Wave height={16}></Wave>
		</>
	);
};

export default Create;
