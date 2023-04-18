import './Header.style.css';

import { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';

const Header = () => {
    const [session, setSession] = useState(null);

     useEffect(() => {
    setSession(supabase.auth.session);
    supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
    });
    }, []);
    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if(error) {
            console.error('Error singning out:', error.message)
        }
    }
    async function signout() {
        const { error } = await supabase.auth.signOut()
        if(error) {
            console.error('Error singning out:', error.message)
        }
    }

    return (
        <div className="auth-container">
        {session ? (
            <button className="auth-button" onClick={signout}>
            Sign out
            </button>
        ) : (
            <button className="auth-button" onClick={signInWithGoogle}>
            Sign in with Google
            </button>
        )}
        </div>
    );
};

export default Header
