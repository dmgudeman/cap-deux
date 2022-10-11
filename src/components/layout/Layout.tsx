import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';



export interface ILayoutProps { children: JSX.Element,}
const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;