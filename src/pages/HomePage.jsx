import BlogPostCard from '../components/BlogPostCard';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout page={'Home'}>
      <BlogPostCard />
    </Layout>
  );
};

export default HomePage;
