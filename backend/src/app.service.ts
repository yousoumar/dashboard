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
        throw new Error('Failed to fetch ICS data');
      });
  }
}
