import React from 'react';
import styles from './userblock.css';
import { Break } from '../../../Break';
import { EColor } from '../../../../enum';
import { Text } from '../../../Text';
import { IconAnon } from '../../../Icons';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  const RESPONSE_TYPE = `code`;
  const RANDOM_STRING = `random_string`;
  const REDIRECT_URI = `http://localhost:3000/auth`;
  const DURATION = `permanent`;
  const SCOPE_STRING = `read submit identity`;
  const AUTHORIZATION_URL = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE_STRING}`;

  const avatarElem = avatarSrc ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage} /> : <IconAnon />;
  let usernameText = 'Аноним';
  let usernameTextColor = EColor.grey99;

  if (username) {
    usernameText = username;
    usernameTextColor = EColor.black;
  }

  return (
    <a className={styles.userBox} href={AUTHORIZATION_URL}>
      <div className={styles.avatarBox}>{avatarElem}</div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={usernameTextColor}>
          {usernameText}
        </Text>
      </div>
    </a>
  );
}
