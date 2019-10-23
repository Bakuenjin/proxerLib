import Friend from "../../models/Friend";
import LoggedInUser from "../../models/LoggedInUser";
import User from "../../models/User";

/**
 * Resolves any kind of user into its name or id.
 */
export default function resolveUser(user: number | string | Friend | LoggedInUser | User ): number | string {
    if (typeof user === 'number' || typeof user === 'string')
        return user
    else return user.id
}