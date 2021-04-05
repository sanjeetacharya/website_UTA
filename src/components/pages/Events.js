import React from 'react';
import { Button } from '../Button';
import '../HeroSection.css';
import { useEffect } from "react";

function Events(){
    useEffect(() => {
        window.location.href = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YWNtLnV0YUBnbWFpbC5jb20&src=b2Nya2lldWJiY3FjaHZtdDdmajZnZWE4cDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73&color=%237986CB";
      }, []);
return (
    
        <div>
            <h2>Events at UTA</h2>
        </div>
);
}
export default Events;


