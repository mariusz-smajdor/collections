import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Container from '../../components/layout/Container';
import Table from './Table';
import { useGetCollections } from '../../shared/hooks/useGetCollections';
import { Title } from '../../assets/UI/textFormatEls';

function Items() {
  const { id } = useParams();
  const { collections } = useSelector(state => state.collections);
  useGetCollections();

  const collection = collections?.data.find(col => col.name === id);

  console.log(collections?.data);

  return (
    <Container>
      <Title>{collection?.name}</Title>
      <p>Topic: {collection?.topic}</p>
      <p>Description: {collection?.description}</p>
      <Table items={collection?.items} />
    </Container>
  );
}

export default Items;
