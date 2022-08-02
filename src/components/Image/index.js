import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '../../assets/image';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, ...props }, ref, alt) => {
  const [fallBack, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallBack || src}
      ref={ref}
      {...props}
      alt={alt}
      onError={handleError}
    />
  );
});

export default Image;
