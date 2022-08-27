import React, { useEffect, useState } from 'react';
import CollectionThumbnails from '../components/CollectionThumbnail';
import { Collection } from '../types';
import {  getCollections } from '../storage';
import { useModal } from 'global-modal';
import { Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CreateNewCollection from '../components/CreateNewCollection';

// backgroundColor: '#24272B',
const useStyles = makeStyles({
  newCollection: {
    backgroundColor: '#9A9CA4',
    cursor: "pointer",
    padding: 10,
    margin: 10,
    width: "200px",
    height: "150px",
    borderRadius: 20,
    color: "#24272B",
    shadowColor: '#000',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    width: "95%",
    display: "flex",
    flexWrap: "wrap",
    margin: 15,
    padding: 10
  }
})

const Home = () => {
  const [collections, setCollections] = useState<Array<Collection>>();

  const _getCollections = async () => {
    const collections = await getCollections();
    setCollections(collections);
  }

  const { show, close, visible } = useModal(<CreateNewCollection close={() => close()} />)

  const classes = useStyles()

  useEffect(() => {
    _getCollections()
  }, [visible]);

  return (
    <Box className={classes.container}>
      {collections ? (
        <CollectionThumbnails collections={collections} />
      ) : null}
      <span className={classes.newCollection} onClick={show}>Add new Collection</span>
    </Box>
  );
};

export default Home;
