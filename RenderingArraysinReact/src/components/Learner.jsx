import Score from './Score'; 
const Learner = ({ learner }) => {
  return (
    <div>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <div>
        {learner.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </div>
    </div>
  );
};

export default Learner;
