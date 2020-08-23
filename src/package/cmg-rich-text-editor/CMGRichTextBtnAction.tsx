import React from 'react';
import { CMGRichTextSelectionService } from './CMGRichTextSelection.service';
import { TextEditActionTypes, TextEditStyleAttrs } from '@core/types';

type Props = {
	direct: TextEditActionTypes;
	label: string;
	disabled?: boolean;
	attr?: TextEditStyleAttrs,
	value: string;
}

type State = {
	value: string;
}

const CMGRichTextSelectionSvc = new CMGRichTextSelectionService();

class CMGRichTextBtnAction extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			value: this.props.value
		};
	}

	static defaultProps = {
		direct: 'add',
		label: '',
		disabled: false,
		attr: 'fontSize'
	};

	handleClick() {
		CMGRichTextSelectionSvc.determineStatusOfText({
			actions: this.props.direct,
			styleAttr: this.props.attr,
			styleValue: this.state.value
		})
	}

	render() {
		return (
			<button></button>
		);
	}
}

export default CMGRichTextBtnAction;
