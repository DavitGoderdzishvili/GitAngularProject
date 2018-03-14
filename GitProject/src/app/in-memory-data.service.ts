import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Tbilisi' },
      { id: 12, name: 'Signagi' },
      { id: 13, name: 'Batumi' },
      { id: 14, name: 'Qutaisi' },
      { id: 15, name: 'Mestia' },
      { id: 16, name: 'Zugdidi' },
      { id: 17, name: 'Poti' },
      { id: 18, name: 'Qobuleti' },
      { id: 19, name: 'Lentekhi' },
      { id: 20, name: 'Gurjaani' }
    ];
    return {heroes};
  }
}
