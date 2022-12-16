import React from 'react'
import { useState } from 'react'
import Item from '../Item/Item'
import './PostsList.sass'

const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [keyword, setKeyword] = useState("")

  const onKeywordChangeHandle = (e: any) => {
    setKeyword(e.target.value)
  }

  const fetchData = async () => {
    await fetch(`https://hn.algolia.com/api/v1/search?query=${keyword}`)
      .then(res => res.json())
      .then(data => data.hits)
      .then(data => setPosts(data))
      .then(data => console.log(data));
  }

  return (
    <div className='container'>
      <div className='searchBar'>
        <input value={keyword} onChange={onKeywordChangeHandle} placeholder="search keyword"></input>
      </div>
      <div>
        <button disabled={keyword === '' || keyword === undefined ? true : false} title='Search' onClick={fetchData}>
          search
        </button>
      </div>
      <ul>
        <li>
          {posts?.map((item: any) =>
            <Item
              key={item.objectID}
              identifier={item.objectID}
              author={item.author}
              title={item.title}
              url={item.url}
            ></Item>
          )}
        </li>
      </ul>
    </div>
  )
}

export default PostsList