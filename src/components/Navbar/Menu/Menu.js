import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import {
  StyledMenu,
  StyledClose,
  StyledMenuItem,
  StyledMenuMobile,
  StyledSearchIcon
} from './Menu.styled';
import Link from '@components/Link/Link';

const Menu = ({ items }) => {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened(!opened);

  const memoizedMenuItems = useMemo(
    () =>
      items.map((menuItem, index) => {
        if (menuItem.text) {
          return (
            <StyledMenuItem key={`menu__item--${menuItem.text}-${index}`}>
              <Link {...menuItem.link}>{menuItem.text}</Link>
            </StyledMenuItem>
          );
        } else if (menuItem.icon) {
          return (
            <StyledMenuItem key={`menu__item--${index}`}>
              <Link {...menuItem.link}>
                <StyledSearchIcon>
                  <Image
                    quality={100}
                    loading='eager'
                    layout='fill'
                    objectFit='contain'
                    {...menuItem.icon}
                  />
                </StyledSearchIcon>
              </Link>
            </StyledMenuItem>
          );
        }
        return <React.Fragment key={`menu__item--${index}`} />;
      }),
    [items]
  );
  return (
    <>
      <StyledMenuMobile opened={opened} onClick={toggle}>
        <Image
          quality={100}
          loading='eager'
          layout='fill'
          objectFit='contain'
          src='/icons/menu.svg'
          priority
        />
      </StyledMenuMobile>
      <StyledClose opened={opened} onClick={toggle}>
        <Image
          quality={100}
          loading='eager'
          layout='fill'
          objectFit='contain'
          src='/icons/menu-close.png'
          priority
        />
      </StyledClose>
      <StyledMenu onMouseLeave={toggle} opened={opened}>
        {memoizedMenuItems}
      </StyledMenu>
    </>
  );
};

Menu.propTypes = { items: PropTypes.arrayOf(PropTypes.shape({})).isRequired };

export default Menu;
