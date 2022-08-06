import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import AccountItem from '../../../components/AccountItem';
import { SearchIcon } from '../../../components/Icon';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '../../../hooks';
import * as SearchService from '../../../services/searchService';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 600);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchApi = async () => {
      setLoading(true);

      const result = await SearchService.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleTyping = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(e.target.value);
    }
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(atrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...atrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={handleTyping}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
