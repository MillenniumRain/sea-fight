import { useAppSelector } from 'hooks/reduxHooks';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	try {
		res.status(200).json('');
	} catch (e) {
		console.log(e);
	}
};
