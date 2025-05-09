import db from '$lib/db.js'

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let league = {
      league_name: data.get("league_name"),
      league_country: data.get("league_country")
    };

    await db.createLeague(league);
    return { success: true };
  },
};