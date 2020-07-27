import PropTypes from 'prop-types';
import React from 'react';

import {Wrapper} from './styles';
import backImage from '../../assets/backgroundLoading.jpg';

const Loading = props => {
  const {loading} = props;
  if (!loading) {
    return null;
  }

  return (
    <Wrapper data-testid='loadingHeader'>
      <figure data-testid='loadingBody'>
        <img src={backImage} alt='© 2020 MARVEL' />
        <figcaption>Carregando os dados...</figcaption>
      </figure>
    </Wrapper>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool
}

export default Loading;
