import { AppGuard } from "../components/app-guard";


export default function Layout({ children }) {
  return <AppGuard>{children}</AppGuard>
}
