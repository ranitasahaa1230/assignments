// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs');
const data='HELLO, How are you doing, Ranita?'

fs.writeFile('a1.txt', data, err=>{// file will be created and the contents will be written as well
    if(err){
        console.error(err);
        return;
    }
    console.log('dATA wRItten to the file');
})