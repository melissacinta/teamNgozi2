import homeImg from '../assets/img/bgs/home-bg.png';
import PropTypes from 'prop-types';

const Banner = ({ image }) => {
  return (
    <div
      className="bg-gray-500 bg-cover bg-no-repeat bg-fixed px-[4.37rem] py-[1.81rem]"
      style={{ backgroundImage: `url(${image || homeImg})` }}
    >
      <div className="min-h-[80dvh] relative">
        <div className="absolute top-2/3 -translate-y-2/3 flex gap-[0.94rem] text-white flex-col items-center md:items-start">
          <span className="inline-block py-[0.31rem] px-[0.62rem] rounded-md bg-white/20 text-[0.625rem]">
            Adventure
          </span>
          <h1 className="max-w-[33.125rem] text-4xl text-center md:text-left">
            Richird Norton photorealistic rendering as real photos
          </h1>
          <div className="flex text-primary-10 gap-[0.63rem] items-start text-xs justify-center">
            <span>08.08.2021</span>{' '}
            <div className="hidden md:flex flex-col justify-end py-2">
              <hr className="w-[1.875rem] h-2" />
            </div>
            <p className="max-w-[26.25rem]">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
Banner.propTypes = {
  image: PropTypes.string,
};
