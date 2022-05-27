import { Container } from '@mui/material';
import PortfolioContainer from '../Components/PortfolioContainer';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['projects'])),
    },
  };
}
const Playground = () => {
  const { t } = useTranslation('projects');
  const projectData = [
    {
      img: 'https://user-images.githubusercontent.com/60406970/168473161-680a96fc-2cd3-4323-b6a9-8f07cc194987.png',
      title: 'Lusco',
      desc: t('lusco-desc'),
      url: 'https://github.com/LoganWillaumez/Lusco',
      icon: [
        '/imgs/react-2.svg',
        '/imgs/tailwind-css-2.svg',
        '/imgs/vitejs.svg',
      ],
    },

    {
      img: 'https://user-images.githubusercontent.com/60406970/170542091-925b7a0e-6c07-4a02-bb87-534becc40e49.png',
      title: 'Circles',
      desc: t('circles-desc'),
      url: 'https://github.com/LoganWillaumez/Circles',
      icon: [
        '/imgs/react-2.svg',
        '/imgs/redux.svg',
        '/imgs/tailwind-css-2.svg',
        '/imgs/nodejs-2-1.svg',
        '/imgs/socket-io-1.svg',
        '/imgs/jwt-3.svg',
      ],
    },
    {
      img: 'https://user-images.githubusercontent.com/60406970/170548293-28a2d4ab-708a-4a94-a6ca-02831c7117a7.png',
      title: 'Portfolio',
      desc: t('portfolio-desc'),
      url: 'https://github.com/LoganWillaumez/Portfolio',
      icon: [
        '/imgs/next-js.svg',
        '/imgs/threejs-1.svg',
        '/imgs/tailwind-css-2.svg',
        '/imgs/nodejs-2-1.svg',
        '/imgs/socket-io-1.svg',
        '/imgs/jwt-3.svg',
      ],
    },
  ];
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1600px' }}>
      <PortfolioContainer projectData={projectData} info={t('info')} />
    </Container>
  );
};
export default Playground;
