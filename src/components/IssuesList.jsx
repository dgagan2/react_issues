import React from 'react'

const IssuesList = ({ html_url, number, title, user, labels, state }) => {
  const Labels = labels.map((label) => (
    <span key={label.id} style={{ backgroundColor: `#${label.color}` }}>{label.name}</span>
  ))
  return (
    <article className='issuesListBox'>
      <div className='imageBox'>
        <img src={user.avatar_url} alt='perfil_image'/>
        <p>
          <a href={user.html_url}>{user.login}</a>
        </p>
      </div>
      <a href={html_url}>{title}</a>
      <div className='LabelsBox'>{Labels}</div>
      <span className='labels'>#{number} {state} by {user.login}</span>
    </article>

  )
}

export default IssuesList
