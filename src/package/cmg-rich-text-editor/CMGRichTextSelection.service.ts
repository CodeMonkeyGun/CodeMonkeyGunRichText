import React from 'react';
import { TextEditActionTypes, TextEditStyleAttrs } from '@core/types';



type Params = {
	styleAttr: TextEditStyleAttrs;
	actions: TextEditActionTypes;
	styleValue?: string;
};

export class CMGRichTextSelectionService {

	constructor() {
	}

	determineStatusOfText(params: Params) {
		const {focusOffset, focusNode, anchorNode, anchorOffset} = window.getSelection();
		if (focusNode === anchorNode) {
			switch ( params.actions) {
				case 'add':
					CMGRichTextSelectionService.addStyleToText(focusNode, params.styleAttr, params.styleValue);
					break
				case 'change':
					CMGRichTextSelectionService.changeStyleToText(focusNode, params.styleAttr, params.styleValue);
					break
				case 'clear':
					CMGRichTextSelectionService.removeStyleToText(focusNode, params.styleAttr);
					break
				default:
					return
			}
		}
		else {}
	}

	private isHasTagNode(target: Node) {

	}

	private static addStyleToText(target: Node, attr: TextEditStyleAttrs, value?: string) {
		if (!value) {
			value = null;
		}
		target.parentElement.setAttribute(attr, value)
	}

	private static changeStyleToText(target: Node, attr: TextEditStyleAttrs, value: string) {
		target.parentElement.setAttribute(attr, value)
	}

	private static removeStyleToText(target: Node, attr: TextEditStyleAttrs) {
		target.parentElement.removeAttribute(attr);
	}
};


