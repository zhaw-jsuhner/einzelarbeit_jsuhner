import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Football_Database"); // select database


//Get ID Count of Leagues
async function countLeagues() {
  try {
    const collection = db.collection("leagues");
    const count = await collection.countDocuments({});
    return count;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

//Get ID Count of Players
async function countPlayers() {
  try {
    const collection = db.collection("players");
    const count = await collection.countDocuments({});
    return count;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

// Get all leagues
async function getLeagues() {
  let leagues = [];
  try {
    const collection = db.collection("leagues");

    const query = {};

    leagues = await collection.find(query).toArray();
    leagues.forEach((league) => {
      league._id = league._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return leagues;
}


// Get league by id
async function getLeague(id) {
  let league = null;
  try {
    const collection = db.collection("leagues");
    const query = { _id: parseInt(id) }; //no new ObjectId(id) needed because of numeric IDs
    league = await collection.findOne(query);

    if (!league) {
      console.log("No league with id " + id);
    } else {
      league._id = league._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return league;
}


// Get clubs of league by fk_league
async function getClubsOfLeague(id) {

  let clubs = [];
  try {
    const collection = db.collection("clubs");
    const query = { fk_league: parseInt(id) };
    clubs = await collection.find(query).toArray();

    if (clubs.length <= 1) {
      console.log("No clubs found with league id " + id);
    } else {
      clubs.forEach((club) => {
        club._id = club._id.toString();
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  return clubs;
}


// Get all players of a league
async function getPlayersOfLeague(clubIDs) {
  let players = [];
  try {
    const collection = db.collection("players");
    const query = [
      {
        $match: {
          club_id: { $in: clubIDs.map(id => parseInt(id)) }
        }
      },
      {
        $lookup: {
          from: "clubs",
          localField: "club_id",
          foreignField: "_id",
          as: "club"
        }
      },
      {
        $lookup: {
          from: "countries",
          localField: "nationality",
          foreignField: "country_name",
          as: "nationality_obj"
        }
      },
      {
        $unwind: {
          path: "$club"
        }
      },
      {
        $unwind: {
          path: "$nationality_obj"
        }
      },
      {
        $project: {
          _id: 1,
          player_name: 1,
          birthdate: 1,
          nationality: 1,
          position: 1,
          image_url: 1,
          club_name: "$club.club_name",
          club_logo: "$club.badge_url",
          nationality_code: "$nationality_obj.iso_code"
        }
      }
    ];
    players = await collection.aggregate(query).toArray();

    if (players.length <= 1) {
      console.log("No players found with club id " + id);
    } else {
      players.forEach((player) => {
        player._id = player._id.toString();
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  return players;
}


// Get all unique countries from leagues
async function getLeagueCountries() {
  let countries = [];
  try {
    const collection = db.collection("leagues");

    // Get all leagues
    const leagues = await collection.find({}).toArray();

    // Extract league_country and remove duplicates
    const allCountries = leagues.map(league => league.league_country);
    countries = [...new Set(allCountries)].sort(); // sorted list, no duplicates

  } catch (error) {
    console.log("Error getting countries: ", error.message);
  }
  return countries;
}



// Create league
async function createLeague(league) {

  let id_counter = await countLeagues();
  league._id = id_counter + 1;

  league.logo_url = "/images/leagues/default_league.png"; //default league image
  league.is_top5 = false; //all top 5 leagues already created
  try {
    const collection = db.collection("leagues");
    const result = await collection.insertOne(league);
    return result.insertedId;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}


// Get all clubs
async function getClubs() {
  let clubs = [];
  try {
    const collection = db.collection("clubs");

    const query = {};

    clubs = await collection.find(query).toArray();
    clubs.forEach((club) => {
      club._id = club._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return clubs;
}


// Get club by id
async function getClub(id) {
  let club = null;
  try {
    const collection = db.collection("clubs");
    const query = { _id: parseInt(id) }; //no new ObjectId(id) needed because of numeric IDs
    club = await collection.findOne(query);

    if (!club) {
      console.log("No club with id " + id);
    } else {
      club._id = club._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return club;
}


// Get all players of a club
async function getPlayersOfClub(id) {
  let players = [];
  try {
    const collection = db.collection("players");
    const query = [
      {
        $match: {
          club_id: parseInt(id)
        }
      },
      {
        $lookup: {
          from: "clubs",
          localField: "club_id",
          foreignField: "_id",
          as: "club"
        }
      },
      {
        $lookup: {
          from: "countries",
          localField: "nationality",
          foreignField: "country_name",
          as: "nationality_obj"
        }
      },
      {
        $unwind: {
          path: "$club"
        }
      },
      {
        $unwind: {
          path: "$nationality_obj"
        }
      },
      {
        $project: {
          _id: 1,
          player_name: 1,
          birthdate: 1,
          nationality: 1,
          position: 1,
          image_url: 1,
          club_name: "$club.club_name",
          club_logo: "$club.badge_url",
          nationality_code: "$nationality_obj.iso_code"
        }
      }
    ];
    players = await collection.aggregate(query).toArray();

    if (players.length <= 1) {
      console.log("No players found with club id " + id);
    } else {
      players.forEach((player) => {
        player._id = player._id.toString();
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  return players;
}


// Get all players
async function getPlayers() {
  let players = [];
  try {
    const collection = db.collection("players");

    const query = [
      {
        $lookup: {
          from: "clubs",
          localField: "club_id",
          foreignField: "_id",
          as: "club"
        }
      },
      {
        $lookup: {
          from: "countries",
          localField: "nationality",
          foreignField: "country_name",
          as: "nationality_obj"
        }
      },
      {
        $unwind: {
          path: "$club"
        }
      },
      {
        $unwind: {
          path: "$nationality_obj"
        }
      },
      {
        $project: {
          _id: 1,
          player_name: 1,
          birthdate: 1,
          nationality: 1,
          position: 1,
          image_url: 1,
          club_name: "$club.club_name",
          club_logo: "$club.badge_url",
          nationality_code: "$nationality_obj.iso_code"
        }
      }
    ];

    players = await collection.aggregate(query).toArray();
    players.forEach((player) => {
      player._id = player._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return players;
}


// Create player
async function createPlayer(player) {

  let id_counter = await countPlayers();
  player._id = id_counter + 1;

  player.club_id = 1;
  player.image_url = "/images/players/default_player.png";

  try {
    const collection = db.collection("players");
    const result = await collection.insertOne(player);
    return result.insertedId;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}


// export all functions so that they can be used in other files
export default {
  getLeagues,
  getLeague,
  getClubsOfLeague,
  getPlayersOfLeague,
  getLeagueCountries,
  createLeague,
  getClubs,
  getClub,
  getPlayersOfClub,
  getPlayers,
  createPlayer
};
