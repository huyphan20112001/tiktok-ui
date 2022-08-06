import { HeaderOnly } from '../layouts';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

import routesConfig from '../config/routes';

// No need LOGIN
export const publicRoutes = [
  { path: routesConfig.home, element: Home },
  { path: routesConfig.following, element: Following },
  { path: routesConfig.profile, element: Profile },
  { path: routesConfig.upload, element: Upload, layout: HeaderOnly },
  { path: routesConfig.search, element: Search },
];

// Have to LOGIN
export const privateRoutes = [];
