export interface CovidCountryData {
    updated: number;
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
    countryInfo: {
        _id: number;
        iso2: string;
        iso3: string;
        lat: number;
        long: number;
        flag: string;
      };
   
    
  }

  export type CovidCountry=CovidCountryData[]