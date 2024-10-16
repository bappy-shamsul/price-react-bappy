import PropTypes from 'prop-types'; 

const Links = ({route}) => {
    return (
        <div>
            
                <li className="mr-4 p-3 hover:bg-orange-700 rounded-e-3xl">
                <a href={route.path}>{route.name}</a>
            </li>
            
        </div>
    );
};

Links.propTypes = {
    // route: PropTypes.object            Phero used it
    route: PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Links;