import db from '$lib/db'

export async function load({params}) {
    console.log(params);

    let league = await db.getLeague(params.league_id);
    console.log(league)

    let clubs = await db.getClubsOfLeague(params.league_id);
    console.log(clubs)

    let clubIds = clubs.map(club => club._id);
    let players = await db.getPlayersOfLeague(clubIds);
    console.log(players)

    return {
        league,
        clubs,
        players
    };

}