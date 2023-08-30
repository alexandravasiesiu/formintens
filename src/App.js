import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ProjectsContactPage from './pages/Projects_contact.js';
import ProjectsAboutPage from './pages/Projects_about.js';
import ProjectsAcquisitionsPage from './pages/Projects_acquisitions.js';
import ProjectsDocumentsPage from './pages/Projects_documents.js';
import ProjectsProgressPage from './pages/Projects_progress.js';
import ProjectsEvaluationPage from './pages/Projects_evaluation.js';
import ProjectsBusinessPage from './pages/Projects_business.js';
import ProjectsLanding from './pages/Projects_landing.js';
import ProjectsMedia from './pages/Projects_media.js';
import ProjectsPrivacyPolicy from './pages/PrivacyPolicy.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/projectscontact" element={<ProjectsContactPage />} />
      <Route path="/projectsabout" element={<ProjectsAboutPage />} />
      <Route path="/projectsacquisitions" element={<ProjectsAcquisitionsPage />} />
      <Route path="/projectsdocuments" element={<ProjectsDocumentsPage />} />
      <Route path="/projectsprogress" element={<ProjectsProgressPage />} />
      <Route path="/projectsevaluation" element={<ProjectsEvaluationPage />} />
      <Route path="/projectsbusiness" element={<ProjectsBusinessPage />} />
      <Route path="/projectslanding" element={<ProjectsLanding />} />
      <Route path="/projectsmedia" element={<ProjectsMedia />} />
      <Route path="/projectspolicy" element={<ProjectsPrivacyPolicy />} />
    </Routes>
  );
}

export default App;
