import React from 'react';

function Header() {
    return (
        <nav className="fixed w-full bg-[#050833d5] p-4 text-white">
            <nav className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <a href="/" className="text-xl font-semibold hover:underline">Home</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/signin" className="hover:underline">Sign In</a>
                    <a href="/signout" className="hover:underline">Sign Out</a>
                </div>
            </nav>
        </nav>
    );
}

export default Header;
