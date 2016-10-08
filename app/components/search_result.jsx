import React from 'react';
import {Grid, Row, Col, FieldGroup, Button, InputGroup, FormControl, FormGroup} from 'react-bootstrap';
import Song from './song.jsx';
import $ from 'jquery';

class SearchResult extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      searchText: '',
      key: '978e4cdc21e60f3367e8bd2cae4cde582d6c20af3840781ee0d5f9d30b14ae54efb75b9f4086ce2bb3939'
    };
  }

  loadPopular() {
    $.ajax({
      url: 'https://api.vk.com/method/audio.getPopular?access_token=' + this.state.key + '&count=20',
      cache: false,
      dataType: "jsonp",
      success: function (data) {
        this.setState({data: data.response});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(status, err.toString());
        this.setState({currentBody: 'error'});
      }.bind(this)
    });
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.loadPopular();
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(newProps) {
  }

  componentDidUpdate() {
  }

  onChange(name, ev) {
    this.setState({[name]: ev.target.value});
  }

  searchSong(ev) {
    ev.preventDefault();
    var url = this.state.searchText == '' ?
      'https://api.vk.com/method/audio.getPopular?access_token=' + this.state.key + '&count=20' :
    'https://api.vk.com/method/audio.search?access_token=' + this.state.key + '&count=10&auto_complete=0&q=' + this.state.searchText
    $.ajax({
      url: url,
      dataType: "jsonp",
      type: "GET",
      success: function (data) {
        if (typeof(data.response[0]) == 'number') {
          delete data.response[0]
        }
        this.setState({data: data.response});
      }.bind(this),
      error: function (xhr, status, err) {

      }.bind(this)
    });
  }

  render() {
    const songs = this.state.data;
    const formInstance = (
      <form>
        <FormGroup>
          <InputGroup>
            <FormControl name="searchText" type="text" onChange={this.onChange.bind(this, 'searchText')}/>
            <InputGroup.Button>
              <Button type="submit" bsStyle="primary" onClick={this.searchSong.bind(this)}>Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
    const resultList = songs.map((song) =>
      <li className="list-group-item" key={song.aid}>
        <Song song={song}/>
      </li>)
    return (
      <div className="search-result">
        {formInstance}
        <ul className="list-group">
          {resultList}
        </ul>
      </div>
    );
  }
}
;

export default SearchResult;
