import { continents as Continents } from '@prisma/client';

export interface CountryQueryParams {
  continent?: Continents;
}
