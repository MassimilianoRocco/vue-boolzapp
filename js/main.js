const { createApp } = Vue

createApp({

    data() {
        return {
            user:[
                {
                    name: 'Sofia',
                    avatar: 'https://i.pravatar.cc/150?img=5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
            ],
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'https://i.pravatar.cc/150?img=11',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'https://i.pravatar.cc/150?img=13',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'https://i.pravatar.cc/150?img=12',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'https://i.pravatar.cc/150?img=50',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'https://i.pravatar.cc/150?img=48',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'https://i.pravatar.cc/150?img=60',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'https://i.pravatar.cc/150?img=55',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            isActive: false,
            indexClicked:0,
            userMessage:"",
            searchText:"",
            timeMessage:"",
            newUserMessage:"",
            toggle: false,
        }
    },
    methods: {
        // *****FUNCTION TO SET/SAVE AN INDEX OF THE CARD SELECTED*****
        setIndexClicked(index){
            this.indexClicked = index;
        },

        // *****FUNCTION TO DEFINE THE SENDER OR THE RECEIVER CSS CLASS*****
        messageSentOrReceived(arrayStatus){
            if(arrayStatus=='sent'){
                return 'receiver-message';
            }
            else if(arrayStatus=='received'){
                return 'sender-message';
            }
        },

        // *****SET AVATAR(SENDER OR RECEIVER) FOR CONVERSATION BOX FUNCTION***** 
        avatarSenderOrReceiver(arrayStatus){
            if(arrayStatus=='sent'){
                return this.user[0].avatar;
            }
            else if(arrayStatus=='received'){
                return this.userList[this.indexClicked].avatar;
            }
        },

        // *****WRITEMESSAGE FUNCTION*****
        writeMessage(indexClicked){

            // USO API LUXON PER DATA CON METODI PER FORMATTARE
            const data = luxon.DateTime.local().toString();
            const formatData = luxon.DateTime.fromISO(data).toFormat('dd/LL/yyyy HH:mm');

            const message = {
                date: formatData,
                message: this.userMessage,
                status: 'sent'
            }
            this.timeMessage=message.date
            this.contacts[indexClicked].messages.push(message);

            let answer = {
                date: formatData,
                message: "ok",
                status: 'received'
            }
            
            //O uso l'arrow function oppure setTimeout(function(){...}.bind, 2000)
            let timeout = setTimeout(()=>{
                console.log(this.contacts)
                this.contacts[indexClicked].messages.push(answer);
            }, 2000)
        },

        // *****CANCEL MESSAGE FUNCTION*****
        cancelMessage(indexClicked, index){
            this.contacts[indexClicked].messages.splice(index, 1);
        },

        // *****MODIFY MESSAGE FUNCTION*****
        modifyMessage(indexClicked, index){
            this.contacts[indexClicked].messages[index].message = this.newUserMessage;
            this.newUserMessage="";
            this.toggle = !this.toggle;
        },
    },
    computed:{
        // ***** BIND THE SEARCH SECTION TO THE CARDS SHOW*****
        userList(){
            if(this.searchText.trim().length>0){
                return this.contacts.filter((contact)=>contact.name.toLowerCase().includes(this.searchText.trim().toLowerCase()));
            }
            return this.contacts;
        }
    },
    mounted() {
        
    }

}).mount('#app')