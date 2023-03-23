let hisun = true;
let dahlich = true;
let zangEnkeroj = true;

function* millioner() {
    function hisunHisun() {
        let a =  prompt(`
         1.50/50
         2.Dahlichi ognutyun
         3.zang enkeroj
         
         `)
         if(a === 1){
         
         }    
     }
   
    alert("Bari galust ov e uzum darnal milionater");
    let sum = 0;
    alert("harcrc arajin");
    
    res = prompt(`Vorn e hayastan mayraqaxaq@ 
    a) Yerevan b)Minsk c)Moskva d)Paris`)
    if (res === "a") {
        sum += 30000;
        let com = confirm("Duq shahel eq andzernamxeli " + sum + "AMD ete cankanum eq sharunakel sexmec OK ete voch sexmec Cancel")
        if (com === true) {
            alert("Shat lav sharunakum enq")
        } else {
            return alert("duq vercreciq andzernamxeli gumar@" + sum + "AMD xaxn avartvec")
        }
    } else {
        return alert("duq partveciq")
    }
    yield
    alert("harcrc erkrord");
    res = prompt(`qani grame mek kilogram
    a) 10000 b)1000 c)5000 d)10000`)
    if (res === "b") {
        sum += 10000; alert("duq shahel eq " + sum + "")
    } else {
        return alert("duq partveciq")
    }
    yield
    alert("harcrc erord");
    res = prompt(`Vorne Portugaliayi mayraqaxaq 
    a) Yerevan b)paris c)Moskva d)Lisbon`)
    if (res === "d") {
        sum += 20000; alert("duq shahel eq " + sum + "")
    } else {
        return alert("duq partveciq")
    }
    yield
    alert("harcrc chorord");
    res = prompt(`inchpesen Artur Aleqsanaynin dimum gymrium 
    a)Barev b)Artur c)Spitak arj d)Co`)
    if (res === "c") {
        sum += 30000;
        let com = confirm("Duq shahel eq andzernamxeli " + sum + "AMD ete cankanum eq sharunakel sexmec OK ete voch sexmec Cancel")
        if (com === true) {
            alert("Shat lav sharunakum enq")
        } else {
            return alert("duq vercreciq andzernamxeli gumar@" + sum + "AMD xaxn avartvec")
        }
    } else {
        return alert("duq partveciq")
    }
    yield
    alert("harc hingerord");
    res = prompt(`Vorqan e Real Madrid haxtel Championeri ligan
    a) 6 b)5 c)10 d)14`)
    if (res === "d") {
        sum += 50000; alert("duq shahel eq " + sum + "")
    } else {
        return alert("duq partveciq")
    }
    yield
    alert("harcrc vecerord");
    res = prompt(`100 tarun ayl kerp aselen  
    a)Dar b)Am c)Haryurak d)Amyak`)
    if (res === "a") {
        sum += 50000; alert("duq shahel eq " + sum + "")
    } else {
        return alert("duq partveciq")
    }
    yield
    alert("harc yoterord");
    res = prompt(`... qar@ getnin chi mna
    a)Sur b)Tashac c)Klor d)Mec`)
    if (res === "b") {
        sum += 50000; alert("duq shahel eq " + sum + "")
    } else {
        return alert("duq partveciq")
    }
    yield
    alert("harcrc uterord");
    res = prompt(`vorqane Milan futbolayin akumb nvachel championeri ligan 
    a)10 b)5 c)8 d)7`)
    if (res === "d") {
        sum += 50000; alert("duq shahel eq " + sum + "")
        let com = confirm("Duq shahel eq andzernamxeli " + sum + "AMD ete cankanum eq sharunakel sexmec OK ete voch sexmec Cancel")
        if (com === true) {
            alert("Shat lav sharunakum enq")
        } else {
            return alert("duq vercreciq andzernamxeli gumar@" + sum + "AMD xaxn avartvec")
        }
    }

    else {
        return alert("duq partveciq")
    }
    yield
    alert("harcrc inerord");
    res = prompt(`Vor azgayin havakakne amenashat nvachel ashxarhi gavat
    a) Hayastan b)Argentina c)Germania d)Brasil`)
    if (res === "d") {
        sum += 50000; alert("duq shahel eq " + sum + "")
    } else {
        return alert("duq partveciq")
    }
    yield
    alert("harcrc taserord");
    res = prompt(`Ove exel amerikayi arajin naxagah
    a)Lincoln b)Jorj Vashington c)Kennedy d)Djon Adams`)
    if (res === "b") {
        sum += 50000; alert("duq shahel eq " + sum + "")
        let com = confirm("Duq shahel eq andzernamxeli " + sum + "AMD ete cankanum eq sharunakel sexmec OK ete voch sexmec Cancel")
        if (com === true) {
            alert("Duq haxteciq")
        } else {
            return alert("AMD xaxn avartvec dzer vastakac " + sum + " AMD")
          
            
             
        }
    } else {
        return alert("duq partveciq")
    }
   

    yield


}
let xax = millioner();
while (xax.next().done !== true) {
    xax.next()
}