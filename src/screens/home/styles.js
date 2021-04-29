import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  balanceContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: "row",
    marginHorizontal: 13,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  currentAmountValeuText: {
    color: "#FFFFFF",
    fontSize: 32,
    marginBottom: 10,
    fontFamily: "TitilliumWeb-Bold",
    alignSelf: "center"
  },
  currentAmountLabelText: {
    fontFamily: "TitilliumWeb-Regular",
    color: "#FFFFFF70",
    fontSize: 15,
  },
  addressText: {
    color: Colors.blackText,
    fontWeight: "bold",
    fontSize: 12,
  },

  overlayButtons: {
    marginBottom: 10,
    justifyContent: "space-between"
  },
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: "#347AF0"
  },

  topContainer: {
    flex: 2,
    backgroundColor: "#347AF0"
  },

  cardContainer: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 14,
    width: windowWidth,
  },

  subHeadingContainer: {
    top: 20,
    left: 20
  },

  subHeading: {
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 15
  },

  modulesContainer: {
    // flex: 1,
    top: 50,
    alignSelf: 'center',
    width:0.6*windowWidth,
    height: 0.4*windowHeight
  }, 

  listContainer: {
    
  },


  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 0.8 * windowWidth
  },

  text: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "TitilliumWeb-Regular",
  },

  heading: {
    color: "black",
    fontSize: 45,
    alignSelf: "flex-start",
    textAlign: "center",
    fontFamily: "TitilliumWeb-Bold",
  },
  buttonContainer: { position: "absolute", bottom: 100, alignSelf: 'center' },
});

export default styles;
