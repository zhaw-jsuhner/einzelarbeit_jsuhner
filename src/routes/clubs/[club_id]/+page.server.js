import db from '$lib/db'

export async function load({params}) {

    let club = await db.getClub(params.club_id);
    console.log(club)

    let league = await db.getLeague(club.fk_league);
    console.log(league)

    let players = await db.getPlayersOfClub(params.club_id);
    console.log(players)

    return {
        club,
        league,
        players
    };

}