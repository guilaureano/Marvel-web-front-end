import Grid from '@material-ui/core/Grid'
import Popper from '@material-ui/core/Popper'
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiMoreVertical} from 'react-icons/fi';

import {Character, Modal} from './styles';

const Card = props => {
  const {name, id, thumbnail} = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const modalId = open ? 'simple-popper' : undefined;

  return (
    <>
      <Grid item >
        <Character>
          <section aria-describedby={modalId} type="button" onClick={handleClick}>
            <img src={`${thumbnail.path}/portrait_xlarge.jpg`} alt={name} />
            <div>
              <strong>{name}</strong>
              <FiMoreVertical size={16} title='ver mais' />
            </div>
          </section>
        </Character>
      </Grid>
      <Popper id={modalId} open={open} anchorEl={anchorEl}>
        <Modal>
          <Link to={`/characters/${id}/series`}><h6>Séries</h6></Link>
          <Link to={`/characters/${id}/Edit`}><h6>Editar</h6></Link>
        </Modal>
      </Popper>
    </>
  );
}

Card.propTypes = {
  classes: PropTypes.object,
}

export default Card;
