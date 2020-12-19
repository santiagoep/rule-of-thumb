import PropTypes from 'prop-types';

import useThumbs from '@hooks/useThumbs';
import Layout from '@components/Layout/Layout';
import Section from '@components/Section/Section';
import MainHero from '@components/MainHero/MainHero';
import ThumbList from '@components/ThumbList/ThumbList';
import FancyLine from '@components/FancyLine/FancyLine';
import CallToAction from '@components/CallToAction/CallToAction';
import HomeRemovableMessage from '@components/HomeRemovableMessage/HomeRemovableMessage';

import thumbHeroMock from '@__mocks__/thumbHero';
import footerLinksMock from '@__mocks__/footerLinks';
import callToActionMock from '@__mocks__/callToAction';
import navbarMenuItemsMock from '@__mocks__/navbarMenuItems';
import footerSocialNetworksMock from '@__mocks__/footerSocialNetworks';
import homeRemovableMessageMock from '@__mocks__/homeRemovableMessage';

const Home = ({
  thumbHero,
  homeRemovableMessage,
  callToAction,
  navbarMenuItems,
  footerLinks,
  footerSocialNetworks
}) => {
  const {
    onVote: onVoteThumbs,
    onVoteAgain: onVoteAgainThumbs,
    thumbs
  } = useThumbs();
  return (
    <Layout
      menuItems={navbarMenuItems}
      footerLinks={footerLinks}
      footerSocialNetworks={footerSocialNetworks}
    >
      <MainHero {...thumbHero} />
      <HomeRemovableMessage {...homeRemovableMessage} />
      <Section title='Votes'>
        <ThumbList
          thumbs={thumbs}
          onVote={onVoteThumbs}
          onVoteAgain={onVoteAgainThumbs}
        />
      </Section>
      <CallToAction {...callToAction} />
      <FancyLine />
    </Layout>
  );
};

// Make api calls in this side (Optional if i want to use a CMS)
export const getServerSideProps = () => ({
  props: {
    thumbHero: thumbHeroMock,
    homeRemovableMessage: homeRemovableMessageMock,
    callToAction: callToActionMock,
    navbarMenuItems: navbarMenuItemsMock,
    footerLinks: footerLinksMock,
    footerSocialNetworks: footerSocialNetworksMock
  }
});

Home.propTypes = {
  thumbHero: PropTypes.shape({}).isRequired,
  homeRemovableMessage: PropTypes.shape({}).isRequired,
  callToAction: PropTypes.shape({}).isRequired,
  navbarMenuItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  footerLinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  footerSocialNetworks: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Home;
