import React /* , { useContext } */ from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { SearchInputBlock } from './SearchInputBlock';
import { EmailBlock } from './EmailBlock';
import { useUserData } from '../../../hooks/useUserData';
// import { userContext } from '../../../../context/UserContext';

export function SearchBlock() {
  // const { iconImg, name } = useContext(userContext);
  const { data, loading } = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock iconImg={data.iconImg} name={data.name} loading={loading} />
      <SearchInputBlock />
      <EmailBlock />
    </div>
  );
}
