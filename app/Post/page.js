import React from 'react'

const page = () => {

  
  
  return (
    <div>POSTS</div>
  )
}

//static metadata
export const metadata = {
  title: 'My Blog Posts',
};

//dynamic metadata

export const getServerSideProps = async () => {
  const res = await fetch('https://api.example.com/posts')
  const data = await res.json()

  return {
    props: {
      posts: data,
    },
  }
}

export default page