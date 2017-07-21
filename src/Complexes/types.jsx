/* eslint-disable import/prefer-default-export */
// @flow

type Range = {
  to: number,
  from: number,
};

type Details = {
  architect: string,
  developer: string,
  startYear: number,
  startQuarter: string,
  commissioningYear: number,
  commissioningQuarter: string,
  ceilHeight: Range,
  parkings: number,
  maintenanceCosts: number,
  propertyKind: string,
  security: string,
  undergroundGarages: number,
  constructionKind: string,
};

type Location = {
  latitude?: number,
  localityId?: ?number,
  subLocalityName?: string,
  subwayIds?: Array<number>,
  countryName?: ?string,
  longitude?: number,
  postalCode?: ?number,
  countryId?: ?number,
  house?: ?number,
  localityName?: ?string,
  street?: string,
  regionId?: ?number,
  regionName?: ?string,
};

type Complex = {
  commissioningYear: number,
  adjacentTerritory: {
    area: ?number,
    isAccessOpen: ?boolean,
    isAllowedCars: ?boolean,
    isGreeneryPlanted: ?boolean,
    playgrounds: ?number,
  },
  name: string,
  updatedAt: string,
  location: Location,
  state: string,
  units: number,
  amenities: Array<string>,
  details: Details,
  statistics: {
    resalePropertiesCount: number,
    price: {
      from: {
        usd: number,
        eur: number,
        rub: number,
      },
      to: {
        usd: number,
        eur: number,
        rub: number,
      },
    },
    totalResaleArea: Range,
    resalePrice: {
      from: {
        usd: number,
        eur: number,
        rub: number,
      },
      to: {
        usd: number,
        eur: number,
        rub: number,
      },
    },
    propertiesCount: number,
    totalPrimaryArea: Range,
    primaryPrice: {
      from: {
        usd: number,
        eur: number,
        rub: number,
      },
      to: {
        usd: number,
        eur: number,
        rub: number,
      },
    },
    primaryPropertiesCount: number,
    totalArea: Range,
  },
  keysIssueDate: string,
  purchaseTimeConditions: {
    agreementPreparation: ?number,
    oralReservation: ?number,
  },
  commissioningQuarter: number,
  fullDescription: string,
  shortDescription: string,
  linkedContactIds: Array<string>,
  responsibleUser: {
    id: number,
    departmentId: number,
  },
  createdByUserId: number,
  id: number,
  updatedByUserId: number,
  createdAt: string,
  images: Array<{
    id: string,
    isPublic: boolean,
  }>,
  accreditors: Array<number>,
};

export type { Complex, Details, Range, Location };
