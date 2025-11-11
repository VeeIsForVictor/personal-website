import { Article } from './article';
import { Home } from './home';
import type { HBlockCardgroup, HBlockHero, HomepageElementsData } from './homepage_elements';

export interface Schema {
    articles: Article[];
    home: Home;
    home_homepage_elements: HomepageElementsData;
    HBlock_hero: HBlockHero;
    HBlock_cardgroup: HBlockCardgroup;
}
