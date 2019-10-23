import ContentCategory from "../../../models/enums/ContentCategory"
import UserContentListSort from "../../../models/enums/UserContentListSort"
import ContentStateFilter from "../../../models/enums/ContentStateFilter"

export type OptionalUserLoginParams = {
    /**
     * The key of the 2FA, if the user has this service activated.
     */
    secretKey?: string
}

export type OptionalUserInfoParams = {
    /**
     * The unique ID of the user.
     */
    userId?: number,
    /**
     * The name of the user.
     */
    username?: string
}

export type OptionalUserTopTenParams = {
    /**
     * The unique ID of the user.
     */
    userId?: number,
    /**
     * The name of the user.
     */
    username?: string,
    /**
     * The category of the content. `anime` or `manga`.
     */
    category?: ContentCategory,
    /**
     * Should hentai be included?
     */
    includeHentai?: boolean
}

export type OptionalUserListParams = {
    /**
     * The unique ID of the user.
     */
    userId?: number,
    /**
     * The name of the user.
     */
    username?: string,
    /**
     * The category of the content. `anime` or `manga`.
     */
    category?: ContentCategory,
    /**
     * Results are returned in pages.
     * With this index, the page number can be defined.
     */
    pageIndex?: number,
    /**
     * The amount of results per page.
     */
    resultsPerPage?: number,
    /**
     * Only shows results that include this text as a substring **anywhere** in their name.
     */
    searchText?: string,
    /**
     * Only shows results that **begin** with this text in their name.
     */
    searchStartText?: string,
    /**
     * Should hentai be included?
     */
    includeHentai?: boolean,
    /**
     * Define the way the results should be sorted.
     */
    sortType?: UserContentListSort,
    /**
     * Filters results based on the watch status of the user.
     */
    filter?: ContentStateFilter
}

export type OptionalUserLatestCommentsParams = {
    /**
     * The unique ID of the user.
     */
    userId?: number,
    /**
     * The name of the user.
     */
    username?: string,
    /**
     * The category of the content. `anime` or `manga`.
     */
    category?: ContentCategory,
    /**
     * Results are returned in pages.
     * With this index, the page number can be defined.
     */
    pageIndex?: number,
    /**
     * The amount of results per page.
     */
    resultsPerPage?: number,
    /**
     * The minimum character length of a comment.
     */
    minCommentLength?: number,
    /**
     * Filters the comments based on the specified states.
     */
    contentState?: number[],
    /**
     * Filters the comments by the type of data they in include.
     * Comments can have a rating, a comment text or both.
     */
    showCommentsWith: CommentDetail
}

export type OptionalUserHistoryParams = {
    /**
     * The unique ID of the user.
     */
    userId?: number,
    /**
     * The name of the user.
     */
    username?: string,
    /**
     * Results are returned in pages.
     * With this index, the page number can be defined.
     */
    pageIndex?: number,
    /**
     * The amount of results per page.
     */
    resultsPerPage?: number
}