import Image from 'next/image';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import Link from '@components/Link/Link';
import { StyledMenu, StyledMenuItem, StyledSearchIcon } from './Menu.styled';

const Menu = ({ items }) => {
  const memoizedMenuItems = useMemo(
    () =>
      items.map((menuItem) => {
        if (menuItem.text) {
          return (
            <StyledMenuItem>
              <Link {...menuItem.link}>{menuItem.text}</Link>
            </StyledMenuItem>
          );
        } else if (menuItem.icon) {
          return (
            <StyledMenuItem>
              <Link {...menuItem.link}>
                <StyledSearchIcon>
                  <Image
                    quality={100}
                    loading='eager'
                    layout='fill'
                    objectFit='contain'
                    priority
                    {...menuItem.icon}
                  />
                </StyledSearchIcon>
              </Link>
            </StyledMenuItem>
          );
        }
        return <></>;
      }),
    [items]
  );
  return <StyledMenu>{memoizedMenuItems}</StyledMenu>;
};

Menu.propTypes = { items: PropTypes.arrayOf(PropTypes.shape({})).isRequired };

export default Menu;
