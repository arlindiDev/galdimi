class kindergarten{

    constructor(kids, activity, amountOfKids) {
        this.kids = kids;
        this.activity = activity;
        this.amountOfKids = amountOfKids;

    }

    playingOutside() {

        if(this.amountOfKids < 10) {
            console.log('Kids should stay inside')
        }
        else {
            console.log('Kids should go outside')
        }     
    }

}

var smallKindergarten = new kindergarten('boys', 'football', 9);
var largKindergarten = new kindergarten('girls', 'singing', 10);

smallKindergarten.playingOutside()
largKindergarten.playingOutside()
