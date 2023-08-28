import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import  ProjectPostWrapper  from '../components/ProjectPostWrapper';
import  ProjectFooter  from '../components/ProjectFooter';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

const posts = require.context('../content/Posts', true, /\.js$/);

const allPostsList = posts.keys().sort((a, b) => {
  const postA = posts(a).options.id;
  const postB = posts(b).options.id;
  if (postA < postB) {
    return 1;
  }
  if (postA > postB) {
    return -1;
  }
  return 0;
});

export default function ProjectsLanding() {
  const [page, setPage] = React.useState(0);
  const [postsPerPage, setPostsPerPage] = React.useState(10);
  const initalPostsList = allPostsList.slice(0, postsPerPage);
  const [postsList, setPostsList] = React.useState(initalPostsList);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <ProjectNavigation />
        <section className=''>
          <div className='container px-4 mx-auto'>
            <div className='max-w-3xl mx-auto'>
              <h3 className='font-heading text-2xl font-medium mb-8 text-center'>
                Imagini și video-uri de pe teren sau rezultatele produse prin
                practica, actualizări, testimoniale sau momente importante în
                evoluția proiectului
              </h3>
              {postsList.map((post) => {
                const Post = posts(post).default;
                return <ProjectPostWrapper
                  title={posts(post).options.title}
                  category={posts(post).options.category}
                  category_link={posts(post).options.category_link}>
                  <Post></Post>
                </ProjectPostWrapper>
              })}
            </div >

            <div class="flex justify-center py-5">

              <button id="previous-btn" class="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                  const previousPage = page - 1;
                  const start = previousPage * postsPerPage;
                  const end = start + postsPerPage;
                  const previousPostsList = allPostsList.slice(start, end);
                  setPostsList(previousPostsList);
                  setPage(previousPage);
                }
                }
                disabled={page == 0}
              >
                <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                Previous
              </button>
              <button id="next-btn" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                  const nextPage = page + 1;
                  const start = nextPage * postsPerPage;
                  const end = start + postsPerPage;
                  const nextPostsList = allPostsList.slice(start, end);
                  setPostsList(nextPostsList);
                  setPage(nextPage);
                }
                }
                disabled={page == Math.floor(allPostsList.length / postsPerPage)}
              >
                Next
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
          </div >
        </section >
        <ProjectFooter />
      </>
    </React.Fragment >
  );
}

