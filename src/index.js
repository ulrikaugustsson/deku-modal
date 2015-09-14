import element from 'virtual-element';
import {render, tree} from 'deku';

const Modal = {
	render(component) {
		const {props} = component;

		return (<div class="Modal">{props.children}<div>);
	}
};

function modal(childComponent) {
	const modalMountNode = document.createElement('div');

	document.body.appendChild(modalMountNode);

	const modalPromise = new Promise ((resolve, reject) => {
		const modalTree = tree(<Modal><childComponent accept={resolve} cancel={reject}/></Modal>);
		render(modalMountNode, modalTree);
	});

	function modalCleanup() {
		document.body.removeChild(modalMountNode);
	}

	modalPromise.then(modalCleanup, modalCleanup);

	return modalPromise;
}

export modal;
