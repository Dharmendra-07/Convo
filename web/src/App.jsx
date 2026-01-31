import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
    <h1>Hello World</h1>
    {/* token with the req*/}

      <SignedOut>
        <SignInButton mode='model'/>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

export default App
