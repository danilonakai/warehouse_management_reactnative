import React, { useState, useEffect } from 'react';
import {
  FlatList,
  TextInput,
  StyleSheet,
  View,
  Text,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  getCollection,
  addItem,
  deleteItem,
  deleteCollection,
  updateItem,
  replaceCollection,
} from '../api';

export default function HomeScreen() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    quantity: '',
    price: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    fetchCollection();
  }, []);

  const fetchCollection = async () => {
    try {
      const response = await getCollection();
      
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  };

  const handleAddOrUpdateItem = async () => {
    const { name, description, quantity, price } = newItem;

    if (!name || !description || !quantity || !price) {
      Alert.alert('Validation Error', 'Please fill in all fields.');

      return;
    }

    try {
      if (editMode) {
        await updateItem(editItemId, {
          name,
          description,
          quantity: parseInt(quantity),
          price: parseFloat(price),
        });

        Alert.alert('Success', 'Item updated successfully!');

        setEditMode(false);
        setEditItemId(null);
      } else {
        await addItem({
          name,
          description,
          quantity: parseInt(quantity),
          price: parseFloat(price),
        });

        Alert.alert('Success', 'Item added successfully!');
      }
      fetchCollection();
      setNewItem({ name: '', description: '', quantity: '', price: '' });
    } catch (error) {
      console.error('Error adding/updating item:', error);
    }
  };

  const handleEditItem = (item) => {
    setNewItem({
      name: item.name,
      description: item.description,
      quantity: item.quantity.toString(),
      price: item.price.toString(),
    });

    setEditMode(true);
    setEditItemId(item.id);
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      fetchCollection();

      Alert.alert('Success', 'Item deleted successfully!');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleDeleteCollection = async () => {
    try {
      await deleteCollection();
      fetchCollection();

      Alert.alert('Success', 'Collection deleted successfully!');
    } catch (error) {
      console.error('Error deleting collection:', error);
    }
  };

  const handleReplaceCollection = async () => {
    const newCollection = [
      { name: 'TV 50"', description: 'Smart TV...', quantity: 10, price: 9.99 },
      { name: 'Gaming chair', description: 'Beautiful chair...', quantity: 20, price: 19.99 },
    ];

    try {
      await replaceCollection(newCollection);
      fetchCollection();

      Alert.alert('Success', 'Collection replaced successfully!');
    } catch (error) {
      console.error('Error replacing collection:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Warehouse management</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter item name"
              placeholderTextColor="#555"
              value={newItem.name}
              onChangeText={(text) => setNewItem({ ...newItem, name: text })}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter item description"
              placeholderTextColor="#555"
              value={newItem.description}
              onChangeText={(text) => setNewItem({ ...newItem, description: text })}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Quantity:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter quantity"
              placeholderTextColor="#555"
              keyboardType="numeric"
              value={newItem.quantity}
              onChangeText={(text) => setNewItem({ ...newItem, quantity: text })}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Price:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter price"
              placeholderTextColor="#555"
              keyboardType="numeric"
              value={newItem.price}
              onChangeText={(text) => setNewItem({ ...newItem, price: text })}
            />
          </View>
          <TouchableOpacity style={styles.buttonLayout} onPress={handleAddOrUpdateItem}>
            <Text style={styles.buttonText}>{editMode ? 'Update Item' : 'Add Item'}</Text>
          </TouchableOpacity>
        </View>

        {items.length > 0 ? (
          <View style={styles.listHeadings}>
            <Text style={styles.headingId}>ID</Text>
            <Text style={styles.headingName}>Name</Text>
            <Text style={styles.headingDescription}>Description</Text>
            <Text style={styles.headingQuantity}>Qty</Text>
            <Text style={styles.headingPrice}>Price</Text>
            <Text style={styles.headingActions}>Actions</Text>
          </View>
        ) : null}
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemId}>{item.id}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemQuantity}>{item.quantity}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.editButton} onPress={() => handleEditItem(item)}>
                  <Text style={styles.actionButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteItem(item.id)}>
                  <Text style={styles.actionButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        <TouchableOpacity style={styles.buttonLayout} onPress={handleReplaceCollection}>
          <Text style={styles.buttonText}>Replace Collection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLayout} onPress={handleDeleteCollection}>
          <Text style={styles.buttonText}>Delete All Items</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white' },
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  formContainer: { marginBottom: 16 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    width: 100,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  listHeadings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 8,
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
  },
  headingId: { flex: 0.8, fontWeight: 'bold', textAlign: 'center', fontSize: 12 },
  headingName: { flex: 1, fontWeight: 'bold', textAlign: 'center', fontSize: 12 },
  headingDescription: { flex: 3, fontWeight: 'bold', textAlign: 'center', fontSize: 12 },
  headingQuantity: { flex: 1, fontWeight: 'bold', textAlign: 'center', fontSize: 12 },
  headingPrice: { flex: 1, fontWeight: 'bold', textAlign: 'center', fontSize: 12 },
  headingActions: { flex: 2, fontWeight: 'bold', textAlign: 'center', fontSize: 12 },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemId: { flex: 0.8, textAlign: 'center' },
  itemName: { flex: 1, textAlign: 'center' },
  itemDescription: { flex: 3, textAlign: 'center' },
  itemQuantity: { flex: 1, textAlign: 'center' },
  itemPrice: { flex: 1, textAlign: 'center' },
  actions: { flex: 2, flexDirection: 'row', justifyContent: 'space-around' },
  buttonLayout: {
    backgroundColor: 'darkgreen',
    padding: 12,
    borderRadius: 6,
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#5C6BC0',
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 6,
  },
  deleteButton: {
    backgroundColor: '#F44336',
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 6,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
