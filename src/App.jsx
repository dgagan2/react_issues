import { useState, useEffect, StrictMode } from 'react'
import IssuesList from './components/IssuesList'
import './App.css'

export function App () {
  const [issues, setIssues] = useState([])
  const [search, setSearch] = useState('')
  const KEY_ENDPOINT = 'https://api.github.com/repos/facebook/react/issues'
  useEffect(() => {
    fetch(KEY_ENDPOINT)
      .then(res => res.json())
      .then(data => setIssues(data))
  }, [])
  const useSearch = (search) => {
    fetch(KEY_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setIssues(data.filter(issue => issue.title.toLowerCase().includes(search)))
      })
  }

  return (
    <main>
      <StrictMode>
        <header>
          <h1>Issues React</h1>
          <input type='text' value={search} onChange={(event) => { setSearch(event.target.value) }} />
          <button onClick={useSearch(search)}>Buscar</button>
        </header>
        <section>
          {issues.map((issue) => (
            <IssuesList key={issue.id} {...issue} />

          ))}
        </section>
      </StrictMode>
    </main>
  )
}
