import db from '$lib/db.js'

export async function load() {
  return {
    leagues: await db.getLeagues()
  }
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let club = {
      club_name: data.get("club_name"),
      year_founded: data.get("year_founded"),
      fk_league: parseInt(data.get("league_id"))
    };

    await db.createClub(club);
    return { success: true };
  },
};