import React from 'react'
import style from './Skeleton.module.css'

export const Skeleton = () => {
  return (
    <div className={style.skeleton}>
      <div className="flex justify-between items-center w-full">
        <div className={style['skeleton-supplier']}></div>
        <div className={style['skeleton-info']}></div>
      </div>
    </div>
  )
}
