import { Container } from '@mui/material';
import Portfolio from '../Components/Portfolio';

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

    // {
    //   img: 'https://user-images.githubusercontent.com/60406970/168473609-d7a7a30d-6694-486f-b655-e54099a9265d.png',
    //   title: 'Netflix clone',
    //   desc: 'A netflix clone, super fun to create and complexe to do. Mega fun ! ',
    //   url: 'https://github.com/LoganWillaumez/Netflix-clone',
    //   author: '@rollelflex_graphy726',
    // },
    {
      img: 'https://user-images.githubusercontent.com/60406970/168473758-37114546-de05-4e88-beea-4c452176056b.png',
      title: 'Circles',
      desc: t('circles-desc'),
      icon: [
        '/imgs/react-2.svg',
        '/imgs/tailwind-css-2.svg',
        '/imgs/redux.svg',
      ],
    },
  ];
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1600px' }}>
      <Portfolio projectData={projectData} />
    </Container>
  );
};
export default Playground;
