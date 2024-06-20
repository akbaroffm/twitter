import React, { useState, useEffect } from 'react';
import Mode from '../../assets/images/mode.svg';

function Header({ title }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between pl-[20px] pb-[20px] pr-[20px] border-b-[1px] border-slate-400">
      <h2 className="font-bold text-[22px]">{title}</h2>
      <div className="flex items-center">
        <div className="mr-5 text-sm text-[#000] ">{currentTime.toLocaleTimeString()}</div>
        <button>
          <img src={Mode} width={24} height={24} alt="Mode Icon" />
        </button>
      </div>
    </div>
  );
}

export default Header;
