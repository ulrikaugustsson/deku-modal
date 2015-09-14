import element from 'virtual-element';
import {render, tree} from 'deku';

function modal(modalComponent, attributes) {
	const modalMountNode = document.createElement('div');

	document.body.appendChild(modalMountNode);

	const modalPromise = new Promise ((resolve, reject) => {
		const modalTree = tree(<modalComponent accept={resolve} cancel={reject} {...attributes} />);
		render(modalMountNode, modalTree);
	});

	function modalCleanup() {
		document.body.removeChild(modalMountNode);
	}

	modalPromise.then(modalCleanup, modalCleanup);

	return modalPromise;
}

export default modal;
