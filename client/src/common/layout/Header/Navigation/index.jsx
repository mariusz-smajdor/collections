import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

import { Button } from '../../../../assets/UI';
import { changeTheme } from '../../../../services/themeSlice';
import { getLocalStorageItem } from '../../../../shared/utils/getLocalStorageItem';
import { themeKeys } from '../../../../shared/constants/themeKeys';
import { localStorageKeys } from '../../../../shared/constants/localStorageKeys';
import { routes } from '../../../../shared/constants/routes';
import { Group, ThemeIcon, UserSettingsIcon } from '../styled';

const { REGISTER } = routes;
const { LIGHT, DARK } = themeKeys;
const { THEME, TOKEN } = localStorageKeys;
const MOBILE_MENU_WIDTH = 575;

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
    const currentTheme = theme === LIGHT ? DARK : LIGHT;
    dispatch(changeTheme(currentTheme));
    localStorage.setItem(THEME, currentTheme);
  }

  return (
    <Group>
      <Group $mobileMenu={mobileMenu}>
        {!getLocalStorageItem(TOKEN) ? (
          <>
            <Button
              $outlined
              $navBtn
              $mobileMenu={mobileMenu}
              as={Link}
              to={REGISTER}
            >
              Sign Up
            </Button>
            <Button $navBtn $mobileMenu={mobileMenu}>
              Sign In
            </Button>
          </>
        ) : (
          <Button $navBtn $mobileMenu={mobileMenu}>
            Sign Out
          </Button>
        )}
      </Group>
      <UserSettingsIcon onClick={() => setMobileMenu(!mobileMenu)} />
      {theme === LIGHT ? (
        <ThemeIcon as={RiMoonLine} onClick={handleDispatch} />
      ) : (
        <ThemeIcon as={RiSunLine} onClick={handleDispatch} />
      )}
    </Group>
  );
}

export default Navigation;
