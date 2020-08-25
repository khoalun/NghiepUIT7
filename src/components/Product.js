import React, { Component } from "react";

class Product extends Component {
    render() {
        return (
          <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="thumbnail">
                <img
                  alt="iphone 6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2ZaAxc5ARs5fMGy9ZFqHgPuPLwGJ2tmNezI1Q3pgWkoXooqtgw0vqUXhHO_Ab-i4K9PCfbLk&usqp=CAc"
                />
                <div className="caption">
                  <h3>Iphone 6 plus</h3>
                  <p>1600000 vnd</p>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-default">Mua hang</button>
            <button type="button" className="btn btn-default">Tra Hang</button>
          </div>
         
        );
    }
}


export default Product;
