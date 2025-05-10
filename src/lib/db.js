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
    const query = { fk_league: parseInt(id) }; //no new ObjectId(id) needed because of numeric IDs
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

// Get all players
async function getPlayers() {
  let players = [];
  try {
    const collection = db.collection("players");

    const query = {};
    
    players = await collection.find(query).toArray();
    players.forEach((player) => {
      player._id = player._id.toString(); 
    });
  } catch (error) {
    console.log(error);
  }
  return players;
}

// export all functions so that they can be used in other files
export default {
  getLeagues,
  getLeague,
  getClubsOfLeague,
  createLeague,
  getClubs,
  getPlayers
};
