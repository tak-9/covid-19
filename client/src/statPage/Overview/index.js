
import React from 'react';
import Card from '../Card';

function Overview() {

  return (
    <div>
      <div className="row">
        <h1 class="h3 mb-2 ml-3 text-gray-800">Worldwide</h1>
      </div>
      <div className="row">
        <Card
            case = {"Confirmed"}
            number = {"2,628,929"}
            icon = {"fas fa-head-side-cough"}
            color = {"warning"}
        />
        <Card
            case = {"Recovered"}
            number = {"784,986"}
            icon = {"far fa-laugh-beam"}
            color = {"primary"}
        />
        <Card
            case = {"Deaths"}
            number = {"183,441"}
            icon = {"fas fa-skull-crossbones"}
            color = {"danger"}
        />
      </div>
    </div>
  );
}
export default Overview;
