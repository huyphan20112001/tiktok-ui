import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23tJrqMtfoQzNfeGVJ9OGXlx3pu-31rBAPA&usqp=CAU"
        alt="User avt"
      />
      <div className={cx('info')}>
        <h3 className={cx('name')}>
          Son Tung M-TP
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h3>
        <span className={cx('username')}>tiger050794</span>
      </div>
    </div>
  );
}

export default AccountItem;
