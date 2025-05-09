import db from '$lib/db'

export async function load() {
    return {
        leagues: await db.getLeagues()
    }
}