/**
 * Converts the first layer of any JS object into a query string.
 */
export default function convertJsonToQuery(data: { [key: string]: any} ): string {
    const keys = Object.keys(data)
    const queryData = keys.map(key => `${key}=${data[key]}`)
    return queryData.join('&')
}