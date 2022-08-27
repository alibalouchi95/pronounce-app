import React from 'react';
import { Box, Paper, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Collection } from '../types';
import { cleanDate } from '../utils';

const useStyles = makeStyles({
  thumbnail: {
    backgroundColor: '#24272B',
    padding: 10,
    margin: 10,
    width: "200px",
    height: "150px",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  collectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 3,
    marginHorizontal: 1,
    marginVertical: 3,
  },
  collectionWordsCount: {
    color: '#FFFFFF',
    fontSize: 15,
    padding: 2,
    margin: 1,
  },
  collectionDate: {
    color: '#FFFFFF',
    fontSize: 12,
    padding: 2,
    margin: 1,
  },
});

type Props = {
  collections: Array<Collection>;
};

const CollectionThumbnail = ({
  collection,
}: {
  collection: Collection
}
) => {
  const classes = useStyles()

  return (
    <a key={collection.name} href={`/collection/${collection.name}`} className={classes.thumbnail}>
      <Typography className={classes.collectionTitle}>
        {collection.name}
      </Typography>
      <Typography className={classes.collectionWordsCount}>
        {collection.words.length}
      </Typography>
      <Typography className={classes.collectionDate}>
        {cleanDate(collection.date)}
      </Typography>
    </a>
  );
};

const NewCollectionModal = ({ collections }: Props) => {
  return (<>
      {collections.map((collection) => (
        <CollectionThumbnail key={collection.id} collection={collection} />
      ))}</>
  );
};

export default NewCollectionModal;
