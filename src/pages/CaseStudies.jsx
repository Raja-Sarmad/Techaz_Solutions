import React from 'react';
import PageLayout from '../components/PageLayout';
import CaseStudies from '../components/CaseStudies';

const CaseStudiesPage = () => {
  return (
    <PageLayout>
      <div className="pt-20">
        <CaseStudies />
      </div>
    </PageLayout>
  );
};

export default CaseStudiesPage;
