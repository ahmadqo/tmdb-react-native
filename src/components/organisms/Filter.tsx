import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilterItem from '../molecules/FilterItem';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {fetchMovies} from '../../store/slices/movieSlice';
import {
  serviceNow,
  servicePopular,
  serviceTrending,
  serviceUpcoming,
} from '../../services/api';

interface Props {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

type Item = {
  title: string;
  api: string;
};

const data: Item[] = [
  {title: 'Trending', api: `${serviceTrending}?language=en-US&page=1`},
  {title: 'Popular', api: `${servicePopular}?language=en-US&page=1`},
  {title: 'Now Playing', api: `${serviceNow}?language=en-US&page=1`},
  {title: 'Upcoming', api: `${serviceUpcoming}?language=en-US&page=1`},
];

const Filter: React.FC<Props> = ({setActive}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeFilter, setActiveFilter] = useState<string>('Trending');

  const handlePress = (item: Item) => {
    dispatch(fetchMovies(item.api));
    setActiveFilter(item.title);
    setActive(item.title);
  };

  return (
    <View style={styles.filters}>
      <Text style={styles.filtersTitle}>Filters</Text>
      <View style={styles.filterOptions}>
        {data.map((item, k) => (
          <FilterItem
            key={k}
            title={item.title}
            active={activeFilter}
            handlePress={() => handlePress(item)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  filtersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },

  filterOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Filter;
