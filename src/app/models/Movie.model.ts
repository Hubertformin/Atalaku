export interface MovieModel {
  cdn_link: string;
  createdAt: string;
  description: string;
  director: string;
  duration: string | number;
  genreId: string | number;
  id: number | string;
  movieUploaderId: number | string;
  producer: string;
  rating: string;
  release_date: string;
  studio: string;
  thumbnail_url: string;
  title: string;
  updatedAt: string;
  writer: string;
}
