// Data fetching 

SSR: server side rendering 

async function page ({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {cashe: 'no-store'}
  );
  const data = await res.json()
  return (
    <div>POSTS</div>
  )
}

SSG: Static Site Generation

async function page ({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    <!-- {cashe: 'no-store'} --> store caches
  );
  const data = await res.json()
  return (
    <div>POSTS</div>
  )
}

ISR: Incremental Static Generation 

async function page ({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 10 } } store but after sometime it refreshes
  );
  const data = await res.json()
  return (
    <div>POSTS</div>
  )
}