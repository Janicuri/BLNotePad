const Datastore = require('nedb');
const products = new Datastore("products.db");
products.loadDatabase()


const prods = [
    { Name: "SALLATE GREKE", Price: 400, Description: "" },
    { Name: "SALLATE ME PATELLXHAN", Price: 400, Description: "" },
    { Name: "SALLATE ME KARROTE", Price: 300, Description: "" },
    { Name: "SALLATE JESHILE", Price: 250, Description: "" },
    { Name: "LAKRA TE EGRA", Price: 300, Description: "" },
    { Name: "SALLATE DOMATE", Price: 250, Description: "" },
    { Name: "SALLATE ME ULLINJ", Price: 200, Description: "" },
    { Name: "SALLATE MIKS", Price: 300, Description: "" },
    { Name: "FËRGESË", Price: 400, Description: "" },
    { Name: "FËRGESË ME LLUKANIK", Price: 500, Description: "" },
    { Name: "PATELLXHANE FURRE", Price: 400, Description: "" },
    { Name: "QOFTE KUNGULLI", Price: 500, Description: "" },
    { Name: "TAVE DHEU", Price: 600, Description: "" },
    { Name: "ORIZ", Price: 200, Description: "" },
    { Name: "PASTA ME SALCE DOMATE", Price: 500, Description: "" },
    { Name: "PASTA PANNA PROSHUTE", Price: 600, Description: "" },
    { Name: "PASTA ME GJALPE", Price: 200, Description: "" },
    { Name: "SUPE ME PERIME", Price: 400, Description: "" },
    { Name: "TASQEBAP", Price: 400, Description: "" },
    { Name: "PACE KOKE/PLENDESI", Price: 300, Description: "" },
    { Name: "MELCI", Price: 800, Description: "" },
    { Name: "QOFTE ZGARE", Price: 600, Description: "" },
    { Name: "FILETO PULE", Price: 600, Description: "" },
    { Name: "PAIDHAQE", Price: 800, Description: "" },
    { Name: "BERXOLLE", Price: 600, Description: "" },
    { Name: "ROSTO VICI", Price: 800, Description: "" },
    { Name: "FILETO PULE ME PANNA", Price: 700, Description: "" },
    { Name: "KERNACKA", Price: 40, Description: "" },
    { Name: "SPECA TE SKUQUR", Price: 300, Description: "" },
    { Name: "SPECA TE SKUQUR & DJATHE", Price: 400, Description: "" },
    { Name: "PATATE TE SKUQURA", Price: 300, Description: "" },
    { Name: "FRIED ZUCCHINI", Price: 300, Description: "" },
    { Name: "TZAZIKI", Price: 250, Description: "" },
    { Name: "PERIME ZGARE", Price: 400, Description: "" },
    { Name: "TIROKAFTERI", Price: 300, Description: "" },
    { Name: "DJATHE I BARDHE", Price: 200, Description: "" },
    { Name: "DJATHE KACKAVALL", Price: 300, Description: "" },
    { Name: "DJATHE I BARDHE I SKUQUR", Price: 250, Description: "" },
    { Name: "SAGANAKI", Price: 400, Description: "" },
    { Name: "TARATOR", Price: 200, Description: "" },
    { Name: "KOS", Price: 200, Description: "" },
];

for (let p of prods) {
    products.insert(p, function (err, newDoc) {
        if (err) {
            console.error('Error inserting product:', err);
        } else {
            console.log('Inserted product:', newDoc);
        }
    });
}