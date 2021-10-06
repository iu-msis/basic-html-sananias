const Intro = {
    data() {
        return {
            "person": {},
        }
    },

computed: {
    prettyBirthday(){
        return dayjs(this.person.dob.date)
        .format('DD/MM/YYYY')
    }

},    
//from professor's Github
methods: {
    fetchUserData() {
        console.log("A");
        fetch('https://randomuser.me/api/')
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            console.log("C");
            this.person = responseJson.results[0];
        })
        .catch( (err) => {
            console.error(err);
        })
          
    .catch( (err) => {
        console.error(err);
       
    })
    console.log("B");
       }
},
created() {
    this.fetchUserData();

}//end created

}//end Offer config

Vue.createApp(Intro).mount('#introApp');

