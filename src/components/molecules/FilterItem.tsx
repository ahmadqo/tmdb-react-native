import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface FilterProp {
  title: string;
  active: string;
  handlePress: () => void;
}

const FilterItem: React.FC<FilterProp> = ({title, active, handlePress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.filterButton,
        active === title && styles.activeFilterButton,
      ]}
      onPress={handlePress}>
      {/* <View style={styles.wrapIcon}>
        <Image
          source={require('../../assets/images/start.png')}
          style={styles.icon}
        />
      </View> */}
      <Text
        style={[
          styles.filterText,
          active === title && styles.activeFilterText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    alignItems: 'center',
  },
  filterText: {
    marginTop: 5,
    color: '#FFF',
    fontSize: 18,
  },
  wrapIcon: {
    backgroundColor: '#51535E',
    borderRadius: 16,
    height: 52,
    width: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  activeFilterText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  activeFilterButton: {
    borderBottomColor: 'orange',
    borderBottomWidth: 3,
    paddingBottom: 6,
  },
});

export default FilterItem;
