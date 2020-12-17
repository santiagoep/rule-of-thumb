import Layout from '@components/Layout/Layout';
import MainHero from '@components/MainHero/MainHero';
import menuItems from '@__mocks__/components/Navbar/menuItems';
import HomeRemovableMessage from '@components/HomeRemovableMessage/HomeRemovableMessage';

const Home = () => (
  <Layout menuItems={menuItems}>
    <MainHero
      title='Pope Francis?'
      description={`He's talking tough on clergy sexual abuse, but is he just another papal
pervert protector? (thumbs down) or a true pedophile punishing pontiff?
(thumbs up)`}
      moreInformationLink={{ href: '/' }}
      image={{ src: '/images/hero.jpg', alt: 'Pope Fancis Thumb' }}
      closingIn={22}
    />
    <HomeRemovableMessage
      titleComplement='Speak out, Be Heard.'
      title='Be counted'
      description={`Rule of Thumb is a crowd sourced court of public opinion where
            anyone and everyone can speak out and speak freely. Is's easy: You
            share your opinion, we analyze and put the data in a public report`}
    />
  </Layout>
);

export default Home;
