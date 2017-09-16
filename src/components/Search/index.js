
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import itens from './itens';
import { escapeRegexCharacters } from './utils';
import './search.css';
import FileCard from '../FileCard';


const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(escapedValue, 'i');

  return itens.filter(item => regex.test(item.subject + item.subtitle));
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = (file) => {
  console.log('render file');
  console.log(file);
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
            focusInputOnSuggestionClick={false}
            id="basic-example"
          />
        </div>
      </div>
    );
  }
}

