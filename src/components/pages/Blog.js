import React from 'react';
import { Button } from '../Button';
import '../HeroSection.css';
import { useEffect } from "react";

function Blog(){
    useEffect(() => {
        window.location.href = "https://www.theshorthorn.com/life_and_entertainment/technology_games/";
      }, []);
return (
    
        <div>
            <h2>Blog</h2>
        </div>
);
}
export default Blog;