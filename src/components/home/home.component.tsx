import './home.style.css'

type Home = {
    pageTitle: string;
}

const Home: React.FC<Home> = ({ pageTitle }) => {

    return (
        <div>
            <h1 className='title-menu'>{pageTitle}</h1>
            <hr></hr>
            <p>With this app, you can easily add, edit, and delete products
                with just a few clicks. The best part? All the data is stored
                securely in Supabase,
                ensuring the utmost privacy and security for my customers.</p>
            <a href="https://reactjs.org/">React</a>
            <br/>
            <a href="https://supabase.io/">Supabase</a>
        </div>
    )
}

export default Home;