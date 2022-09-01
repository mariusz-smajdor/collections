import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Container from '../../components/layout/Container';
import Table from './Table';
import { useGetCollections } from '../../shared/hooks/useGetCollections';
import { Title } from '../../assets/UI/textFormatEls';
import { Group, Subject } from './styled';
import ItemForm from './ItemForm';

function Items() {
  const [collection, setCollection] = useState(null);
  const { id } = useParams();
  const { collections } = useSelector(state => state.collections);
  useGetCollections();

  useEffect(() => {
    !collection &&
      setCollection(collections?.data.filter(col => col.name === id));

    console.log(collection);
  }, [collection, id, collections]);

  return (
    <Container big>
      <Title>Collection</Title>
      <Group>
        <Subject>Name: {collection?.[0].name}</Subject>
        <Subject>Topic: {collection?.[0].topic}</Subject>
        <Subject>Description: {collection?.[0].description}</Subject>
      </Group>
      <Table />
      <ItemForm
        items={collection && JSON.parse(collection?.[0].items)}
        id={collection?.[0].id}
      />
    </Container>
  );
}

export default Items;
