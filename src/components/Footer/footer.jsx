import './Footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-container'>
                <span>&copy; 2026 Studio Alfa</span>
                <div className='footer-icons'>
                    <a href="#" aria-label='Instragam'>&#x1F4f7;</a>
                    <a href="#" aria-label='Github'> &#x1FaBB; </a>
                    <a href="#" aria-label='Email'>&#x2709;</a>
                </div>
            </div>
        </footer>
    )
}