
export default function BodyContent() {
	return (
		<div className=' relative'>
			<div className='flex flex-col gap-5 items-center justify-center text-black py-14'>
				<p className='text-center w-2/3 font-light'>
					Nunito connects everyone in the design process so team can deliver
					better products, faster. 🤘
				</p>

				<button className='bg-black text-white font-semibold text-sm px-4 p-2 cursor-pointer rounded-3xl'>
					Try if for free
				</button>

				<p className='text-xs font-semibold underline cursor-pointer'>
					See how it works
				</p>
			</div>
			<img src='/star1.svg' className='size-20 absolute top-10 left-10' />
			<img src='/star2.svg' className='size-5 absolute top-20 right-10' />
		</div>
	);
}
