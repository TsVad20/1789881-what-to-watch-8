export type Film = {
  id: number;
  posterImage: string;
  name: string;
  previewImage: string,
  backgroundImage : string,
  backgroundColor : string,
  videoLink: string,
  previewVideoLink : string,
  description : string,
  rating : number,
  scoresCount : number,
  director : string,
  starring : string[],
  runTime : number,
  genre : string,
  released : number,
  isFavorite: false
};
