import '@styles/Banner.css';
import { getCountDownVals } from '@components/vote-count/countDownUtil';

const Banner = () => {
  return (
    <div className="Banner">
      <p>
        TALO is currently in the process of bargaining with Brown on a union
        contract. Follow{' '}
        <a href="https://www.instagram.com/talabororg/">our Instagram</a> for
        updates!
      </p>
    </div>
  );
};

export default Banner;
