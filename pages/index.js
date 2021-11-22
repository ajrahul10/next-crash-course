import Head from 'next/head'
import PostList from '../components/PostList'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Webpack Title</title>
        <meta name="keywords" content="Web development"></meta>
      </Head>

      <PostList posts={posts} />
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6')
  const posts = await res.json()
  
  return {
    props: {
      posts
    }
  }
}