import Rive from '@rive-app/react-canvas';

export default function Pointer() {
	return (
		<Rive
			src='/pointer.riv'
			className='h-full w-full object-cover '
			artboard='Artboard'
			stateMachines={'State Machine 1'}
		/>
	);
}
