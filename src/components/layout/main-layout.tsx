import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

interface MainLayoutProps {
  children: React.ReactNode
  hideHeader?: boolean
  hideFooter?: boolean
}

export function MainLayout({
  children,
  hideHeader = false,
  hideFooter = false
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: '#FAFBFC' }}>
      {!hideHeader && <Header />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  )
}
