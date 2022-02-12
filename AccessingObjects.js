var myMusic = [
    {
        "artist":"Billy Joel",
        "title" :"Piano Man",
        "year" : 1973,
        "formats" :[
            "CD",
            "8T",
            "LP"
        ],
        "gold" : true
    },
    {
        "artist" : "Beau Carnes",
        "title" : "Cereal Man"
    }
]

console.log(myMusic[0]["formats"][1]);  //8T

console.log(myMusic[0].formats[0]);  //CD