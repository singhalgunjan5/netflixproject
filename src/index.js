import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards'
import './index.css'

ReactDOM.render(<>
<h1 className='heading_style'>Gunjan's Favorite Netflix Series</h1>
  <Card
    imgsrc='https://m.media-amazon.com/images/M/MV5BY2NmNzEzN2QtMTBhOC00OGY1LThkMGMtZTIwMTE3MmUyNDc1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'
    title='Netflix Original Series'
    sname='Cobra Kai'
    link='https://www.netflix.com/in/title/81002370'

  />
  <Card
     imgsrc='https://m.media-amazon.com/images/M/MV5BZWQyZTkwMTMtYTJiZS00MGNlLThhN2EtYzEzOGQzYjFiZGQxXkEyXkFqcGdeQXVyMTEzMjQ4NzEw._V1_.jpg'
     title='Netflix Original Series'
    sname='Crash Landing on You'
    link='https://www.netflix.com/in/title/81159258'
  />
   <Card
     imgsrc='https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/locke-and-key.jpg'
     title='Netflix Original Series'
    sname='Locke & Key'
    link='https://www.netflix.com/in/title/80241239'
  />
   <Card
     imgsrc='https://m.economictimes.com/thumb/msid-87237722,width-1200,height-900,resizemode-4,imgsize-81056/squid-game-main.jpg'
     title='Netflix Original Series'
    sname='Squid Game'
    link='https://www.netflix.com/in/title/81040344'
  />
   <Card
     imgsrc='https://i1.wp.com/wikiwiki.in/wp-content/uploads/2020/11/Mismatched-Netflix.jpg?fit=1280%2C720&ssl=1'
     title='Netflix Original Series'
    sname='Mismatched'
    link='https://www.netflix.com/in/title/80220079s'
  />
   <Card
     imgsrc='https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCPes-ttMtVu0rnEWOa7hszdNY6jJMjBG0dVXNdbWBSBmFdFK9MQZpyv6di8ASdo9brbIU0U1vPFR_juVFfZfw5APcCwErP60M_q5GekUDkpcfe6mjN7nnqoQ7yCQ.jpg?r=dcb'
     title='Netflix Original Series'
    sname='Stranger Things'
    link='https://www.netflix.com/in/title/80057281'
  />

 
 
</>
,
  document.getElementById('root')
);


