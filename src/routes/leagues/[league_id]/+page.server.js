import db from '$lib/db'

export async function load({params}) {
    console.log(params);

    let league = await db.getLeague(params.league_id);
    console.log(league)

    let clubs = await db.getClubsOfLeague(params.league_id);
    console.log(clubs)

    return {
        league,
        clubs
    };

}