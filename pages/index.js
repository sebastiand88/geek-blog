import Head from "next/head";
import { PostCard, PostWidget, Categories, NewsLetter } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Geek Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className="text-white text-2xl px-12 py-8">Featured Posts</h2>
        <FeaturedPosts />

        <div className="relative">
          <img
            className="pt-12 my-12 rounded-lg h-screen w-full object-cover"
            src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1921&q=80"
            alt=""
          />
          <h4 className="absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-2xl text-center leading-50">
            We test and review tech so you don't have to.
          </h4>
        </div>

        <h2 className="text-white text-2xl p-12">All New Tech</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map(post => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8 mb-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
