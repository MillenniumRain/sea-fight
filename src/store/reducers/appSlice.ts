import { emptyBattelfield } from './../../helpers/emptyBattelfield';
import { EField, IBattelfieldMap } from './../../types/battelfield.type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IShip {
	count: number;
	length: number;
}

interface AppState {
	battlefield: IBattelfieldMap;
	battlefieldCopy: IBattelfieldMap;
	stateList: string[];
	ships: IShip[];
	active?: number | null;
	direction: number;
}

const initialState: AppState = {
	ships: [
		{
			count: 4,
			length: 1,
		},
		{
			count: 3,
			length: 2,
		},
		{
			count: 2,
			length: 3,
		},
		{
			count: 1,
			length: 4,
		},
	],
	active: null,
	battlefield: emptyBattelfield,
	battlefieldCopy: emptyBattelfield,
	stateList: [],
	direction: 0,
};
interface ICoords {
	x: number;
	y: number;
}

interface TrySetShipPayload extends ICoords {}
export const AppSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setActive: (state, action: PayloadAction<number>) => {
			if (state.ships[action.payload].count === 0) return;
			state.active = action.payload;
		},
		setDirection: (state) => {
			state.direction = state.direction === 0 ? 1 : 0;
			state.battlefield = state.battlefieldCopy;
		},

		removeShip: (state) => {
			if (state.stateList.length) {
				const currentStateList = state.stateList;
				currentStateList.pop();
				let currentState;
				if (currentStateList.length) {
					currentState = JSON.parse(currentStateList[currentStateList.length - 1]);
				} else {
					currentState = { ships: initialState.ships, battlefield: emptyBattelfield };
				}

				state.ships = currentState.ships;
				state.battlefield = currentState.battlefield;
				state.battlefieldCopy = currentState.battlefield;
				state.stateList = currentStateList;
			}
		},
		setShip: (state, action: PayloadAction<TrySetShipPayload>) => {
			if (state.active >= 0) {
				const length = state.ships[state.active].length;

				const direction = state.direction;
				let directionX;
				let directionY;
				if (direction === 0) {
					directionX = 1;
					directionY = 0;
				} else {
					directionX = 0;
					directionY = 1;
				}
				let memory: { x: number; y: number }[] = [];
				for (let i = 0; i < length; i++) {
					let y = action.payload.y + directionY * i;
					let x = action.payload.x + directionX * i;
					if (x >= state.battlefield.length) {
						x -= length;
					}
					if (y >= state.battlefield.length) {
						y -= length;
					}
					if (
						state.battlefield[y][x] !== EField.EMPTY &&
						state.battlefield[y][x] !== EField.DANGER &&
						state.battlefield[y][x] !== EField.NO_PLACE &&
						state.battlefieldCopy[y][x] === EField.EMPTY
					) {
						memory.push({ x, y });
					}
				}
				if (memory && memory.length === length) {
					memory.map((ship) => {
						state.battlefield[ship.y][ship.x] = EField.SHIP;
					});

					state.ships[state.active].count -= 1;
					state.battlefieldCopy = state.battlefield;
					state.active = null;
					state.stateList.push(JSON.stringify({ battlefield: state.battlefieldCopy, ships: state.ships }));
				}
			}
		},
		trySetShip: (state, action: PayloadAction<TrySetShipPayload>) => {
			if (state.active === null) return;
			const length = state.ships[state.active].length;
			const direction = state.direction;
			let directionX;
			let directionY;
			if (direction === 0) {
				directionX = 1;
				directionY = 0;
			} else {
				directionX = 0;
				directionY = 1;
			}

			for (let i = 0; i < length; i++) {
				let y = action.payload.y + directionY * i;
				let x = action.payload.x + directionX * i;
				if (x >= state.battlefield.length) {
					x -= length;
				}
				if (y >= state.battlefield.length) {
					y -= length;
				}

				state.battlefield[y][x] = EField.PHANTOM_SHIP;

				let breakLoop = false;
				for (let _y = y - 1; _y < y + 2; _y++) {
					for (let _x = x - 1; _x < x + 2; _x++) {
						if (_x > state.battlefield[0].length - 1) continue;
						if (_y > state.battlefield.length - 1) continue;

						if (state.battlefieldCopy[_y][_x] === EField.SHIP) {
							breakLoop = true;
							state.battlefield[y][x] = EField.NO_PLACE;
							break;
						}
					}
					if (breakLoop) break;
				}
				if (state.battlefieldCopy[y][x] === EField.SHIP) {
					state.battlefield[y][x] = EField.DANGER;
				}
			}
		},
		tryRemoveShip: (state, action: PayloadAction<TrySetShipPayload>) => {
			state.battlefield = state.battlefieldCopy;
		},
	},
});

export default AppSlice.reducer;
