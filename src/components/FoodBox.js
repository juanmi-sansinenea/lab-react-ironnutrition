import './FoodBox.css';
import 'bulma/css/bulma.css';
//import foods from './../foods.json';

import React from 'react'

const FoodBox = (props) => {
  const {name, calories, image} = props;
    return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64" >
              <img src={image} alt="food"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
}

export default FoodBox


// export default class FoodBox extends Component {
//   render() {
//     return (
//       <div className="box">
//         <article className="media">
//           <div className="media-left">
//             <figure className="image is-64x64">
//               <img src="https://i.imgur.com/eTmWoAN.png" />
//             </figure>
//           </div>
//           <div className="media-content">
//             <div className="content">
//               <p>
//                 <strong>Pizza</strong> <br />
//                 <small>400 cal</small>
//               </p>
//             </div>
//           </div>
//           <div className="media-right">
//             <div className="field has-addons">
//               <div className="control">
//                 <input className="input" type="number" value="1" />
//               </div>
//               <div className="control">
//                 <button className="button is-info">+</button>
//               </div>
//             </div>
//           </div>
//         </article>
//       </div>
//     );
//   }
// }