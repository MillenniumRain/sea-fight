import Link from 'next/link';
import React, { ReactNode, FC } from 'react';

interface HeaderProp {}

const links = [
	{ title: 'Главная', path: '/' },
	{ title: 'Создание', path: '/create' },
];

const Header: FC<HeaderProp> = ({}) => {
	return (
		<div className='flex gap-4'>
			{links.map((link) => {
				return (
					<Link key={link.path} className='border-1 border-black' href={link.path}>
						{link.title}
					</Link>
				);
			})}
		</div>
	);
};

export default Header;
