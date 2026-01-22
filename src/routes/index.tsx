import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="App">
      <p>Open the console and type "/example" in the URL bar</p>
    </div>
  )
}
