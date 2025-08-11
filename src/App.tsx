import "./App.css";
import { ThemeProvider } from '@/components/theme-provider';
import NavBar from '@/components/ui/nav-bar';
import MainSection from '@/components/main-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

function App() {

  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-pr-theme'>
      <NavBar />
      <MainSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
