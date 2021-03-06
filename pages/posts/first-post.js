import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>MyFirstPost!</title>
        <meta name="og:title" content="MyFirstPost!" />
        <meta
          name="description"
          content="Should be my title"
        />
      </Head>
      <h1>First Post</h1>
      
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  )
}

