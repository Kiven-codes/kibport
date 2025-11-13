import React, { useState } from 'react';

// Main/Home Page
function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4 mb-4">Kibb</h1>
        <p className="lead mb-4">Hi! I'm an aspiring web developer and network specialist.</p>
        <img 
          src="kibbbbb.jfif" 
          alt="Profile" 
          className="rounded-circle mb-4"
        />
        <div className="mt-4">
          <h3>My Skills/Hobbies</h3>
          <div className="row mt-3">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">HTML & CSS</h5>
                  <p className="card-text">Building beautiful and responsive layouts</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Playing Volleyball</h5>
                  <p className="card-text">Passionate of playing volleyball since Grade 4</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Traveling</h5>
                  <p className="card-text">I also love traveling especially with my special someone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// About Page
function About() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">About Me</h1>
      <div className="row">
        <div className="col-md-8">
          <p className="lead">
            Hello! I'm a beginner in web development.
          </p>
          <p>
            I started my journey in web development by learning the basics of HTML and CSS.
            Currenlty, I am now learning and studying about frontend and deployement. Also I have 
            an interest in networks and I am currently studying about it.
          </p>
          <h3 className="mt-4">My Journey</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> Started learning web development</li>
            <li className="list-group-item"> Built my first portfolio</li>
            <li className="list-group-item"> Learning frontend using vite and react</li>
            <li className="list-group-item"> Currently studying about networks</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Facts About Me</h5>
              <ul className="list-unstyled">
                <li><strong>Name:</strong> James Kiven Collantes Burce</li>
                <li><strong>Location:</strong> Banga, Tinambac, Camarines Sur</li>
                <li><strong>Email:</strong> jameskivenburce0@gmail.com</li>
                <li><strong>Interests:</strong> Traveling, Playing Sports, Music</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Me</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Get In Touch</h5>
              <p className="card-text">
                Feel free to reach out to me for any questions or opportunities!
              </p>
              <ul className="list-unstyled mb-3">
                <li className="mb-2"> Email: <a href="mailto:jameskivenburce0@gmail.com">jameskivenburce0@gmail.com</a></li>
                <li className="mb-2"> Phone: 09506996955</li>
                <li className="mb-2"> Location: Tinambac Camarines Sur</li>
              </ul>
              <div className="mt-3">
                <a 
                  href="https://www.facebook.com/kivenmainacc" 
                  className="btn btn-outline-primary me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a 
                  href="https://github.com/Kiven-codes" 
                  className="btn btn-outline-dark me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="mailto:jameskivenburce0@gmail.com"
                  className="btn btn-outline-success"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">My Portfolio</span>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => setCurrentPage('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => setCurrentPage('about')}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link ${currentPage === 'contact' ? 'active' : ''}`}
                  onClick={() => setCurrentPage('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1">
        {renderPage()}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">© James Kiven Burce.</p>
      </footer>
    </div>
  );
}