import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload({ children }) {
  return <button className={cx('wrapper')}>{children}</button>;
}

export default Upload;
