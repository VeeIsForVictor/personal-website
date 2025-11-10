import { Article } from './article';
import { Home } from './home';

export interface Schema {
    articles: Article[];
    home: Home
}
