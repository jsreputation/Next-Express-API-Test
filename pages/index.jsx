import Head from 'next/head'


export default function Home() {
    const testData = {
        email: 'jsreputation@gmail.com',
        text: 'This is API test'
    }

  const testApi = (method) => {
        fetch('/api/test', {
            method
        })
        .then((response) =>  response.json())
        .then((data) => {
            alert(data.message);
        });
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'main'}>

        <button onClick={() => testApi('POST')}>Test POST Method</button>
        <button onClick={()=>testApi('GET')}>Test Get Method</button>

      </div>

    </div>
  )
}
