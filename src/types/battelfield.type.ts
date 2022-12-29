export enum EField {
	EMPTY = '',
	MISS = 'MISS',
	SHIP = 'SHIP',
	DEAD = 'DEAD',
	WOUNDED = 'WOUNDED',
	PHANTOM_SHIP = 'PHANTOM_SHIP',
	NO_PLACE = 'NO_PLACE',
	DANGER = 'DANGER',
}
export interface IShip {
	x: number;
	y: number;
	length: number;
}
type Letters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';
type Numbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

type Field = keyof typeof EField | '' | Letters | Numbers;
export type IBattelfieldMap = Field[][];

// export enum EField {
// 	EMPTY = '',
// 	MISS = 'MISS',
// 	SHIP = 'SHIP',
// 	DEAD = 'DEAD',
// 	WOUNDED = 'WOUNDED',
// }
// type Field = keyof typeof EField | '' | Letters | Numbers;
// export type IBattelfieldMapCreate = Field[][];
// export interface IBattelfield {
// 	map: typeof MISS | typeof EMPTY | typeof SHIP | typeof DEAD;
// }
