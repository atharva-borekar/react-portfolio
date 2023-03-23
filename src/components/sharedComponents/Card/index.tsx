import './card.scss';
const CustomCard = ({ frontContent, backContent }: { frontContent?: any; backContent?: any }) => {
  return (
    <div className='flip-box'>
      <div
        className='front'
        style={{
          backgroundImage: require('https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350'),
        }}
      >
        <div className='content text-center'>
          {frontContent}
          <br />
          <span className='click-for-more'></span>
        </div>
      </div>
      <div className='back'>
        <div className='content'>{backContent}</div>
      </div>
    </div>
  );
};

export default CustomCard;
