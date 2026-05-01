import React from 'react'
import AvatarList from './AvatarList'
import ProfileRating from './rating/ProfileRating'
import TimeAgo from 'timeago-react'
import { ProfileLink } from '@/types/star'

export interface ByAuthorProps {
  author?: ProfileLink | ProfileLink[]
  createdTime?: string | Date | number
  className?: string
}

const ByAuthor: React.FC<ByAuthorProps> = ({
  author,
  createdTime,
  className = ''
}) => {
  if (!author && !createdTime) return null

  // Convert createdTime to Date if it's a number (Unix timestamp)
  const dateTime = createdTime
    ? typeof createdTime === 'number'
      ? new Date(createdTime * 1000)
      : typeof createdTime === 'string'
        ? new Date(createdTime)
        : createdTime
    : null

  return (
    <div className={`flex justify-end items-center space-x-1 text-slate-600 dark:text-slate-400 gap-1 text-xs mb-2 ${className}`}>
      {author && (
        <>
          By {Array.isArray(author) ? (
            <AvatarList contributors={author} showLastRating={true} />
          ) : (
            <>
              <img
                src={author?.icon || 'https://api.dicebear.com/9.x/identicon/svg?seed=ara'}
                alt={author?.nickname || 'author'}
                className='w-7 h-7 rounded-full'
              />
              {author.rating && <ProfileRating {...author.rating} />}
            </>
          )}
        </>
      )}
      {dateTime && (
        <TimeAgo datetime={dateTime} />
      )}
    </div>
  )
}

export default ByAuthor

