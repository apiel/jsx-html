export function doubleQuoteEncode(text) {
  return text.replace(/"/g, '&quot;');
}
export function htmlEncode(text) {
  return doubleQuoteEncode(text.replace(/&/g, '&amp;').replace(/\//g, '&#x2F;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;'));
}