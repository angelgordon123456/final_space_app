import { Injectable } from "@angular/core";
import { promise } from "protractor";

@Injectable({
  providedIn: "root",
})
export class ApiService {

  constructor() {}

  getCharacters = () =>
    fetch(`https://finalspaceapi.com/api/v0/character`).then((response) =>
      response.json()
    );

  getCharacter = (id) =>
  fetch(`https://finalspaceapi.com/api/v0/character/${id}`).then((response) =>
    response.json()
  );


  getLocations = () =>
    fetch(` https://finalspaceapi.com/api/v0/location`).then((response) =>
      response.json()
    );

  getLocation =async (id)  => 
{let response: Response=await fetch(` https://finalspaceapi.com/api/v0/location/${id}`);
let location=await response.json();

let fetchs:Array<Response> = location.notable_residents.map((url)=>fetch(url))

let responses=await Promise.all(fetchs)

let responsesToJson = responses.map((response)=>response.json())

location.notable_residents=await Promise.all(responsesToJson)

return location;
};

  getEpisodes = () =>
    fetch(`https://finalspaceapi.com/api/v0/episode`).then((response) =>
      response.json()
    );

   

    getEpisode =async (id)  => 
    {let response: Response=await fetch(`https://finalspaceapi.com/api/v0/episode/${id}`);
    let episode=await response.json();

    let fetchs:Array<Response> = episode.characters.map((url)=>fetch(url))

let responses=await Promise.all(fetchs)

let responsesToJson = responses.map((response)=>response.json())

episode.characters=await Promise.all(responsesToJson)

    return episode;
    };

    getCita = () =>
    fetch(`https://finalspaceapi.com/api/v0/quote`).then((response) =>
      response.json()
    );
}
