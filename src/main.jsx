import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './VoteApp/Styles.css'
import VotingApp from './VoteApp/Votingapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VotingApp/>
  </StrictMode>,
)