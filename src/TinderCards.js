import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://www.usnews.com/dims4/USNEWS/9bd9d85/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://image.cnbcfm.com/api/v1/image/105510261-1591797492468preview.jpg?v=1646662881&w=929&h=523&vtcrop=y",
    },
  ]);

const swiped = (direction, nameToDelete) =>{
  console.log("removing: "+nameToDelete)
};
const outOfFrame = (name) => {
  console.log(name + "left the screen: ");
};

  return (
  <div className="tinderCards">
    <div className="container_cards">
      {people.map((person)=>(
        <TinderCard className="swipe"
        key={person.name}
        preventSwipe={["up","down"]}
        onSwipe={(dir)=>swiped(dir, person.name)}
        onCardLeftScreen={()=>outOfFrame(person.name)}
        >
          <div style={{backgroundImage:`url(${person.url})`}}
          className="card"
          >
            <h3>{person.name}</h3>
            
          </div>

        </TinderCard>
      ))}
    </div>
    
    </div>
    
    
    );
}

export default TinderCards;
