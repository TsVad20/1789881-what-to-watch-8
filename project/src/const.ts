export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum Genre {
  All = 'All genres',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Film = '/films/:id',
  Similar = '/films/:id/similar',
  Comments = '/comments/:filmId',
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Review = 'Review',
}

export enum FilmGrade {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}
