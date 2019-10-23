/**
 * Converts the first layer of any JS object into a query string.
 * It skips all undefined values.
 */
export default function convertJsonToQuery(data: { [key: string]: any} ): string {
    const keys = Object.keys(data)
    const filteredKeys = keys.filter(key => (typeof data[key] !== 'undefined'))
    const queryData = filteredKeys.map(key => `${key}=${data[key]}`)
    return queryData.join('&')
}