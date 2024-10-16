import PropTypes from 'prop-types'; 

const Links = ({route}) => {
    return (
        <div>
            
                <li className="mr-4">
                <a href={route.path}>{route.name}</a>
            </li>
            
        </div>
    );
};

Links.propTypes = {
    route: PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Links;