import React from 'react';
import { Button } from '../Button';
import '../HeroSection.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';


function Events(){
    
    // useEffect(() => {
    //  window.location.href = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YWNtLnV0YUBnbWFpbC5jb20&src=b2Nya2lldWJiY3FjaHZtdDdmajZnZWE4cDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73&color=%237986CB";
    //  }, []);
      
return (
    <h2>
        <div>
        <a target="_blank" href="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YWNtLnV0YUBnbWFpbC5jb20&src=b2Nya2lldWJiY3FjaHZtdDdmajZnZWE4cDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73&color=%237986CB">Events at ACM</a>

            
        </div>
        </h2>
);
}
export default Events;


