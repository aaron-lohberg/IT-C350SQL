import axios from "axios";
import { authHeader, getJwtToken, getRoleFromToken, getUserIdFromToken, getUserNameFromToken } from "./auth";

const API_URL = "http://192.168.50.56:8000";

class Api {
  getCharacters() {
    var patronid = getUserIdFromToken(getJwtToken());
    return axios.get(API_URL + "/CHARACTER?patronid=eq." + patronid, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getUserParties() {
    var patronid = getUserIdFromToken(getJwtToken());
    return axios.get(API_URL + "/patron_parties?patronid=eq." + patronid, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getParty(partyid) {
    return axios.get(API_URL + "/PARTY?partyid=eq." + partyid, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getAllCharacters() {
    return axios.get(API_URL + "/character_summary", {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getAllRaces() {
    return axios.get(API_URL + "/RACE", {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getAllClasses() {
    return axios.get(API_URL + "/DNDCLASS", {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getCharacterSummary(charId) {
    return axios.get(API_URL + "/character_summary?charid=eq." + charId, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getAllParties() {
    return axios.get(API_URL + "/PARTY", {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getAllPatrons() {
    return axios.get(API_URL + "/PATRON", {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getAllTickets() {
    return axios.get(API_URL + "/ticket_patron", {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getIDFromClassName(subclass) {
    return axios.get(API_URL + "/DNDCLASS?subclass=eq." + subclass, {
    headers: {
      'Authorization': 'Bearer ' + getJwtToken()
    }
  });    
  }

  getIDFromRaceName(race) {
    return axios.get(API_URL + "/RACE?racename=eq." + race, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getPatron() {
    var patronid = getUserIdFromToken(getJwtToken());
    return axios.get(API_URL + "/PATRON?patronid=eq." + patronid, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getPatronFromId(patronid) {
    return axios.get(API_URL + "/PATRON?patronid=eq." + patronid, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  createParty(thecampaignname, thepartyname, thestartinglevel, groupsize, thelocation, playtime, partydescription, theskilllevel) {
    return axios.post(
      API_URL + "/PARTY",
      {
        partyname: thepartyname,
        dungeonmaster: getUserNameFromToken(getJwtToken()),
        maxsize: groupsize,
        timeandday: playtime,
        startinglevel: thestartinglevel,
        campaignname: thecampaignname,
        skilllevel: theskilllevel,
        location: thelocation,
        description: partydescription,
        isactive: 1,
      },
      {
        headers: authHeader(),
      }
    );
  }

  createPhysicality(characterHeight, characterEyeColor, characterHairColor, characterWeight, characterAge, characterSkinColor, characterMarks) {
    return axios.post(
      API_URL + "/PHYSICALITY",
      {
        height: Number(characterHeight),
        eyecolor: characterEyeColor,
        haircolor: characterHairColor,
        weight: parseInt(characterWeight),
        age: parseInt(characterAge),
        skincolor: characterSkinColor,
        uniquemark: characterMarks,
      },
      {
        headers: authHeader(),
      }
    );

  }

  getPhysID(characterHeight, characterEyeColor, characterHairColor, characterWeight, characterAge, characterSkinColor, characterMarks){
    return axios.get(
      API_URL + "/PHYSICALITY?height=eq." + Number(characterHeight) + "&eyecolor=eq." + characterEyeColor + "&haircolor=eq." + characterHairColor + "&weight=eq." + parseInt(characterWeight) + "&age=eq." + parseInt(characterAge) + "&skincolor=eq." + characterSkinColor + "&uniquemark=eq." + characterMarks, {
        headers: {
          'Authorization': 'Bearer ' + getJwtToken()
        }
      });
  }

  createCharacter(name, level, charStrength, charInt, charChar, charCon, charWis, charDex, charHP, charFlaw, charBond, charIdeal, charBG, charRace, charClass, charPhys) {
    //console.log("Vars" + name + level + charStrength + charInt + charChar + charCon + charWis + charDex + charHP + charFlaw + charBond + charIdeal + charBG + charRace + charClass + charPhys)
    return axios.post(
      API_URL + "/CHARACTER",
      {
        charname: name,
        charlevel: parseInt(level),
        feat: null,
        strength: parseInt(charStrength),
        intelligence: parseInt(charInt),
        charisma: parseInt(charChar),
        constitution: parseInt(charCon),
        wisdom: parseInt(charWis),
        dexterity: parseInt(charDex),
        hitpoints: parseInt(charHP),
        flaw: charFlaw,
        bond: charBond,
        ideal: charIdeal,
        background: charBG,
        partyid: null,
        patronid: parseInt(getUserIdFromToken(getJwtToken())),
        dndclassid: parseInt(charClass),
        raceid: parseInt(charRace),
        physicalityid: parseInt(charPhys),
      },
      {
        headers: authHeader(),
      }
    );
  }


  getTicket(ticketId) {
    return axios.get(API_URL + "/TICKETS?ticketid=eq." + ticketId, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getPatronTicket(patronId) {
    return axios.get(API_URL + "/TICKETS?patronid=eq." + patronId, {
      headers: {
        'Authorization': 'Bearer ' + getJwtToken()
      }
    });
  }

  getUserName() {
    var username = getUserNameFromToken(getJwtToken());
    return username;
  }

  getUserID() {
    var userID = getUserIdFromToken(getJwtToken());
    return userID;
  }

  getRole() {
    var userRole = getRoleFromToken(getJwtToken());
    return userRole;
  }
  getCharacterDetail(id) {
    return axios.get(API_URL + `/characters?charid=eq.${id}`);
  }

  addCharacter(character) {
    return axios.post(
      API_URL + "/characters",
      {
        ...character,
        // add user id from JWT token
        patronid: getUserIdFromToken(getJwtToken()),
      },
      {
        headers: authHeader(),
      }
    );
  }

  updateCharacter(character) {
    return axios.patch(
      API_URL + `/characters?charid=eq.${character.charid}`,
      character,
      {
        headers: authHeader(),
      }
    );
  }

  deleteCharacer(id) {
    return axios.delete(API_URL + `/characters?charid=eq.${id}`, {
      headers: authHeader(),
    });
  }

  publishCharacter(id) {
    return axios.post(
      API_URL + "/rpc/publish",
      { id: id },
      {
        headers: authHeader(),
      }
    );
  }

  login(patronname, password) {
    return axios.post(API_URL + "/rpc/login", { patronname, password });
  }

  signup(patronname, patronpassword, patronemail) {
    return axios.post(API_URL + "/rpc/signup", { patronname, patronpassword, patronemail });
  }

  createTicket(patronid, description) {
    return axios.post(API_URL + "/rpc/createticket", { patronid, description });
  }

  getFilteredParties(partyname, campaignname, startinglevel, maxsize, skilllevel) {
    var partyURL = API_URL + `/PARTY?`;
    partyURL += `partyname=ilike.*${partyname}*`;
    partyURL += `&campaignname=ilike.*${campaignname}*`;
    if (startinglevel != "") {
      partyURL += `&startinglevel=eq.${startinglevel}`;
    }
    if (maxsize != "") {
      partyURL += `&maxsize=eq.${maxsize}`;
    }
    if (skilllevel != "") {
      partyURL += `&skilllevel=ilike.*${skilllevel}*`;
    }

    return axios.get(partyURL, {
      headers: authHeader(),
    });
  }
}

export default new Api();
