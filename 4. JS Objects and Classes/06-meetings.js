function meetinngSchedule(arr){
    let meetings = {};
    for(let meeting of arr ){
        let [day, name] = meeting.split(' ');

        if (meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else{
            meetings[day]=name;
            console.log(`Scheduled for ${day}`);
        }
    }

    let entries = Object.entries(meetings);
    for(let [day, name] of entries){
        console.log(`${day} -> ${name}`);
    }

}

meetinngSchedule(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
);

meetinngSchedule(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);