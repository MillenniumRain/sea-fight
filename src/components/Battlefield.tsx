import { useAppSelector } from 'hooks/reduxHooks';
import React, { ReactNode, FC, useCallback, useLayoutEffect, useRef, useEffect, useState } from 'react';
import Field from './Field';

interface BattlefieldProp {
	children?: ReactNode;
	HoverFieldEnterHandler: (x: number, y: number) => void;
	HoverFieldLeaveHandler: (x: number, y: number) => void;
	onClickHandler: (x: number, y: number) => void;
}

const Battlefield: FC<BattlefieldProp> = React.memo(
	({ HoverFieldEnterHandler, HoverFieldLeaveHandler, onClickHandler }) => {
		const battlefield = useAppSelector((state) => state.app.battlefield);
		const battelfieldNode: ReactNode[] = [];
		const [width, setWidth] = useState(null);

		useEffect(() => {
			setWidth(Math.floor(window.innerWidth / 11) + 'px');
		}, []);

		if (!width) return null;

		for (let y = 0; y < 11; y++) {
			const row: ReactNode[] = [];
			for (let x = 0; x < 11; x++) {
				row.push(
					<div
						onMouseEnter={() => HoverFieldEnterHandler(x, y)}
						onMouseLeave={() => HoverFieldLeaveHandler(x, y)}
						onClick={() => onClickHandler(x, y)}
						key={`${x}${y}`}
						className={`max-w-[50px] max-h-[50px] border-black ml-[-1px] mt-[-1px] ${
							x === 0 || y === 0 ? '' : 'bg-white border-[1px]'
						}`}
						style={{ width: width, height: width }}>
						<Field letter={battlefield[y][x]} />
					</div>
				);
			}
			battelfieldNode.push(
				<div className={`flex`} key={y}>
					{row}
				</div>
			);
		}

		return <div className='ml-[-15.5px]'>{battelfieldNode}</div>;
	}
);

export default Battlefield;
