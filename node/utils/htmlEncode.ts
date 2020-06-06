export function doubleQuoteEncode(text: string): string {
    return text
        .replace(/"/g, '&quot;')
}

export function htmlEncode(text: string): string {
    return doubleQuoteEncode(text
        .replace(/&/g, '&amp;')
        .replace(/\//g, '&#x2F;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;'));
}