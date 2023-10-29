import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'
import EntryForm from './pages/EntryForm'
import EntriesPage from './pages/EntriesPage'
import EntryDetail from './pages/EntryDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <EntriesPage />
      },
      {
        path: "create",
        element: <EntryForm />
      },
      {
        path: "entries/:entryId",
        element: <EntryDetail />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
