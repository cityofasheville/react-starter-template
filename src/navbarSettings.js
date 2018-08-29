import {
  IM_SEARCH,
} from './iconConstants';

const navbarSettings = {
  items: [
    {
      href: '/',
      active: true,
      text: 'test',
    },
    {
      href: '/',
      active: false,
      text: 'another item',
    },
    {
      href: '/',
      active: false,
      text: 'search',
      icon: IM_SEARCH,
    }
  ],
}

export default navbarSettings;
