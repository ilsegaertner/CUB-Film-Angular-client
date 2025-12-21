import { Movie } from '../movie-card.component';

export interface Director {
  Name: string;
  Bio: string;
  Birth: string;
  Death?: string;
  Movies: Movie['_id'];
}
