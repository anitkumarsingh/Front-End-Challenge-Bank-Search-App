// This file contains api call
const API_DOMAIN = 'https://vast-shore-74260.herokuapp.com';

class API {
  async getBankDetails(city) {
     let transformCityCase = city.toUpperCase(); 
    try {
      let response = await fetch(`${API_DOMAIN}/banks?city=${transformCityCase}`);
      let results = await response.json();
      // console.log(response);
      return results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
}

export default new API();