import React, {useEffect, useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {useRouteMatch, Link} from 'react-router-dom';

import Loading from '../../components/Loading';
import PageHeader from '../../components/PageHeader';
import {loadCharaterById} from '../../services/actions';
import {CharacterInfo, Form, Voltar, Wrap} from './styles';

const FormEdit = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [pageInfo, setPageInfo] = useState({
    copyright: '© 2020 MARVEL',
    textFooter: 'Data provided by Marvel. © 2020 MARVEL',
    pageTitle: 'Editar personagem'
  });
  const {params} = useRouteMatch();
  const [storage, setStorage] = useState(() => {
    const storageCharacter = localStorage.getItem('@Marvel:editedCharacters');
    if (storageCharacter) {
      return JSON.parse(storageCharacter);
    } else {
      return [];
    }
  });

  const updateStorage = (values) => {
    const newStorage = storage;
    newStorage.push(values);
    setStorage(newStorage);
    localStorage.setItem('@Marvel:editedCharacters', JSON.stringify(newStorage));
  }

  useEffect(() => {
    async function loadData() {
      const response = await loadCharaterById(params.id);
      setCharacter(response.data.data.results[0]);;
      setPageInfo({
        copyright: response.data.copyright,
        pageTitle: `Editar personagem ${response.data.data.results[0].name}`,
        textFooter: response.data.attributionText
      });
      setLoading(false);
    }
    loadData();
  }, [params.id])

  const handleEditCharater = (event) => {
    event.preventDefault();
    const name = newName === '' ? character.name  : newName;
    const description = newDescription === '' ? character.description  : newDescription;

    const newCharacter = {...character, name, description};
    updateStorage(newCharacter);
  }

  const renderInfos = () => {
    if (loading) {
      return <Loading loading={loading} />;
    }
    return (
      <CharacterInfo>
        <header>
          <img src={`${character.thumbnail.path}/portrait_xlarge.jpg`} alt={character.name} />
          <strong>{character.name}</strong>
        </header>
        <Form onSubmit={handleEditCharater} >
          <div>
            <h6>Nome:</h6>
            <input
              onChange={e => setNewName(e.target.value)}
              placeholder={character.name}
              value={newName}
            />
          </div>
          <div>
            <h6>Descrição:</h6>
            <input
              onChange={e => setNewDescription(e.target.value)}
              placeholder={character.description}
              value={newDescription}
            />
          </div>
          <div id='divBtn'>
            <button type='submit'>Confirmar</button>
          </div>
        </Form>
      </CharacterInfo>
    );
  }

  return (
    <>
      <PageHeader
        imgAlt={pageInfo.copyright}
        title={pageInfo.pageTitle}
      >
        <Voltar>
          <Link to='/'>
            <FiArrowLeft size={16} title='voltar' />
            <h6>Voltar</h6>
          </Link>
        </Voltar>
      </PageHeader>
      <Wrap>
        {renderInfos()}
      </Wrap>
      <footer>
        <div id='copy'>{pageInfo.textFooter}</div>
      </footer>
    </>
  );
}

export default FormEdit;
