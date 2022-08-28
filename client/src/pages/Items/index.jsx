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
  const [itemFields, setItemFields] = useState([]);
  const { id } = useParams();
  const { collections } = useSelector(state => state.collections);
  useGetCollections();

  useEffect(() => {
    setCollection(collections?.data.find(col => col.name === id));
    if (collection) setItemFields(JSON.parse(collection.items));
  }, [collection, id, collections]);

  return (
    <Container big>
      <Title>Collection</Title>
      <Group>
        <Subject>Name: {collection?.name}</Subject>
        <Subject>Topic: {collection?.topic}</Subject>
        <Subject>Description: {collection?.description}</Subject>
      </Group>
      <Table itemFields={itemFields} />
      <ItemForm itemFields={itemFields} />
    </Container>
  );
}

export default Items;
