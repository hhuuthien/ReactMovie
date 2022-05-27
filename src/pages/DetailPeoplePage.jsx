import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import DetailPeopleMovie from "../components/DetailPeopleMovie";
import { API_KEY, IMG_PREFIX, LANGUAGE, PREFIX } from "../data/configData";
import { formatDate } from "../function/formatDate";

class DetailPeoplePage extends Component {
  callAPI = async () => {
    const { peopleID } = this.props.match.params;
    const url = `${PREFIX}/person/${peopleID}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=movie_credits`;
    try {
      const { data } = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_DETAIL_PEOPLE",
        data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  componentDidMount() {
    this.props.dispatch({
      type: "HIDE_NAVBAR",
    });

    this.callAPI();
  }

  render() {
    const { person } = this.props;

    return (
      <div className="detail-people-page">
        <div className="dp-backdrop">
          <div className="dp-blank"></div>
          <img src="https://i.picsum.photos/id/191/1000/1000.jpg?hmac=FsMiODfIiXNSCu9bdsLwsXVCwGBQJ6snPXEfDE4gOVk" />
          <div className="dp-backdrop-overlay"></div>
          <div className="dp-content">
            <div className="dp-poster">
              {person.profile_path === null || person.profile_path === "" ? <img src={"/img/placeholder.png"} /> : <img src={`${IMG_PREFIX}${person.profile_path}`} />}
            </div>
            <div className="dp-info">
              <h1 className="dp-name">{person.name}</h1>
              <div className="dp-birthday">Birthday: {formatDate(person.birthday)}</div>
              <div className="dp-birthplace">Place of birth: {person.place_of_birth || "No information"}</div>
              {person.deathday === null ? <></> : <div className="dp-deathday">Deathday: {formatDate(person.deathday)}</div>}
            </div>
          </div>
        </div>
        <div className="dp-biography">
          <h3 className="dp-biography-title">BIOGRAPHY</h3>
          <div>{person.biography || "No information"}</div>
        </div>
        <DetailPeopleMovie person={person} />
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    person: rootReducer.peopleReducer.detailPerson,
  };
};

export default connect(mapStateToProps)(DetailPeoplePage);
