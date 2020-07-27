import React, {useEffect, useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {useRouteMatch, Link} from 'react-router-dom';

import Loading from '../../components/Loading';
import PageHeader from '../../components/PageHeader';
import {loadCharaterById} from '../../services/actions';
import {CharacterInfo, Series, Voltar, Wrap} from './styles';

const Characters = () => {
  const {params} = useRouteMatch();
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    copyright: '© 2020 MARVEL',
    pageTitle: '',
    textFooter: 'Data provided by Marvel. © 2020 MARVEL',
  });

  useEffect(() => {
    async function loadData() {
      const response = await loadCharaterById(params.id);
      setCharacter(response.data.data.results[0]);;
      setPageInfo({
        copyright: response.data.copyright,
        pageTitle: `Lista de séries de ${response.data.data.results[0].name}`,
        textFooter: response.data.attributionText
      });
      setLoading(false);
    }
    loadData();
  }, [params.id])

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
        <Series>
          {character.series.items.map(serie => {
            return (
              <ul key={serie.name}>
                <li><strong>{serie.name}</strong></li>
              </ul>
            );
          })}
        </Series>
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

export default Characters;
