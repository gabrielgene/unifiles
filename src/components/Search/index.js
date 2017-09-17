
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import itens from './itens';
import { escapeRegexCharacters } from './utils';
import './search.css';
import FileCard from '../FileCard';
import deburr from 'lodash';


const getSuggestions = (value, data, hasData=false) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(deburr(escapedValue), 'i');
  
  let itensList;

  if (hasData) {
    console.log('hasdata entrou');
    itensList = data;
  } else {
    console.log('hasdata não entrou entrou');
    itensList = itens;
  }

  return itensList.filter(item => regex.test(deburr(item.subject + item.subtitle)));
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = (file) => {
  return (
    <span>
      <FileCard
        type={file.type}
        subject={file.subject}
        subtitle={file.subtitle}
        likes={file.likes}
        time={file.time}
        lenght={file.lenght}
      />
    </span>
  )
};

export default class Basic extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const hasData = !!this.props.data;
    this.setState({
      suggestions: getSuggestions(value, this.props.data, hasData),
    });
    if (this.props.hasCallback) {
      this.props.onSearch()
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
    if (this.props.hasCallback) {
      this.props.onClear()
    }
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      className: "Search-input form-control",
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };

    return (
      <div id="basic-example">
        <div>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            focusInputOnSuggestionClick={false}
            id="basic-example"
          />
        </div>
      </div>
    );
  }
}

