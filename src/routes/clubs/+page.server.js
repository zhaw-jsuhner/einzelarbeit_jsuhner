import db from '$lib/db'

export async function load() {
    return {
        clubs: await db.getClubs()
    }
}