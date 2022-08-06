import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faCircleQuestion,
  faKeyboard,
  faEarthAsia,
  faCoins,
  faChartLine,
  faGears,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import Button from '../../../components/Button';
import Upload from '../../../components/AccountItem/Upload';
import Menu from '../../../components/Popper/Menu';
import { InboxIcon, MessageIcon } from '../../../components/Icon';
import Image from '../../../components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '../../../config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shotcuts',
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'View coins',
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    title: 'View Analytics',
  },
  {
    icon: <FontAwesomeIcon icon={faGears} />,
    title: 'Settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home} className={cx('logo')}>
          <img src={images.logo} alt="logo" />
        </Link>
        <div>
          <Search />
        </div>
        <div className={cx('actions')}>
          <Upload>
            <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
            Upload
          </Upload>
          {currentUser ? (
            <>
              <Tippy content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon className={cx('btn-item')} />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon className={cx('btn-item')} />
                  <span className={cx('badge')}>11</span>
                </button>
              </Tippy>
            </>
          ) : (
            <Tippy>
              <Button primary>Log in</Button>
            </Tippy>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a9d2c1285c50e810f23b147083227668~c5_100x100.jpeg?x-expires=1659254400&x-signature=uUZXpzeQ9UKIbGa0gzlSG0dNISs%3D"
                className={cx('user-avatar')}
                alt="Phan Huy"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
