
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import languages from './languages';
import { escapeRegexCharacters } from './utils';
import './search.css';


const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = (suggestion) => {
  console.log('render suggestion');
  console.log(suggestion);
  return (
    <span>
      {suggestion.name}
    </span>
  )
}
  ;

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
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      className: "Search-input form-control",
      placeholder: "O que você procura?",
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
            focusInputOnSuggestionClick={true}
            id="basic-example"
          />
        </div>
      </div>
    );
  }
}

