//First version with functions.
//-------------------------------------------------------//
let result = '';
//let y;

for (y = 1; y<=5; y++){
    for (spaceTop = 1; spaceTop<= 5-y; spaceTop++){
        putSomething(' ', 1);
    }
    
    putSomething('$', 1);

    for (star = 2; star <= y; star++){
        putSomething('$', 2);
    }

    result += '\n';
    //console.log(result);
}

for (y=6; y<=9;y++){
    for (space=1; space<=y-5; space++){
        putSomething(' ', 1);
    }

    putSomething('$', 1);

    for(star=y+1;star<=9;star++){
        putSomething('$', 2);
    }
    result += '\n';
    //console.log(result);
}

console.log(result);

function putSpace () {
    result += ' '; //result = result + ' ';
}

function putStar(starCount) {
    for (i=1; i<=starCount;i++){
        result += '*';
    }
}

function putSomething(content, count){
    for (i=1; i<=count;i++){
        result += content;
    }
}

function createTree(cellCount,content){

}


//Secon version. From Abdurrahman
//-------------------------------------------------------//


let count = 15;
var res = "";

for (var topPart = 1; topPart <= count; topPart+=2){
    for (var space = (count - topPart)/2; space >= 0; space--){
        res += ' ';
    }
    for (var star = 0; star < topPart; star++){
        res += "*";
}
    console.log(res);
    res = "";
}
for (var bottomPart = count-2; bottomPart >= 1; bottomPart-=2){
    for (var space = (count - bottomPart)/2; space >= 0; space--){
        res += ' ';
    }
    for (var star = 0; star < bottomPart; star++){
        res += "*";
    }
    console.log(res);
    res = "";
}