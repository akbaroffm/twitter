import React, { useState } from 'react';

function PostAction({ actionIcon, activeIcon, actionCount, activeColor }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <li onClick={handleClick} className="flex items-center space-x-[10px] cursor-pointer w-[24px] h-[24px]">
            <img src={isActive ? activeIcon : actionIcon} alt="post icon" width={20} height={20} />
            {actionCount !== undefined && (
                isActive ? (
                    <span className={`${activeColor} text-[16px]`}>{actionCount + 1}</span>
                ) : (
                    <span className="text-gray-500 text-[16px]">{actionCount}</span>
                )
            )}
        </li>
    );
}

export default PostAction;
