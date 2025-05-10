import db from '$lib/db.js'

// export async function load() {
//     return {
//         clubs: await db.getClubs()
//     }
// }

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let club = {
      club_name: data.get("club_name"),
      year_founded: data.get("year_founded")
    };

    await db.createClub(club);
    return { success: true };
  },
};