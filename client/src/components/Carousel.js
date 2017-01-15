import React, {Component} from 'react';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  render() {
    const {children} = this.props;
    return (
      <div className="carousel-container active">
        <div className="carousel-content">
          { children.map((r, i) => {
            return (<div key={i} className={i === this.state.activeIndex ? 'current item' : 'item'}>{r}</div>)
          })
          }
        </div>
      </div>
    );
  }
}

export default Carousel;