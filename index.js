
//Introduction function with a return
function introduction(firstName){
    return "Hi, my name is " + firstName + ".";
}

/*Introduction function without a return
function introduction(newPerson){
    console.log(`Hi, my name is , ${newPerson}`);
}*/

//Introduction with language w 2 parameters
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//Introduction with language w 2 parameters && default value language = JavaScript
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
