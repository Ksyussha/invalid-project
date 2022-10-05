import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Button,
  TextInput,
  Button as CustomButton
} from "react-native";

const Feedback = (props) => {
  const [AddBox, setAddBox] = useState(false);
  console.log(AddBox, "AddBox");
  const [AddContacts, setAddContacts] = useState([]);
  console.log(AddContacts, "AddContacts");

  const [name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [nickName, setNickName] = useState("");
  const HandleDelete = (id) => {
    console.log(id, "id");
    const deleteData = AddContacts.filter((item) => {
      return item.id !== id;
    });
    console.log(deleteData, "delete");
    setAddContacts(deleteData);
  };

  // const goToMuseums = () => {
  //   this.props.navigation.navigate({
  //     name: "MuseumScreen"
  //   });
  //   console.log(goToMuseums);

  // };
  function goToMain() {
    props.navigation.navigate("Main");
  }
  function goToMuseums() {
    props.navigation.navigate("MuseumScreen");
  }

  const HandleAddContacts = () => {
    const tempObj = {
      id: AddContacts.length + 1,
      name: name,
      Phone: Phone,
      nickName: nickName
    };
    const temp = [...AddContacts, tempObj];
    console.log(temp, "temp");
    setAddContacts(temp);
    setName("");
    setPhone("");
    setNickName("");
    setAddBox(false);
  };

  return (
    <View>
      {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <CustomButton
          title="CLICK ME"
          containerStyles={{
            backgroundcolor: "#1E1815",
            display: "flex",
            justifyContent: "center",
            width: 100
          }}
          onPress={this.goToMuseums}
        />
      </View> */}
      <Button
        title="BACK TO MAIN"
        onPress={goToMain}
        style={{ backgroundcolor: "black" }}
      />
      <Button
        title="BACK TO MUSEUMS"
        onPress={goToMuseums}
        style={{ backgroundcolor: "black" }}
      />
      <Text style={styles.Text}>Want to leave feedback?</Text>
      <Text>
        <Button
          onPress={() => setAddBox(true)}
          width="10px"
          title="CLICK FOR FEEDBACK"
        />
      </Text>

      {AddBox === true ? (
        <Text>
          <View style={{ padding: 10 }}>
            <TextInput
              placeholder="Enter  Name"
              value={name}
              minLength={2}
              onChangeText={(e) => setName(e)}
            />
            <TextInput
              placeholder="Enter Feedback"
              value={nickName}
              onChangeText={(e) => setNickName(e)}
            />
          </View>
          <Button title="SEND" onPress={() => HandleAddContacts()} />
        </Text>
      ) : (
        <></>
      )}

      <FlatList
        data={AddContacts}
        renderItem={({ item }) => (
          <View>
            <Text>
              <Image
                source={{
                  uri:
                    "data:image/png;base64,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"
                }}
                style={{ width: 30, height: 30 }}
              />

              <Text>
                <Text style={styles.TextLetters}>
                  {console.log(item.name, "item.name")}
                  {item.name}
                </Text>
                <Text> </Text>
                <Text style={styles.TextLetters}>{item.nickName}</Text>
              </Text>
            </Text>
            <Text>
              <Button
                onPress={() => {
                  HandleDelete(item.id);
                }}
                title="Delete"
                color="red"
              />
              <Button
                onPress={() => {
                  alert(`${item.Phone}`);
                }}
                title="View Call Details"
                color="pink"
              />
            </Text>

            {/* 
            <Image
              onClick={ ()=>HandleDelete(item.id)}
              source={{
                uri:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAACCCAMAAACZ6K1KAAAAY1BMVEX///8AAABubm5lZWXs7Oy3t7eXl5e/v7+Dg4PQ0NBEREROTk5RUVE/Pz/h4eETExPy8vJcXFzGxsb5+fk6OjoNDQ1XV1erq6slJSVzc3OxsbEtLS2RkZHa2tofHx98fHyhoaE+2f2rAAACxElEQVRoge2b3dprMBCFBRVaFFX6tVTv/yp3aUJIQpB49sGsQ4l5q/I7WSxLRUGVI6miKlAKoqIklXN+ShM9JPexRELo4WpBRcskhM46SKUKCaFSA+qqhnrvJ8VqJITi3aiMiXa/TnRnCrPdKNzHynHMCQ/9DetDXcTlZwMoybuI9aMesgpv7ahQViEC1KxovypkFWgTVOxXQZWGEtEffQ0vQoV04IrE5ZdLysxndYEMq6h/pJNpUKtT9+cdQUKo/RNfx6Be7HBqWNjyj0L5VngUKmQWKZcSa1c5PEk0oLztI8qcPB6VmiFZVsqh9o+WEmEOpW/dPVHAoU6mUCcOlZtCRRwK2TcjJFvQ2NHD97TLH3YxZ8v4XEVVWNVRqOqo6arrTeflWjrU7vXcY1DdDrZ+L1fcqzdZx7iNaVIz7Mpd3CcmHF+THBIwr/Bk+/9HSvZv/ojosvhPOoBom0zo5GEDClCAAhSg/i9UIliJJoJc9216bS3q09adBAm+s2g+2U0k7e2fPajfIvE1ejCymhuxbr85vNqOooupUWKbLIdHOSeaIGdn9nUoWtth8SSndGXDOjM3q6FOIhQSPAFFsZs0QAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAEqNqcq1hriXkqDVnk8f0tLfejKIOCTYCtfCMDELkN0XstZWouLNLTOzP3bHuxAjS5YkfIxPr2jx78my8elo1833u9Lj2muc4Hy9H0SNobXacJwnIH0FTm5uvCyUP+EGCV7tH1HTz4Upow9Z11NPbNgVeLFp01fLJQtL7zwWFvScx12BouvXmc9G7H+z4991GiGzw1AsN472P6ts2yizYrOzDfIPB96pWCTIgyYs34PWVDgje8r3rNGPa1MyatYc+78sBlPWcI32b/OJXSapKl79RCZzlMMty1LyhN+zZxXmzCtvDogHnHzvkPlnqa+F4AAAAAElFTkSuQmCC"
              }}
              style={{ width: 30, height: 30 }}
            /> */}
          </View>
        )}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 10 }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  TextLetters: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 10
  },
  Button: {
    width: "50px",
    justifyContent: "flex-end"
  }
});

export default Feedback;
