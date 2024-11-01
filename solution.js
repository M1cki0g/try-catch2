let tab = []; 
tab.push("Faire les courses");
tab.push("Etudier JavaScript");      
tab.push("Appeler un ami");



      // console.log(tab);

      // tab.pop(0);

      // console.log(tab);
      try {
        tab.pop();
      } catch (err) {
        console.log("error" + err);
      }
