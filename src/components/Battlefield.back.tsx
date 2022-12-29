import React, { ReactNode, FC } from 'react';
import Field from './Field';

interface BattlefieldProp {
	children?: ReactNode;
}
const fieldRow = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const fieldCol = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const genearteField = (x, y) => {
	if (x === 0 && y === 0) return '';
	if (y === 0) return fieldRow[x];
	if (x === 0) return fieldCol[y];
	return '';
};

const Battlefield: FC<BattlefieldProp> = React.memo(({}) => {
	const battelfield: ReactNode[] = [];
	for (let y = 0; y < 11; y++) {
		const row: ReactNode[] = [];
		for (let x = 0; x < 11; x++) {
			row.push(
				<div
					key={`x${x}y${y}`}
					className={`w-[31px] h-[31px] border-black ml-[-1px] mt-[-1px] ${
						x === 0 || y === 0 ? '' : 'bg-white border-[1px]'
					}`}>
					<Field letter={genearteField(x, y)} />
				</div>
			);
		}
		battelfield.push(
			<div className={`flex`} key={y}>
				{row}
			</div>
		);
	}

	return <div className='ml-[-15.5px]'>{battelfield}</div>;
});

export default Battlefield;
