import Wave from 'components/Wave';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useRouter } from 'next/router';
import React, { ReactNode, FC, useEffect } from 'react';
import { AppSlice } from 'store/reducers/appSlice';

interface HomeProp {
	children?: ReactNode;
}

const Home: FC<HomeProp> = ({}) => {
	const router = useRouter();
	const loginHandler = (e) => {
		e.preventDefault();
		router.push('/create');
	};
	return (
		<>
			<Wave>
				<div className='flex flex-col relative z-10 w-[310px] justify-center items-center text-2xl text-white  mt-[25vh]'>
					<div className='w-full  z-20 flex justify-center mb-10'>
						<button className='font-bold text-7xl text-[#3579a5]  animate-pulse-slow '>МОРСКОЙ БОЙ!</button>
					</div>
					<div className={`flex gap-4  mb-7`}>
						<h1 className='text-light-blue cursor-pointer'>Регистрация</h1>{' '}
						<h1 className='border-b-[.15em] border-white cursor-pointer'>Авторизация</h1>
					</div>
					<form
						className={`flex flex-col gap-4 text-lg text-white w-full`}
						onSubmit={(e) => {
							loginHandler(e);
						}}>
						<input
							type='text'
							placeholder='Логин'
							className='bg-transparent border-b-[3px] border-[rgba(255,255,255,50%)] placeholder-[rgba(255,255,255,50%)] mb-2'
						/>
						<input
							type='password'
							placeholder='Пароль'
							className='bg-transparent border-b-[3px] border-[rgba(255,255,255,50%)] placeholder-[rgba(255,255,255,50%)]  '
						/>
						<div className={`flex`}>
							<input type='checkbox' name='' id='' className={`mr-3 cursor-pointer`} />
							<span className=' text-white/50 cursor-pointer'>Запомнить меня</span>
						</div>
						<button type='submit' className='mx-auto border-[1px] border-white rounded-full py-2 px-6'>
							Войти
						</button>
					</form>
				</div>
			</Wave>
		</>
	);
};

export default Home;
