import React, { createRef } from 'react';
import './styles/index.less';

type Props = {
	// using `interface` is also ok
	text: string;
	placeholder?: string;
} & typeof CMGRichTextEditor.defaultProps;
type State = {
	count: number; // like this
};


class CMGRichTextEditor extends React.Component<Props, State> {

	static defaultProps = {
		text: '',
		placeholder: '请输入内容'
	};

	private textareaRef = createRef<HTMLTextAreaElement>();

	getSelection() {
		console.log(window.getSelection())
		const { focusNode, anchorOffset, focusOffset, anchorNode } = window.getSelection();
		let fhtml = focusNode.parentElement.innerHTML;
		let ahml = anchorNode.parentElement.innerHTML;
		let temp = ahml;
		let rep = window.getSelection().toString();
		let span = `<span class="ss" data-siex="11">1111111111</span>`;
		let start = anchorOffset < focusOffset ? anchorOffset : focusOffset;
		let end = anchorOffset > focusOffset ? anchorOffset : focusOffset;
		let reg = new RegExp(`${ rep }`)
		if ( focusNode.nodeValue === anchorNode.nodeValue ) {

			span =
				`<span class="ss" data-siex="11">${ rep }</span>`;
			// console.log(fhtml, span)
			focusNode.parentElement.innerHTML = fhtml.replace(reg, span);
		} else {
			span =
				`<span class="gg" data-siex="11">${ rep }</span>`;
			let fv = focusNode.nodeValue.substring(0, focusOffset);
			let fv1 = focusNode.toString();
			let av = anchorNode.nodeValue.substring(0, anchorOffset);
			let av1 = anchorNode.toString();
			fhtml = fhtml.replace(fv1, fv);
			fhtml = fhtml.replace(av1, av);

			// console.log(ahml, fhtml)
			// anchorNode.parentElement.innerHTML = '21';
			// focusNode.parentElement.innerHTML = fhtml;
		}

		console.log(focusNode, focusOffset,
			anchorOffset, anchorNode,
			rep, reg, fhtml, ahml)


	}

	render() {
		return (
			<main className="CMG-rich-text-editor">
				<section className="CMG-rich-text-editor-tool-bar">
					<section className="styles">
						<section className="size-clear">
							<button onClick={ () => this.getSelection() }>get</button>
						</section>
						<section className="theme">

						</section>
					</section>
					<section className="typography">
						<section className="">

						</section>
						<section className="">

						</section>
					</section>
				</section>
				<section className="CMG-rich-text-editor-container" contentEditable={ true }>

				</section>
			</main>
		);
	}
}


export default CMGRichTextEditor;
