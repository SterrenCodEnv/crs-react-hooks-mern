import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, author }) => {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subTitle}</p>
      <p>{author}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: 'No Title',
  subTitle: 'No SubTitle',
  author: 'Admin',
};
