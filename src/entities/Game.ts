import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  genres: Genre[];
  description_raw: string;
  slug: string;
  id: number;
  name: string;
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
