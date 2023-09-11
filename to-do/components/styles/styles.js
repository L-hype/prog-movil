import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  //login styles:
  formContainer: {
    width: 500,
    height: 500,
    alignItems: 'center',
    marginTop: "75%",
    gap: 30,
    justifyContent: 'center',
    position: 'absolute'

  }, text: {
    fontSize: 30,
    width: 300,
    textAlign: "center",
    color: 'rgb(102,136,204)'
  },
  input: {
    height: 55,
    width: '78%',
    borderRadius: 17,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 19,
    color: 'white',
    backgroundColor: 'rgba(122,136,204,0.4)',

  },
  padLogIcon: {
    marginTop: '23%',
    marginLeft: '59%',
  },
  userIcon: {
    marginTop: '37%',
    marginLeft: '59%',
  },
  forgotPassContainer: {
    position: 'absolute',
    marginTop: '200%'
  },
  textForgotPass: {
    color: 'rgb(85,43,153)',
    marginTop: 10,
    fontSize: 20
  },

  //template styles:-----------------------------------

  container: {
    flex: 1,
    backgroundColor: '#901090',
    alignItems: 'center',

  },
  back: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  vista: {
    width: '98%',
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderWidth: 8,
    borderColor: 'rgb(96,134,204)',
    marginTop: '5%',
    borderRadius: 30,
  },
  imageLogo: {
    borderWidth: 3,
    width: '80%',
    height: '80%',
    borderRadius: 140,
  },
  sizeImage: {
    width: 300,
    height: 300,
    marginTop: 88,
    marginLeft: '10%'
  },
  texto: {
    fontSize: 34,
    color: 'rgb(102,136,204)'
  },
  todoText: {
    fontSize: 20,
    color: 'rgb(102,136,204)',
    position: "absolute",
    marginTop: '58%'
  },
  button: {
    marginTop: '32%',
    width: '35%',
    height: '6%',
    color: 'rgba(102,136,204,0.6)',
    borderRadius: 35,
    padding: '4.5%',
    backgroundColor: 'rgba(102,136,204,0.6)',

  },
  screenName: {
    fontSize: 38,
    color: 'rgb(102,136,204)'
  }
})



