import { caseStudy } from '../../../public/data/data.json';
import { notFound } from 'next/navigation';

import Aistynails from '../aistynails/page';
import Fawwazco from '../fawwazco/page';
import Yuobi from '../yuobi/page';

interface Study {
  id: number;
  title: string;
  image: string;
}

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

const CaseStudyDetailPage = ({ params }: CaseStudyPageProps) => {
  const data = caseStudy.find((p) => p.id === Number(params.id));

  // Return 404 page if product not found
  if (!data) {
    notFound();
  }

  const { id } = params;

  // Conditionally render different components based on the case study ID
  switch (id) {
    case '1':
      return <Aistynails />;
    case '2':
      return <Fawwazco />;
    case '3':
      return <Yuobi />;
    default:
      notFound(); // Return 404 if the case study is not found
  }

};

export default CaseStudyDetailPage;
