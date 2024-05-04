// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs=require('fs');

fs.readFile("a.txt", 'utf8', (error,data)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log("data read from the file")

    const dataContents=data.replace(/\s+/g,' ');
    console.log(dataContents);

    fs.writeFile('a.txt',dataContents, (error)=>{
        if (error) {
            console.error(error);
            return;
          }
          console.log('Data written to file');
    })

})