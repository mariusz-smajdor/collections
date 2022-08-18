import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '../../../services/themeSlice';
import { getLocalStorageItem } from '../../../utils/getLocalStorageItem';
import { Button } from '../../../assets/UI';
import { Group, SunIcon, UserSettingsIcon } from '../styled';
import {
  MOBILE_MENU_WIDTH,
  LIGHT_THEME,
  DARK_THEME,
  STORAGE_KEY_THEME,
  STORAGE_KEY_TOKEN,
} from '../../../config/constants';

function Navigation() {
  const theme = useSelector(state => state.themeToggler.theme);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    width > MOBILE_MENU_WIDTH && setMobileMenu(false);

    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  function handleDispatch() {
    const currentTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    dispatch(changeTheme(currentTheme));
    localStorage.setItem(STORAGE_KEY_THEME, currentTheme);
  }

  return (
    <Group>
      <Group mobileMenu={mobileMenu}>
        {!getLocalStorageItem(STORAGE_KEY_TOKEN) ? (
          <>
            <Button outlined navBtn mobileMenu={mobileMenu}>
              Sign Up
            </Button>
            <Button navBtn mobileMenu={mobileMenu}>
              Sign In
            </Button>
          </>
        ) : (
          <Button navBtn mobileMenu={mobileMenu}>
            Sign Out
          </Button>
        )}
      </Group>
      <UserSettingsIcon onClick={() => setMobileMenu(!mobileMenu)} />
      <SunIcon onClick={handleDispatch} />
    </Group>
  );
}

export default Navigation;
