import { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

class Filter extends Component {
  onHandleSearch = e => {
    this.props.onFilter(e.target.value);
  };

  render() {
    return (
      <>
        <Label htmlFor="search">Find contacts by name</Label>
        <Input
          type="text"
          name="search"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.props.filter}
          onChange={this.onHandleSearch}
        />
      </>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
