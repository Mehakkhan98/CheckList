import React, { Component, useState } from "react";
import { DataTable } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const App = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <DataTable>
        <DataTable.Header>
          
          <DataTable.Title >Name</DataTable.Title>
          <DataTable.Title numeric>Like</DataTable.Title>
        </DataTable.Header>
       {props.data.map((data)=>
        <DataTable.Row>
    <DataTable.Cell>{data}</DataTable.Cell>
       <DataTable.Cell numeric>{<Ionicons name="ios-heart" size={32} color="red" />}</DataTable.Cell>
         
        </DataTable.Row>
       )}
        

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="Pages"
        />
      </DataTable>

            <TouchableHighlight
              style={{ ...styles.openButton,  }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>{props.show}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  //  marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    //backgroundColor: "#F194FF",
    //borderRadius: 20,
   
    elevation: 2
  },
  textStyle: {
    color:"gray",
    marginLeft:2
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
