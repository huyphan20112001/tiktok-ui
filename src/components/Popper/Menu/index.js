import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };

  return (
    <div>
      <Tippy
        interactive
        visible
        offset={[15, 8]}
        delay={[0, 600]}
        placement="bottom-end"
        render={(atrs) => (
          <div className={cx('menu-list')} tabIndex="-1" {...atrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {history.length > 1 && (
                <Header
                  title={'Language'}
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, history.length - 1));
                  }}
                />
              )}
              {renderItems()}
            </PopperWrapper>
          </div>
        )}
        onHidden={() => setHistory((prev) => prev.slice(0, 1))}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
