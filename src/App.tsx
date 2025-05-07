import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { HomePage } from "./components/home-page"
import { FeaturesPage } from "./components/features-page"
import { ThemesPage } from "./components/themes-page"
import { InstallPage } from "./components/install-page"
import { DocsPage } from "./components/docs-page"
import { NewsPage } from "./components/news-page"

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="executor-theme">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/settings" element={<ThemesPage />} />
              <Route path="/install" element={<InstallPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/news" element={<NewsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
