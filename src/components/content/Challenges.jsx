import React, { useEffect, useState } from 'react';
import "./content.css";
import challengedata from './challengedata.json';

const Challenges = ({ category }) => {
  const [challenges, setChallenges] = useState([]);

  
  // useEffect(() => {
  //   const fetchChallenges = async () => {
  //     try {
  //       const response = await fetch('https://www.hackthebox.com/api/v4/profile/content/1098862');
  //       const data = await response.json();
  //       const challengesData = data.profile.content.challenges;

  //       const challengesDict = challengesData.map(challenge => ({
  //         id: challenge.id,
  //         name: challenge.name
  //       }));

  //       setChallenges(challengesDict);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchChallenges();
  // }, []);

  useEffect(() => {
      setChallenges(challengedata)
    }, []);

  return (
    <div className='latestcontents'>
      <ul>
        {challenges.map((link, index) => (
          <li key={index} >
            <a href={link.url} target="_blank" rel="noopener noreferrer" className='contentlist'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenges;
