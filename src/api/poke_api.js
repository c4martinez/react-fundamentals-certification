import axios, { Axios } from "axios";
import { BASE_URL } from "../config";

export class pokemonApi {
  static async loadPokemon() {
    try {
      const resp = await axios.get(`${BASE_URL}`);
      const resp1 = await axios.get(resp.data.results[9].url);
      console.log(resp1);
    //   for(let i = 0; i < resp.data.results.length; i++){
    //     axios.get(resp.data.results[i].url);
    //     console.log(resp)
    //   }
      console.log(resp.data.results);
      return resp.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}
