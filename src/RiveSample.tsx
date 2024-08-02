import Rive from '@rive-app/react-canvas';

export const Simple = () => (
	<Rive
		src='/background.riv'
		className='h-full w-full object-cover '
		artboard='page'
		stateMachines={'State Machine 1'}
	/>
);
