const user = {
  name: "bharat",
  getMe: function (){
    console.log(`My name is ${this.name}`)
  },
}

user.getMe();