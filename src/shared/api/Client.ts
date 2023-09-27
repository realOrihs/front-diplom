import {backendURL} from '~shared/config/constants';
import {User} from '~shared/api/User';
import {Services} from '~shared/api/Services';
import {Games} from '~shared/api/Games';
import {Reviews} from '~shared/api/Reviews';
import {Blog} from '~shared/api/Blog';

class Client {
  services: Services;
  games: Games;
  user: User;
  reviews: Reviews;
  blog: Blog;

  constructor(baseUrl: string, apiKey?: string) {
    this.user = new User(baseUrl, apiKey);
    this.games = new Games(baseUrl, apiKey);
    this.services = new Services(baseUrl, apiKey);
    this.reviews = new Reviews(baseUrl, apiKey);
    this.blog = new Blog(baseUrl, apiKey);
  }
}

export const client = new Client(backendURL);
