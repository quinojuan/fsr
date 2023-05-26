import Publisher from "../models/publisherModel.js";

export const loadDB = async () => {

    const data = [
        {
         "lastName": "Acevedo",
         "name": "Juana",
         "hope": "Otras ovejas",
         "regularPionner": "false",
         "elder": "false",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "12\/27\/1950",
         "dateOfInmersed": "09\/24\/1966",
         "gender": "Femenino"
        },
        {
         "lastName": "Egues",
         "name": "Daniela",
         "hope": "Otras ovejas",
         "regularPionner": "true",
         "elder": "false",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "06\/01\/1974",
         "dateOfInmersed": "05\/30\/1987",
         "gender": "Femenino"
        },
        {
         "lastName": "Egues",
         "name": "Gustavo",
         "hope": "Otras ovejas",
         "regularPionner": "true",
         "elder": "true",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "11\/14\/1977",
         "dateOfInmersed": "09\/03\/2005",
         "gender": "Masculino"
        },
        {
         "lastName": "Medina",
         "name": "Marcelo",
         "hope": "Otras ovejas",
         "regularPionner": "true",
         "elder": "true",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "05\/15\/1980",
         "dateOfInmersed": "07\/16\/1995",
         "gender": "Masculino"
        },
        {
         "lastName": "Medina",
         "name": "Rebeca",
         "hope": "Otras ovejas",
         "regularPionner": "true",
         "elder": "false",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "03\/03\/1974",
         "dateOfInmersed": "12\/29\/1984",
         "gender": "Femenino"
        },
        {
         "lastName": "Romero",
         "name": "Estela",
         "hope": "Otras ovejas",
         "regularPionner": "false",
         "elder": "false",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "07\/22\/1978",
         "dateOfInmersed": "PNB",
         "gender": "Femenino"
        },
        {
         "lastName": "Romero",
         "name": "María",
         "hope": "Otras ovejas",
         "regularPionner": "false",
         "elder": "false",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "06\/22\/1999",
         "dateOfInmersed": "03\/01\/2014",
         "gender": "Femenino"
        },
        {
         "lastName": "Romero",
         "name": "Vicente",
         "hope": "Otras ovejas",
         "regularPionner": "false",
         "elder": "false",
         "ministerialServant": "true",
         "group": 1,
         "dateOfBirth": "01\/20\/1973",
         "dateOfInmersed": "03\/01\/2014",
         "gender": "Masculino"
        },
        {
         "lastName": "Sánchez",
         "name": "Miriam",
         "hope": "Otras ovejas",
         "regularPionner": "true",
         "elder": "false",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "02\/23\/1998",
         "dateOfInmersed": "03\/01\/2014",
         "gender": "Femenino"
        },
        {
         "lastName": "Sánchez",
         "name": "Yanina",
         "hope": "Otras ovejas",
         "regularPionner": "false",
         "elder": "false",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "07\/10\/1994",
         "dateOfInmersed": "04\/22\/2017",
         "gender": "Femenino"
        },
        {
         "lastName": "Sanfilippo",
         "name": "Dámaris",
         "hope": "Otras ovejas",
         "regularPionner": "true",
         "elder": "false",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "07\/30\/1986",
         "dateOfInmersed": "06\/26\/1998",
         "gender": "Femenino"
        },
        {
         "lastName": "Sanfilippo",
         "name": "Diego",
         "hope": "Otras ovejas",
         "regularPionner": "true",
         "elder": "true",
         "ministerialServant": "false",
         "group": 1,
         "dateOfBirth": "01\/13\/1982",
         "dateOfInmersed": "07\/06\/1996",
         "gender": "Masculino"
        }
       ]

    try {
        const acevedo = await Publisher.findOne({ lastName: "Acevedo"});
        if (!acevedo) {
            await Publisher.insertMany(data);
            console.log("Exito")
        } else {
            console.log("Los datos ya estaban cargados!")
        }
    } catch (error) {
        console.error(error)
    }
    
};
