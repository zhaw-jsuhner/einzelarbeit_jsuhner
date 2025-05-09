import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Football_Database"); // select database


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
  getClubs,
  getPlayers
};
