import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/example/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>Example</h1>
    <Link to="/">Home</Link>
  </div>
}
