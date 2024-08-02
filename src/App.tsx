import BodyContent from './BodyContent';
import Header from './Header';
import { Simple } from './RiveSample';

function App() {
	return (
		<div className='w-full flex flex-col items-center  font-bold bg-[#f8f9fa] pb-20'>
			<Header />
			<div className='lg:h-screen lg:max-h-screen sm:max-h-72 w-[90vw]'>
				<Simple />
			</div>
			<BodyContent />
		</div>
	);
}

export default App;
