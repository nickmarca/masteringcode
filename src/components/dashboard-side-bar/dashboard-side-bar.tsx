import React from 'react';
import classnames from 'classnames';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import CategorySVG from '../../fragments/svgs/category-svg';
import styles from './dashboard-side-bar.module.css';

const DashboardSideBar: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.branding}>
        <Link to="/">
          {'Mastering '}
          <br />
          {'Code'}
        </Link>
      </div>
      <div>
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>{'OVERVIEW'}</span>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>
                <CustomLink to="/" className={styles.active}>
                  <CategorySVG />
                  <span>{'Challenges'}</span>
                </CustomLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const CustomLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={classnames({ [styles.active]: match })} {...props}>
      {children}
    </Link>
  );
};

export default DashboardSideBar;
