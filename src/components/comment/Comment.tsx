import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import { ICommentAnime } from '../../interfaces/DetailsPageStore'
import moment from 'moment'

type CommentProps = {
  item: ICommentAnime
}

//Получение id и ника где есть ответ на коммент
const getBodyComment = (item: ICommentAnime) => {
  let linkIdComment = ''
  let nickIdcomment = []
  if (item.body.includes('comment=')) {
    linkIdComment = item.body.split(';')[0].split('=')[1]
    nickIdcomment = item.html_body.split('<span>')[1].split('</span>')
    return (
      <>
        <NavLink to={`/${linkIdComment}`}>@{nickIdcomment[0]}</NavLink>
        {item.body.replace(/\[(?!\d+\])[^[\]]+\]/g, '')}
      </>
    )
  }
  return item.body.replace(/\[(?!\d+\])[^[\]]+\]/g, '')
}

const Comment = ({ item }: CommentProps) => {
  return (
    <div className="comment__wrapper">
      <div className="avatar">
        <img src={item.user.image.x64} alt="avatar" />
      </div>
      <div className="comment__info">
        <div className="comment__info-header">
          <NavLink to={`/profile/${item.user_id}`}>{item.user.nickname}</NavLink>
          <span>{moment(item.created_at).fromNow()}</span>
        </div>
        <div className="comment__message">{getBodyComment(item)}</div>
      </div>
    </div>
  )
}

export default Comment
