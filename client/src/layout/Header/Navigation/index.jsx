import { useEffect, useState } from 'react';

import { checkToken } from '../../../utils/checkToken';
import { Button } from '../../../assets/UI';
import { Group, SunIcon, UserSettingsIcon } from '../styled';
import { MOBILE_MENU_WIDTH } from '../../../config/constants';

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    width > MOBILE_MENU_WIDTH && setMobileMenu(false);

    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <Group>
      <Group mobileMenu={mobileMenu}>
        {checkToken() ? (
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
      <SunIcon />
    </Group>
  );
}

export default Navigation;
