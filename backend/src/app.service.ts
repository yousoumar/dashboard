import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCalendar(): Promise<string> {
    const icsUrl =
      'https://inpass.imt-atlantique.fr/passcal/getics?login=y23oumar@imta.fr&check=471d810561d83c6c951391245032ef09';

    return fetch(icsUrl)
      .then((response) => response.text())
      .catch((error) => {
        console.error('Error fetching ICS data:', error);
        return 'Failed to fetch ICS data'
      });
  }

  getMenu(): Promise<any> {
    return fetch("https://toast-js.ew.r.appspot.com/coteresto?key=1ohdRUdCYo6e71aLuBh7ZfF2lc_uZqp9D78icU4DPufA").then((response) => {
      
      return response.text();
    }).then((data) => {

      const regex = /var loadingData = (\[.*?\])/;

      // Matching the data against the regex
      const match = data.match(regex);
   

      // Using the ternary operator to handle cases where the match may be null
      let loadingData = match ? match[1] : 'Valeur non trouvée';
      // remove first character from loadingData
      loadingData = loadingData.substring(1);
      console.log("loading",loadingData);
      // console.log("loading",match[1][0], match[1][1],match[1][match[1].length-1], match[1][match[1].length-2], );

      const json = JSON.parse(loadingData);
      return json
     
    }).catch((error) => {
      console.error('Error fetching menu data:', error);
      return 'Failed to fetch menu data'
    } );
  }
}
