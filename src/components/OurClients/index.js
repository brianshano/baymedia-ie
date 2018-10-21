import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import './styles.css';

class OurClients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      title: ''
    };
  }

  render() {
    const clients = [
      {
        name: 'fedex', 
        url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540152499/Baymedia/client%20logos/fedex.jpg',
      },
      {
        name: 'curragh', 
        url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540153078/Baymedia/client%20logos/CurraghLOGO.jpg',
      },
      {
        name: 'ladbrokes', 
        url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540152588/Baymedia/client%20logos/ladbrokes-logo-640x258.png'
      },
      // {
      //   name: 'newbridgeGrassroo', 
      //   url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540152499/Baymedia/client%20logos/grassroots.jpg',
      // },
      {
        name: 'dfs', 
        url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540152499/Baymedia/client%20logos/DFS.jpg',
      },
      {
        name: 'carrick', 
        url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540152499/Baymedia/client%20logos/carrick_400.png',
      },
      {
        name: 'gathering', 
        url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540153306/Baymedia/client%20logos/thegathering.jpg',
      },
      {
        name: 'daa', 
        url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540152499/Baymedia/client%20logos/daa_logo.jpg',
      },
      // {
      //   name: 'cluainmeala', 
      //   url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540152499/Baymedia/client%20logos/Cluan_meala_logo.jpg',
      // },
      {
        name: 'dubai', 
        url: 'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_200/v1540152499/Baymedia/client%20logos/DDF_logo.jpg',
      },
    ];
    const listItems = clients.map((d) => <li className='client-item' alt={d.name} key={d.name}><img className="client-item-image" src={d.url}/></li>);


    return (
      <div>
        <section style={{
            margin: '0 auto',
            maxWidth: '40rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'space-around',
            backgroundColor: '#F4F7F8'
        }}>
          {listItems}

        </section>
      </div>
    );
  }
}

OurClients.propTypes = {
  bg1: PropTypes.string
};

export default OurClients;
