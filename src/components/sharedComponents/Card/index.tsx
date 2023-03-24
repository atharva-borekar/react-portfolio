import './card.scss';
const CustomCard = ({ frontContent, backContent }: { frontContent?: any; backContent?: any }) => {
  return (
    <div className='flip-box'>
      <div className='front bg-dark'>
        <div className='content'>{frontContent}</div>
      </div>
      <div className='back bg-dark'>
        <div className='content'>{backContent}</div>
      </div>
    </div>
  );
};

export default CustomCard;
