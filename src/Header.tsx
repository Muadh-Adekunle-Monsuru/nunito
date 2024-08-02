
export default function Header() {
	return (
		<nav className='py-4 flex items-center justify-center md:justify-between text-black w-full lg:px-20 px-4'>
			<div className='flex items-center gap-12'>
				<div className='text-4xl font-extrabold cursor-pointer select-none blur-[0.4px]'>
					nunito
				</div>
				<div className='lg:flex gap-5 hidden text-sm font-normal blur-[0.3px] '>
					<p className='cursor-pointer'>Product</p>
					<p className='cursor-pointer'>Pricing</p>
					<p className='cursor-pointer'>Company</p>
					<p className='cursor-pointer'>Jobs</p>
				</div>
			</div>
			<div className='md:flex gap-4 font-medium items-center hidden'>
				<p>Login</p>
				<p className='p-1 px-3 border-2 border-black rounded-3xl'>Sign up</p>
			</div>
		</nav>
	);
}
