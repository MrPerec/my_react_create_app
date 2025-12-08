import React from 'react';
import styles from './userblock.css';
import { EColor, EIcons } from '../../../../enum';
import { Text } from '../../../Text';
import { REDIRECT_URI } from '../../../../constants';
import { Icon } from '../../../Icon';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  const RESPONSE_TYPE = `code`;
  const RANDOM_STRING = `random_string`;
  const DURATION = `permanent`;
  const SCOPE_STRING = `read submit identity`;
  const AUTHORIZATION_URL = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE_STRING}`;

  let userAvatarElem = <Icon name={EIcons.anon} color={EColor.greyD9} size={50} mobileSize={30} />;
  if (avatarSrc) {
    userAvatarElem = <img className={styles.userAvatar} src={avatarSrc} alt='user avatar' />;
  }

  let userNameText = 'Аноним';
  let userNameTextColor = EColor.grey99;
  if (username) {
    userNameText = username;
    userNameTextColor = EColor.black;
  }

  return (
    <a className={styles.userContainer} href={AUTHORIZATION_URL}>
      {userAvatarElem}
      <div className={styles.userName}>
        <Text size={20} color={userNameTextColor}>
          {userNameText}
        </Text>
      </div>
    </a>
  );
}
