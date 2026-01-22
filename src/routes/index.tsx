import { createFileRoute, Link } from '@tanstack/react-router'
import '../App.css'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="App">
      <Link to="/example">Example</Link>
    </div>
  )
}
