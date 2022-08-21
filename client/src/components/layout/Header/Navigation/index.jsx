import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

import { changeTheme } from '../../../../services/themeSlice';
import { getLocalStorageItem } from '../../../../shared/utils/getLocalStorageItem';
import { themeKeys } from '../../../../shared/constants/themeKeys';
import { localStorageKeys } from '../../../../shared/constants/localStorageKeys';
import { routes } from '../../../../shared/constants/routes';
import { Button } from '../../../../assets/UI/formEls';
import { Group, ThemeIcon, UserSettingsIcon } from '../styled';

const { REGISTER, LOGIN } = routes;
const { LIGHT, DARK } = themeKeys;
const { THEME, TOKEN } = localStorageKeys;
const MOBILE_MENU_WIDTH = 575;

function Navigation() {
  const theme = useSelector(state => state.themeToggler.theme);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!mobileMenu) return;

    function handleResize() {
      setWidth(window.innerWidth);
      width > MOBILE_MENU_WIDTH && setMobileMenu(false);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenu, width]);

  function handleDispatch() {
    const currentTheme = theme === LIGHT ? DARK : LIGHT;
    dispatch(changeTheme(currentTheme));
    localStorage.setItem(THEME, currentTheme);
  }

  function logout() {
    localStorage.removeItem(TOKEN);
    navigate(LOGIN);
    window.location.reload(false);
  }

  return (
    <Group>
      <Group $mobileMenu={mobileMenu} onClick={() => setMobileMenu(false)}>
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
            <Button $navBtn $mobileMenu={mobileMenu} as={Link} to={LOGIN}>
              Sign In
            </Button>
          </>
        ) : (
          <Button $navBtn $mobileMenu={mobileMenu} onClick={logout}>
            Sign Out
          </Button>
        )}
      </Group>
      <UserSettingsIcon onClick={() => setMobileMenu(!mobileMenu)} />
      <ThemeIcon
        as={theme === LIGHT ? RiMoonLine : RiSunLine}
        onClick={handleDispatch}
      />
    </Group>
  );
}

export default Navigation;
