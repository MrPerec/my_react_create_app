import React from 'react';
import styles from './userblock.css';
import { EColor, EIcons } from '../../../../enum';
import { Text } from '../../../Text';
import { Icon } from '../../../Icon';
import { ANONYMOUS } from '../../../../reducers/meReducer';

interface IUserBlock {
  name?: string;
  iconImg?: string;
  loading?: boolean;
  error?: string;
}

export function UserBlock({ iconImg, name, loading, error }: IUserBlock) {
  const RESPONSE_TYPE = `code`;
  const RANDOM_STRING = `random_string`;
  const DURATION = `permanent`;
  const SCOPE_STRING = `read submit identity`;

  let redirectUri = process.env.REDIRECT_URI;
  if (typeof window !== 'undefined') redirectUri = window.__redirect_uri__ || redirectUri;

  const authorizationUrl = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${redirectUri}&duration=${DURATION}&scope=${SCOPE_STRING}`;

  let userAvatarElem = <Icon name={EIcons.anon} color={EColor.greyD9} size={50} mobileSize={30} />;
  if (!error && iconImg) {
    userAvatarElem = <img className={styles.userAvatar} src={iconImg} alt='user avatar' />;
  }

  let nameText = name;
  if (loading) nameText = 'Загрузка...';
  if (error) nameText = error;

  return (
    <a className={styles.userContainer} href={authorizationUrl}>
      {userAvatarElem}
      <div className={styles.userName}>
        <Text size={20} color={name === ANONYMOUS ? EColor.grey99 : EColor.black}>
          {nameText}
        </Text>
      </div>
    </a>
  );
}
