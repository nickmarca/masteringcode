import React from 'react';
import classnames from 'classnames';
import CheckmarkSVG from '../../fragments/svgs/checkmark-svg';
import styles from './coding-challenges-list.module.css';

type CodingChallengesListProps = {
  codingChallenges: {
    id: string;
    difficulty: 'easy' | 'average' | 'hard';
    title: string;
  }[];
  codingChallengesUserData: {
    id: string;
    completed: boolean;
  }[];
};

const CodingChallengesList: React.FC<CodingChallengesListProps> = ({
  codingChallenges,
  codingChallengesUserData,
}) => {
  const completed = codingChallengesUserData.filter(
    data => data.completed,
  ).length;

  const isCompleted = (id: string) =>
    codingChallengesUserData.find(item => item.id === id)?.completed;

  return (
    <div className={styles.container}>
      <h5>{`Completed (${completed})`}</h5>
      <ul className={styles.list}>
        {codingChallenges.map(({ id, title, difficulty }) => (
          <li key={id}>
            <a href="/">
              <span className={styles.checkbox}>
                {isCompleted(id) && <CheckmarkSVG />}
              </span>
              <span className={styles.title}>{title}</span>
              <span
                className={classnames(styles.difficulty, {
                  [styles[difficulty]]: difficulty,
                })}
              >
                {difficulty}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingChallengesList;
