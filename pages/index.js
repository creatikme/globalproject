import Head from 'next/head'
import Layout from '../components/layout'
import Herosection from '../components/hero-section'


export default function Home() {
  return (
     <>
      <Layout>
        <Head>
          <title>Index</title>
        </Head>
        <Herosection />      
        
      </Layout>
     </>
  )
}
