import React from 'react'


function Footer() {
  return (
    <footer className='bg-dark text-light py-4 mt-5'>
        <div className='container text-center'>
            <p className='mb-2'>
                © {new Date().getFullYear()} Egemen Turudioğlu
            </p>

            <div className='d-flex justify-content-center gap-3'>
                <a href="mailto:turudiogluegemen47@gmail.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none fs-5">E-Mail</a>
                <a href="https://github.com/segemens" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"><i className="bi bi-github me-2 fs-4"></i></a>
                <a href="https://www.linkedin.com/in/egemen-turudio%C4%9Flu-55bb37245/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"><i className="bi bi-linkedin me-2 fs-4"></i></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer