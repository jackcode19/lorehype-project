import { blogPosts } from '../../../public/data/data.json';
import { notFound } from 'next/navigation';
import AvousPeace from '../1/page';

interface Blog {
  id: number;
  title: string;
  image: string;
}

interface BlogDetailProps {
  params: {
    id: string;
  };
}

const BlogDetailPage = ({ params }: BlogDetailProps) => {
  const data = blogPosts.find((p) => p.id === Number(params.id));

  // Return 404 page if product not found
  if (!data) {
    notFound();
   }
   
   return (
   <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img src={blogPosts.image} alt={blogPosts.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        </div>
      </div>
    </div>
)

//   const { id } = params;

//   switch (id) {
//     case '1':
//       return <AvousPeace />;
//     default:
//       notFound();
//   }

};

export default BlogDetailPage;
