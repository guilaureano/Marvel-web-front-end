import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import React from 'react';

import {Total} from './styles';

const LimitSeletor = props => {
  const {onChange, total, defaultValue, values} = props;
  if (!total) {
    return <Total/>;
  }

  const handleChange = event => onChange(event.target.value);

  return (
    <Total>
      <h6>{total}</h6>
      <Select
        label={defaultValue}
        value={defaultValue}
        onChange={handleChange}
        style={{
          background: '#fff',
          width: '72px',
          textAlign: 'center'
        }}
      >
        {values.map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)}
      </Select>
    </Total>
  );
}

LimitSeletor.propTypes = {
  defaultValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,

}

export default LimitSeletor;
