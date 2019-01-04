import React, {Component} from 'react';

class about extends Component {
  
  constructor(props) {
        super(props);
        //this.state = {
        //  games: [["Halo 5","XBOX ONE","4/5"],["Fortnite","PC","4.5/5"],["Overwatch","PC","5/5"]]
        //}
        this.interval = "";
        this.opacity = this.opacity.bind(this);
        this.frame = this.frame.bind(this);
  }

  opacity(event) {
      event.preventDefault();
      var img = this.refs.img;
      var opacity = 0.25;
      img.style.opacity = opacity;
      var frame = setInterval(this.frame(img,opacity),3);
      this.interval = frame;
  }
  
  frame(img,opacity) {
    if(opacity === 0.00) {
      clearInterval(this.interval);
    }
    else {
      opacity-=0.01;
      img.style.opacity = opacity;
    }
  }
  
  render() {
    return(
      <section className="about">
        <h2>About:</h2>
        <div className="background">
          <h3>Background</h3>
          <p>I have lived in California my entire life and spent most of life living in Victorville. When I first moved there was a pretty small town but after so many years is actually rather large. It may still be known as "that stop on the way to Vegas" but I enjpyed my time there. Growing up I was always fascinated with computers and technology. I would keep up to date with cool apps for my phone or the newest smartphone. Due to this I pursued a career in computer science and have found a passion in front end development. Outside of technology, I also have always enjoyed active activites such as hiking, sports, running, etc. as I always try and stay active. I played soccer competitively for about 15 years but really enjoy playing just about any sport or game.</p>
        </div>
        <div className="hobbies">
          <h3>Hobbies</h3>
            <div className="slide">
              <picture className="lazyPic">
                <img ref="img" alt="text info" src={require("../images/barca_800w.jpg")} />
              </picture>
              <span>
                <h4>Soccer</h4>
                <p> From about age 4 to age 19 I played soccer constantly. Sometimes even being on 2 teams at once. Practice every single day, games on weekeneds etc. Nowadays I dont get to play every day and I certainly am not as good as I used to be but I still enjoy going out to play and having a good time. I try and keep up with the games and still find time to join some teams and keep playing the sport I love.</p>
              </span>
            </div>
            <div className="slide">
              <picture className="lazyPic">
                <img alt="text info" src={require("../images/got_800w.jpeg")} />
              </picture>
              <span>
                <h4>Tv/Movies</h4>
                <p> I have always been a big fan of movies and Tv shows. Whether it be Game of Thrones, Daredevil, Breaking Bad etc always enjoy a good show. Likewise I love watching movies whether they be a marvel movie, book of life, creed, etc. I even have a DVD collection going(I know at this point DVD players are kinda oldschool but I like having them). </p>
              </span>
            </div>
            <div className="slide">
              <picture className="lazyPic">
                <img alt="text info" src={require("../images/tech_800w.jpg")} />
              </picture>
              <span>
                <h4>Tech</h4>
                <p> As you can imagine with my field of work I am a big fan of techology. Even when I was younger I was excited for the newest smartphone specs. I have built my own computer and decided to get my bachelors in computer engineering. Specifically I am interested in web development and so far have been enjoying it even if I still have alot to learn. </p>
              </span>
            </div>
        </div>
      </section>
    );
  }
}

export default about;