import React, { Component } from "react";
import { connect } from "react-redux";
import CardMovieHorizontal from "../components/CardMovieHorizontal";

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "HIDE_NAVBAR",
    });
  }

  state = {
    result: [
      {
        adult: false,
        backdrop_path: "/6zINLC59ButA0fjAQIyJmFFNdjM.jpg",
        genre_ids: [12, 28, 878],
        id: 10138,
        original_language: "en",
        original_title: "Iron Man 2",
        overview:
          "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
        popularity: 217.06,
        poster_path: "/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
        release_date: "2010-04-28",
        title: "Iron Man 2",
        video: false,
        vote_average: 6.8,
        vote_count: 17930,
      },
      {
        adult: false,
        backdrop_path: "/s6cQgJSkviamXAXBggT2xmj7JiG.jpg",
        genre_ids: [28, 878, 12],
        id: 1726,
        original_language: "en",
        original_title: "Iron Man",
        overview: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        popularity: 164.119,
        poster_path: "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        release_date: "2008-04-30",
        title: "Iron Man",
        video: false,
        vote_average: 7.6,
        vote_count: 22743,
      },
      {
        adult: false,
        backdrop_path: "/tKa1gmGKAUVYnflYcadipeL3d9h.jpg",
        genre_ids: [28, 12, 878],
        id: 68721,
        original_language: "en",
        original_title: "Iron Man 3",
        overview: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
        popularity: 146.309,
        poster_path: "/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
        release_date: "2013-04-18",
        title: "Iron Man 3",
        video: false,
        vote_average: 6.9,
        vote_count: 19450,
      },
      {
        adult: false,
        backdrop_path: "/oUi2pvNbHCUiEFSqawp5dJdQNMK.jpg",
        genre_ids: [28, 12, 16, 14, 878],
        id: 13647,
        original_language: "en",
        original_title: "The Invincible Iron Man",
        overview:
          "When a cocky industrialist's efforts to raise an ancient Chinese temple leads him to be seriously wounded and captured by enemy forces, he must use his ideas for a revolutionary power armor in order to fight back as a superhero.",
        popularity: 22.417,
        poster_path: "/eebNTSRa5Hh5skPKGdGJIJpo9Ls.jpg",
        release_date: "2007-01-23",
        title: "The Invincible Iron Man",
        video: false,
        vote_average: 6.2,
        vote_count: 182,
      },
      {
        adult: false,
        backdrop_path: "/kSx2V2sNpxad4LytV0Y9Y0SZVPN.jpg",
        genre_ids: [99],
        id: 448341,
        original_language: "en",
        original_title: "I Am Iron Man",
        overview:
          "A documentary covering pre-production topics like suit design and construction, storyboards, animatics, and pre-viz, sets, working in the suit, casting, rehearsals, and preparation, and the start of the shoot. From there we look at performances, locations and production design, stunts, hardware and practical effects, and various sequence specifics. Finally, the program goes through post-production at Skywalker Ranch, the titles and a few visual elements, and wrapping up the flick.",
        popularity: 38.55,
        poster_path: "/81zROb3C2MnOE67AwgAdWWfy4gK.jpg",
        release_date: "2008-09-30",
        title: "I Am Iron Man",
        video: false,
        vote_average: 7.2,
        vote_count: 58,
      },
      {
        adult: false,
        backdrop_path: "/7m8zy0eJ0d0JmEyOkC2fSx1KbYU.jpg",
        genre_ids: [12, 14],
        id: 428045,
        original_language: "ru",
        original_title: "Тайна печати Дракона",
        overview:
          "Commissioned to map the Far East territories of the Russian Empire, cartographer Jonathan Green sets off on a long journey of unbelievable adventures—making breath-taking discoveries and meeting mysterious creatures, Chinese princesses, deadly masters of oriental martial arts, and even the King of Dragons.",
        popularity: 22.239,
        poster_path: "/mgM67qwgZgsvnxUBkE4TzzbiDUS.jpg",
        release_date: "2019-08-16",
        title: "Iron Mask",
        video: false,
        vote_average: 6.2,
        vote_count: 292,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [99],
        id: 448344,
        original_language: "en",
        original_title: "Ultimate Iron Man: The Making of Iron Man 2",
        overview: "A four-part documentary that covers several film-critical elements in greater detail.",
        popularity: 45.814,
        poster_path: "/zPDfxcdBSeLLXhdZKFhHe2de5Kz.jpg",
        release_date: "2010-09-28",
        title: "Ultimate Iron Man: The Making of Iron Man 2",
        video: true,
        vote_average: 6.5,
        vote_count: 42,
      },
      {
        adult: false,
        backdrop_path: "/ryaZmqEnsRaeKUanGFHmPCFDs9M.jpg",
        genre_ids: [28, 12, 16, 10751],
        id: 230896,
        original_language: "en",
        original_title: "Iron Man & Hulk: Heroes United",
        overview:
          "The Invincible Iron Man and the Incredible Hulk must join forces to save the Earth from its greatest threat yet! When two Hydra scientists try to supercharge a Stark Arc Reactor with Hulk's Gamma Energy, they unleash a being of pure electricity called Zzzax - and he's hungry for destruction. Together, Iron Man and Hulk are the only force that stands in the way of the Zzzax's planetary blackout. But first, the super heroic duo will have to get through snarling Wendigos, deadly robots and the scaly powerhouse, Abomination.  Can two of Marvel's mightiest heroes find a way to work together without smashing each other before time runs out?",
        popularity: 24.038,
        poster_path: "/e7F2ZNA7wMneoSKGonLKjDmjFEd.jpg",
        release_date: "2013-12-03",
        title: "Iron Man & Hulk: Heroes United",
        video: false,
        vote_average: 5.7,
        vote_count: 146,
      },
      {
        adult: false,
        backdrop_path: "/xzCe37rMKvYUnrAhIxpLJwv7Xmo.jpg",
        genre_ids: [12, 28, 18],
        id: 9313,
        original_language: "en",
        original_title: "The Man in the Iron Mask",
        overview:
          "Years have passed since the Three Musketeers, Aramis, Athos and Porthos, have fought together with their friend, D'Artagnan. But with the tyrannical King Louis using his power to wreak havoc in the kingdom while his twin brother, Philippe, remains imprisoned, the Musketeers reunite to abduct Louis and replace him with Philippe.",
        popularity: 18.861,
        poster_path: "/zHE9yRURvA7DyhYtQxkGTfE1Ywi.jpg",
        release_date: "1998-03-12",
        title: "The Man in the Iron Mask",
        video: false,
        vote_average: 6.6,
        vote_count: 3217,
      },
      {
        adult: false,
        backdrop_path: "/kqMYb35r3NCsFeaV1EfBg3rzZWE.jpg",
        genre_ids: [878, 16, 28],
        id: 169934,
        original_language: "ja",
        original_title: "アイアンマン：ライズ・オブ・テクノヴォア",
        overview:
          "Iron Man enlists the help of ruthless vigilante the Punisher to track down War Machine's murderer. All the while, he's being pursued by S.H.I.E.L.D. agents Black Widow and Hawkeye, who suspect his involvement in a recent terrorist plot.",
        popularity: 17.323,
        poster_path: "/eHDez1uN5X2ZAq4niX7HvhyZIIO.jpg",
        release_date: "2013-04-24",
        title: "Iron Man: Rise of Technovore",
        video: false,
        vote_average: 5.8,
        vote_count: 132,
      },
    ],
  };

  handleChange = async (event) => {
    // const { value } = event.target;
    // const url = `${PREFIX}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&page=1&include_adult=true&query=${value}`;
    // try {
    //   const { data } = await axios.get(url);
    //   this.setState({
    //     result: data.results,
    //   });
    // } catch (error) {
    //   console.log(error.response.data);
    // }
  };

  render() {
    return (
      <div className="search-page">
        <div className="sp-container">
          <div className="ui action input sp-search">
            <input
              type="text"
              placeholder="Search..."
              className="sp-input"
              id="sp-input"
              onChange={(event) => {
                this.handleChange(event);
              }}
            />
            <br />
            <select className="ui compact selection dropdown sp-select">
              <option value="all">All</option>
              <option value="movies">Movies</option>
              <option value="people">People</option>
            </select>
            <div className="ui black button sp-button">Search</div>
          </div>
        </div>

        <div className="sp-result">
          {this.state.result.map((result, index) => {
            return <CardMovieHorizontal movie={result} key={index} history={this.props.history} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect()(SearchPage);
