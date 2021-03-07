import React from 'react';

const ImageCard = ({ myImage }) => {
  const tags = myImage.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img 
        src={myImage.webformatURL} 
        className='w-full'/>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>
          Photo by {myImage.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {myImage.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {myImage.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {myImage.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag, index) => (
          <span key={index} className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;
