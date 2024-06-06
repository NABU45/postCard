// LikeButton.js
import React, { useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { FaHeart, FaAngry, FaSmile, FaSadTear, FaGrinBeam, FaHeartBroken } from 'react-icons/fa';

const LikeButton = ({ liked, setLiked, setSelectedEmoji }) => {
  const [showEmojis, setShowEmojis] = useState(false);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setLiked(true);
    setShowEmojis(false);
  };

  return (
    <div className='flex justify-center items-center gap-1 font-semibold relative'>
      <button
        onMouseEnter={() => setShowEmojis(true)}
        // onMouseLeave={() => setShowEmojis(false)}
        className='flex items-center gap-1'>
        {liked ? <AiFillLike size={14} /> : <AiOutlineLike size={14} />}
        <p className='text-[10px]'>Like</p>
      </button>
      {showEmojis && (
        <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 flex gap-2 p-2 bg-white border rounded-lg shadow-lg'>
          <button onClick={() => handleEmojiClick('heart')}><FaHeart size={20} className='text-red-500' /></button>
          <button onClick={() => handleEmojiClick('angry')}><FaAngry size={20} className='text-red-700' /></button>
          <button onClick={() => handleEmojiClick('smile')}><FaSmile size={20} className='text-yellow-500' /></button>
          <button onClick={() => handleEmojiClick('sad')}><FaSadTear size={20} className='text-blue-500' /></button>
          <button onClick={() => handleEmojiClick('care')}><FaGrinBeam size={20} className='text-yellow-400' /></button>
          <button onClick={() => handleEmojiClick('heartbroken')}><FaHeartBroken size={20} className='text-gray-500' /></button>
        </div>
      )}
    </div>
  );
};

export default LikeButton;
