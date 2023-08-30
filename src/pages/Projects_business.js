import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import  ProjectFooter from '../components/ProjectFooter';
import ProjectPostWrapper from '../components/ProjectPostWrapper';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};
const posts = require.context('../content/Posts/Afaceri', true, /\.js$/);

const allPostsList = posts.keys().reverse()

export default function ProjectsBusiness() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
      <ProjectNavigation/>
        <section className=''>
          <div className='container px-4 mx-auto'>
            <div className='max-w-3xl mx-auto'>
              <h3 className='font-heading text-2xl font-medium mb-8 text-center'>
                Descrierea companiilor înființate și finanțate în urma
                câștigării concursului privind planul de afaceri
              </h3>
              {allPostsList.map((post) => {
                const Post = posts(post).default;
                return <ProjectPostWrapper
                  title={posts(post).options.title}
                  >
                  <Post></Post>
                </ProjectPostWrapper>
              })}
            </div>
          </div>
        </section>
        <ProjectFooter />
      </>
    </React.Fragment>
  );
}

