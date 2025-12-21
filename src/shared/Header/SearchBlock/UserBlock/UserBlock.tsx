import React, { useContext } from 'react';
import styles from './userblock.css';
import { EColor, EIcons } from '../../../../enum';
import { Text } from '../../../Text';
import { REDIRECT_URI } from '../../../../constants';
import { Icon } from '../../../Icon';
import { userContext } from '../../../../context/UserContext';
import { ANONYMOUS } from '../../../../hooks/useUserData';

export function UserBlock() {
  const { iconImg, name } = useContext(userContext);

  const RESPONSE_TYPE = `code`;
  const RANDOM_STRING = `random_string`;
  const DURATION = `permanent`;
  const SCOPE_STRING = `read submit identity`;
  const AUTHORIZATION_URL = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE_STRING}`;

  let userAvatarElem = <Icon name={EIcons.anon} color={EColor.greyD9} size={50} mobileSize={30} />;
  if (iconImg) {
    userAvatarElem = <img className={styles.userAvatar} src={iconImg} alt='user avatar' />;
  }

  let userNameTextColor = name === ANONYMOUS ? EColor.grey99 : EColor.black;

  return (
    <a className={styles.userContainer} href={AUTHORIZATION_URL}>
      {userAvatarElem}
      <div className={styles.userName}>
        <Text size={20} color={userNameTextColor}>
          {name}
        </Text>
      </div>
    </a>
  );
}
