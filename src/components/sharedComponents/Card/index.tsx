import './card.scss';
const CustomCard = ({ frontContent, backContent }: { frontContent?: any; backContent?: any }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>{frontContent}</div>
        <div className='flip-card-back'>{backContent}</div>
      </div>
    </div>
  );
};

export default CustomCard;
