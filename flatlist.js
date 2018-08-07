import {
  FlatList,
  VirtualizedList,
} from 'react-native';
import React, {Component} from 'react';

class ExtendedVirtualizedList extends VirtualizedList {
  _onCellLayout(e, cellKey, index) {
    super._onCellLayout(e, cellKey, index);
    this.props.onCellLayout && this.props.onCellLayout(e, cellKey, index);
  }
}

class ExtendedFlatList extends FlatList {
  render() {
    return (
      <ExtendedVirtualizedList
        {...this.props}
        renderItem={this._renderItem}
        getItem={this._getItem}
        getItemCount={this._getItemCount}
        keyExtractor={this._keyExtractor}
        ref={this._captureRef}
        viewabilityConfigCallbackPairs={this._virtualizedListPairs}
      />
    );
  }
}



export default ExtendedFlatList;
