import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboardLayout/users')({
  component: () => <div>Hello /_dashboardLayout/users!</div>
})