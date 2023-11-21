import BlogPostCard from '../components/BlogPostCard';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout page={'Home'}>
      <BlogPostCard />
      <h1>Good morning</h1>
    </Layout>
  );
};

export default HomePage;
