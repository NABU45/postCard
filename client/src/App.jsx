import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt, FaCommentAlt, FaFacebookMessenger } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiShareFat, PiShareBold } from "react-icons/pi";
import { FaHeart, FaAngry, FaSmile, FaSadTear, FaGrinBeam, FaThumbsUp, FaHeartBroken } from "react-icons/fa"; // Import new icons
import profile from '../src/images/profile.jpg';
import picture1 from '../src/images/picture1.jfif';

function App() {
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [shared, setShared] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emojiName, setEmojiName] = useState('Like');

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setShowEmojis(false);
    setLiked(true);

    switch (emoji) {
      case 'Love':
        setEmojiName('Heart');
        break;
      case 'angry':
        setEmojiName('Angry');
        break;
      case 'smile':
        setEmojiName('Smile');
        break;
      case 'sad':
        setEmojiName('Sad');
        break;
      case 'care':
        setEmojiName('Care');
        break;
      case 'like':
        setEmojiName('Like');
        break;
      case 'heartbreak':
        setEmojiName('Heartbreak');
        break;
      default:
        setEmojiName('Like');
        break;
    }
  };

  const renderEmoji = () => {
    switch (selectedEmoji) {
      case 'heart':
        return <FaHeart size={18} className="text-red-500" />;
      case 'angry':
        return <FaAngry size={18} className="text-red-700" />;
      case 'smile':
        return <FaSmile size={18} className="text-yellow-500" />;
      case 'sad':
        return <FaSadTear size={18} className="text-blue-500" />;
      case 'care':
        return <FaGrinBeam size={18} className="text-yellow-400" />;
      case 'like':
        return <FaThumbsUp size={18} className="text-blue-500" />;
      case 'heartbreak':
        return <FaHeartBroken size={18} className="text-red-500" />;
      default:
        return liked ? <AiFillLike size={18} /> : <AiOutlineLike size={18} />;
    }
  };

  return (
    <div className='p-4 md:p-12 flex justify-center'>
      <div className='w-full md:w-1/2 lg:w-1/3 h-full border-4 rounded-lg border-slate-100 py-3'>
        <div className='flex justify-between px-4'>
          <div className='flex p-1 gap-2'>
            <div className='relative'>
              <div className='absolute top-0 left-0 w-full h-full rounded-full ring-2 ring-blue-500'></div>
              <div className='p-1 bg-white rounded-full'>
                <img src={profile} alt="Profile" className='h-[40px] w-[40px] rounded-full' />
              </div>
            </div>
            <p className='mt-3 text-slate-500'>toxiclady9906</p>
          </div>
          <div>
            <BsThreeDots size={25} className='mt-3' />
          </div>
        </div>
        <div className='p-[6px]'>
          <h1 className='text-[12px]'>Embracing the dawn, this serene morning captures the essence of tranquility. 🔅😎#SunriseVibes #NatureLover</h1>
        </div>
        <div>
          <img src={picture1} alt="Post" className='w-full h-auto rounded-lg' />
        </div>

        <div className='flex justify-between p-2'>
          <div className='flex justify-center gap-1 items-center relative'>
            <button
              onClick={() => setLiked(!liked)}
              className={`rounded-full p-[3px] ${liked ? 'bg-blue-200 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {renderEmoji()}
            </button>
            <p className='mt-[2px] text-[10px] font-semibold'>12.7k</p>
          </div>
          <div className='flex text-[10px] gap-1 font-semibold items-center'>
            <p>2.3k Share</p>
            <p className='h-3 w-3 rounded-full bg-yellow-400'></p>
            <IoMdArrowDropdown size={16} />
          </div>
        </div>
        <hr className='mt-0' />
        <div className='py-2 px-4 md:px-14 flex justify-between items-center'>
          <div className='flex justify-center items-center gap-1 font-semibold relative'>
            <button
              onMouseEnter={() => setShowEmojis(true)}
              // onMouseLeave={() => setShowEmojis(false)}
              onClick={() => setLiked(!liked)}
              className='flex items-center gap-1'>
              {liked ? <AiFillLike size={14} /> : <AiOutlineLike size={14} />}
              <p className='text-[10px]'>{emojiName}</p>
            </button>
            {showEmojis && (
              <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 flex gap-2 p-2 bg-white border rounded-lg shadow-lg'>
                <button onClick={() => handleEmojiClick('like')}><FaThumbsUp size={20} className='text-blue-500' /></button>
                <button onClick={() => handleEmojiClick('heart')}><FaHeart size={20} className='text-red-500' /></button>
                <button onClick={() => handleEmojiClick('angry')}><FaAngry size={20} className='text-red-700' /></button>
                <button onClick={() => handleEmojiClick('smile')}><FaSmile size={20} className='text-yellow-500' /></button>
                <button onClick={() => handleEmojiClick('sad')}><FaSadTear size={20} className='text-blue-500' /></button>
                <button onClick={() => handleEmojiClick('care')}><FaGrinBeam size={20} className='text-yellow-400' /></button>
                <button onClick={() => handleEmojiClick('heartbreak')}><FaHeartBroken size={20} className='text-red-500' /></button>
              </div>
            )}
          </div>
          <div className='flex justify-center items-center gap-1 font-semibold'>
            <button onClick={() => setCommented(!commented)} className='flex items-center gap-1'>
              {commented ? <FaCommentAlt size={14} /> : <FaRegCommentAlt size={15} />}
              <p className='text-[10px]'>Comment</p>
            </button>
          </div>
          <div className='flex justify-center items-center gap-1 font-semibold'>
            <button onClick={() => setShared(!shared)} className='flex items-center gap-1'>
              {shared ? <PiShareBold size={14} /> : <PiShareFat size={14} />}
              <p className='text-[10px]'>Share</p>
            </button>
          </div>
        </div>
        <div className='flex gap-6 p-2 justify-center'>
          <div className='rounded-lg bg-blue-500 px-10 w-2/3 flex justify-center items-center'>
            <p className='bg-white rounded-full flex justify-center items-center w-4 h-4'>i</p>
            <p className='ml-3 text-white'>Learn more</p>
          </div>
          <div className='bg-blue-500 w-10 rounded-lg h-8 flex justify-center items-center'>
            <FaFacebookMessenger size={20} className='text-white' />
          </div>
          <div className='border-2 border-blue-500 w-10 rounded-lg h-8 flex justify-center items-center'>
            <BsThreeDots size={25} className='text-blue-500' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
