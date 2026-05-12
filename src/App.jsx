import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";

function Router() {
  const path = window.location.pathname;

  if (path === "/about" || path === "/about.html") return <About />;
  if (path === "/services" || path === "/services.html") return <Services />;
  if (path === "/projects" || path === "/portfolio" || path === "/portfolio.html" || path === "/projects.html") return <Projects />;
  if (path.startsWith("/projects/")) return <ProjectDetail slug={path.split("/").filter(Boolean)[1]} />;
  if (path === "/faq" || path === "/faq.html") return <FAQ />;
  if (path === "/contact" || path === "/contact.html") return <Contact />;
  return <Home />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}
