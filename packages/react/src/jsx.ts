import { REACT_ELEMENT_TYPE } from '../../shared/ReactSymbols';
import type {
	Type,
	Key,
	Ref,
	Props,
	ReactElementType,
	ElementType
} from '../../shared/ReactTypes';
//ReactElement

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'Fanceir'
	};
	return element;
};

/* jsx */
export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let ref: Ref = null;
	let key: Key = null;
	const props: Props = {};
	for (const propKey in config) {
		if (propKey === 'ref') {
			if (config[propKey] !== undefined) {
				ref = config[propKey];
			}
			continue;
		}
		if (propKey === 'key') {
			if (config[propKey] !== undefined) {
				key = '' + config.key;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, propKey)) {
			props[propKey] = config[propKey];
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			const children = Array(maybeChildrenLength);
			for (let i = 0; i < maybeChildrenLength; i++) {
				children[i] = maybeChildren[i];
			}
			props.children = children;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let ref: Ref = null;
	let key: Key = null;
	const props: Props = {};
	for (const propKey in config) {
		if (propKey === 'ref') {
			if (config[propKey] !== undefined) {
				ref = config[propKey];
			}
			continue;
		}
		if (propKey === 'key') {
			if (config[propKey] !== undefined) {
				key = '' + config.key;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, propKey)) {
			props[propKey] = config[propKey];
		}
	}

	return ReactElement(type, key, ref, props);
};
