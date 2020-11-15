export interface IRemoteConfigCounters {
  numberOfMeal: number;
  numberOfCooker: number;
  quantityOfBioWaste: number;
}

export const initialRemoteConfigCounters: IRemoteConfigCounters = {
  numberOfMeal: 0,
  numberOfCooker: 0,
  quantityOfBioWaste: 0,
};
