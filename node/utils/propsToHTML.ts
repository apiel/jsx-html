import { NodePropsType } from '../../types.ts';
import { htmlEncode } from './htmlEncode.ts';

export const ELEMENT_PROP = {
    INNER_HTML: 'innerHTML',
};

function getValidProps(props: NodePropsType) {
    return Object.keys(props).filter((key) => {
        if (key === ELEMENT_PROP.INNER_HTML) {
            return false;
        }
        const val = props[key];
        return (
            typeof val === 'string' || typeof val === 'number' || val === true
        );
    });
}

export function propsToHTML(props: NodePropsType): string {
    const keys = getValidProps(props);
    if (!keys.length) {
        return '';
    }

    const pairs = keys.map((key) => {
        const val = props[key];

        if (val === true || val === '') {
            return htmlEncode(key);
        }
        return `${htmlEncode(key)}="${htmlEncode(val.toString())}"`;
    });

    return ` ${pairs.join(' ')}`;
}
