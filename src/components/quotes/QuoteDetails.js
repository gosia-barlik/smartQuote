import React from "react";

const QuoteDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Author</span>
          <p>Title - {id} </p>
          <p>Cathegory</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            ipsam quo quas. Vel deserunt maiores odio dolores repellat maxime
            reprehenderit ut amet atque quis eaque, esse ratione inventore
            blanditiis non?
          </p>
          <p className="text-lighten-5">page num</p>
          <div className= "card-action grey lighten-4 grey-text">
              <div>Posted by Gosia</div>
              <div>Wed, December 30 2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDetails;