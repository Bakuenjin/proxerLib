export default class UrlBuilder {
    
    private _data: {
        baseUrl: string
    }

    constructor(baseUrl: string) {
        if (!baseUrl.endsWith('/'))
            baseUrl += '/'
        
        this._data = { baseUrl }
    }

    get baseUrl(): string {
        return this._data.baseUrl
    }

    private cleanUrlChunk(chunk: string): string {
        if (chunk.startsWith('/'))
            chunk = chunk.slice(1)
        if (chunk.endsWith('/'))
            chunk = chunk.slice(0, -1)
        return chunk
    }

    /**
     * Builds the url by connecting the base url and the specified url chunks.
     */
    build(...chunks: string[]): string {
        const cleanedChunks = chunks.map(chunk => this.cleanUrlChunk(chunk))
        const chunksString = cleanedChunks.join('/')
        return this.baseUrl + chunksString
    }

}