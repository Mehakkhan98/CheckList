import { StyleSheet, Platform, Dimensions } from "react-native";
import { Background } from "../Style/Color";

export default StyleSheet.create({
  //Button.js style sheet
  loginbutton: {
    backgroundColor: Background,
    flex: 1,
    width: "100%"
    // marginVertical: 8,

    // //  borderRadius:12,
    // height: 35,

    // marginHorizontal: 5,
    // paddingVertical: 5,
    // paddingHorizontal: 8
  },
  buttontext: {
    color: "rgba(255,255,255,0.7)",
  //  paddingVertical: 10,
    fontSize: 18,
    //fontWeight: "800",
    textAlign: "center"
  },
  ////NormalText.js style sheet
  signuptext: {
    color: "#455a64",
    backgroundColor: "yellow",
    paddingTop: 5,
    fontSize: 18
  },

  /// Login.js Style sheet
  logincontainer: {
    backgroundColor: "white",
    flex:1,
    padding: 20,
   // flexDirection: "column",
    justifyContent: "space-between"
  },
  // containertext:{
  //     flexGrow:1,
  //     backgroundColor: 'blue',
  //    marginVertical:10,
  //     alignItems:"center",
  //     justifyContent:"center",
  //     flexDirection:"column"
  // },
  signuptext: {
    color: "#455a64",
    paddingTop: 10,
    fontSize: 18
  },
  signupbutton: {
    color: "Background",
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10
  },
  ///logo.js style sheet
  logocontainer: {
    marginTop: 0,
    top:10,
    // backgroundColor: "#ffff",
  
    alignItems: "center",
    justifyContent: "center"
  },
  logocontainer2: {
    //flex: 1,
    marginTop: 15,
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between"
   
  },
  ///signupt.js style sheet
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  },
  containertext: {
   // flex: 0,
    //backgroundColor: "blue",
    marginTop:10,
    alignItems: "center",
    //justifyContent: "center",
    flexDirection: "column"
  },
  signuptext: {
    color: "#455a64",
    backgroundColor: "pink",
    paddingTop: 10,
    fontSize: 18
  },
  signupbutton: {
    color: "#455a64",
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10
  },
  ///// signup.js style sheet
  signupcontainer: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  },
  signupcontainertext: {
    flexGrow: 1,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  signuptext: {
    color: "#455a64",
    paddingTop: 10,
    fontSize: 18
  },
  signupbutton: {
    color: "#455a64",
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10
  },
  //////Studentregister.js style sheet
  studentRcontainer: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    marginVertical: 186,
    justifyContent: "center"
  },
  inputbox: {
    width: "100%",
    height: 25,
    // borderRadius:10,
    paddingHorizontal: 12,
    backgroundColor: "#ffff",
    fontSize: 16,
    color: "#455a64",
    marginTop: 5,
    flex: 1
    //   borderColor: "#1c313a",

    //  borderWidth:1,
  },
  button: {
    backgroundColor: Background,
    width: 250,
    marginVertical: 10,
    //  borderRadius:12,
    height: 40
  },
  buttontext: {
    color: "rgba(255,255,255,0.7)",
    paddingVertical: 7,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },
  ///sform.js style sheet
  sformcontainer: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    marginTop: 10,
    top:0,

    justifyContent: "center"
  },
  inputbox: {
    width: "100%",
    height: 30,
    // borderRadius:10,
    paddingHorizontal: 12,
    backgroundColor: "#ffff",
    fontSize: 16,
    color: "#455a64",
    marginTop: 8,
    borderColor: "#1c313a",
    borderWidth: 1
  },
  button: {
    backgroundColor: Background,
    width: 250,
    marginVertical: 10,
    //  borderRadius:12,
    height: 40
  },
  buttontext: {
    // color:'rgba(255,255,255,0.7)',
    color: "#ffffff",
    paddingVertical: 7,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },
  ///inputfield.jsstyle sheet
  inputcontainer: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputbox: {
    width: "100%",
    height: 40,
    // borderRadius:10,
    paddingHorizontal: 12,
    backgroundColor: "#ffff",
    fontSize: 16,
    color: "#455a64",
    marginVertical: 5,
    borderColor: "#1c313a",
    borderWidth: 1
  },
  ///Togglebuttton.js style sheet
  toglebutton: {
    backgroundColor: Background,
    width: 85,
    marginTop:10,
    marginBottom:5,
    borderRadius: 8,
    // borderTopLeftRadius:8,
    // height: 35,
    marginHorizontal: 5,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  buttontext: {
    // color:'rgba(255,255,255,0.7)',
    color: "#ffffff",
    paddingVertical: 7,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center"
  },
  //lForm.js style sheet
  lcontainer: {
    //flex: 1,
    // backgroundColor: '#ffff',
    //backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  },

  buttoncontainer: {
    marginTop:10,
    flexDirection: "row",
    alignSelf:'center'
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: Background,
    justifyContent: "center",
    padding: 10,
    marginTop: 2,
    width: Dimensions.get("window").width * 0.9
    // ...Platform.select({
    //   ios: {
    //     height: 65
    //   },
    //   android: {
    //     height: 60
    //   }
    // })
  },
  buttonStyle2: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: Background,
    justifyContent: "center",
    padding: 10,
    marginTop: 2,
    width: "100%",
    marginBottom:2
    // ...Platform.select({
    //   ios: {
    //     height: 65
    //   },
    //   android: {
    //     height: 60
    //   }
    // })
  }
});
