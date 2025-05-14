import db from '$lib/db.js'

export async function load() {
  return {
    clubs: await db.getClubs()
  }
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let player = {
      player_name: data.get("player_name"),
      birthdate: data.get("birthdate"),
      nationality: data.get("nationality"),
      position: data.get("position"),
      club_id: parseInt(data.get("club_id"))
    };

    await db.createPlayer(player);
    return { success: true };
  },
};