import React from 'react';
import CodingChallengesList from '../../components/coding-challenges-list/coding-challenges-list';
import styles from './home-page.module.css';

const codingChallenges = [
  { id: '1', title: 'Sum of three items', difficulty: 'easy' as 'easy' },
  { id: '2', title: 'Sum of three items', difficulty: 'easy' as 'easy' },
  { id: '3', title: 'Sum of three items', difficulty: 'average' as 'average' },
];

const codingChallengesUserData = [
  { id: '1', completed: true },
  { id: '2', completed: true },
];

const HomePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>{'Coding Challenges'}</h1>
      <CodingChallengesList
        codingChallenges={codingChallenges}
        codingChallengesUserData={codingChallengesUserData}
      />
    </div>
  );
};

export default HomePage;
