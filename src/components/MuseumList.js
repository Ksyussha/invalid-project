import React from "react";
import {
  Text,
  Button,
  ScrollView,
  SectionList,
  StyleSheet
} from "react-native";

import Museum from "./Museums";

const MuseumScreen = (props) => {
  const list = [
    {
      title: "France",

      data: [
        {
          title: "Louvre Museum",
          img:
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/wedding-photos-in-the-louvre-museum-courtyard-paris-france-black-and-white-shawn-obrien.jpg",
          desc: "Paris"
        },
        {
          title: "Center Georges Pompidou",
          img:
            "https://www.unjourdeplusaparis.com/wp-content/uploads/2015/06/photo-musee-beaubourg-paris.jpg",
          desc: "Paris"
        },
        {
          title: "Château de Versailles",
          img:
            "https://i.etsystatic.com/10849154/r/il/3a8d9f/1943457984/il_570xN.1943457984_h83t.jpg",
          desc: "Versailles"
        }
      ]
    },
    {
      title: "Russia",

      data: [
        {
          title: "Эрмитаж",
          img:
            "http://ic.pics.livejournal.com/antenario/10792369/223252/223252_original.jpg",
          desc: "Санкт-Петербург"
        },
        {
          title: "Третьяковская галерея",
          img:
            "https://pastvu.com/_p/d/4/b/d/4bd0bdf89120b7b0a778d2ad8b1882c3.jpg",
          desc: "Москва"
        },
        {
          title: "Эрарта",
          img: "https://www.spbtravel.ru/pic/photo/attbig_556_22.JPG",
          desc: "Санкт-Петербург"
        }
      ]
    },
    {
      title: "China",

      data: [
        {
          title: "Forbidden City",
          img:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292943585.jpg?k=9200e71df01ba36d1513c38901f1cbeaafe0ca89844dea4570322203494f071b&o=&hp=1",
          desc: "Beijing"
        },
        {
          title: "Suzhou Museum",
          img:
            "https://assets.novas.com.au/images/projects-suzhou-museum-1.jpg",
          desc: "Suzhou"
        },
        {
          title: "",
          img: "",
          desc: ""
        }
      ]
    }
  ];

  function goToMain() {
    props.navigation.navigate("Main");
  }

  function goToFeedback() {
    props.navigation.navigate("Feedback");
  }

  return (
    <ScrollView style={styles.app}>
      <Button
        title="BACK TO MAIN"
        onPress={goToMain}
        style={{ backgroundcolor: "black" }}
      />
      <Button
        title="READ FEEDBACKS"
        onPress={goToFeedback}
        style={{ backgroundcolor: "black" }}
      />

      <SectionList
        sections={list}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Museum data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default MuseumScreen;
