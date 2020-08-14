const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: "Igor Carneiro",
        avatar: "https://avatars1.githubusercontent.com/u/62471212?s=460&u=de51298f2768bbc264a2bb92c6ccc6448e3a1bcd&v=4",
        whatsapp: "22981445537",
        bio: "Se geografia humana é a sua paixão, fale comigo! Vou adorar te ensinar sobre as migrações humanas e as mudanças nas fronteiras dos Estados."
    }

    classValue = {
        subject: "Geografia",
        cost: "40"
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser antes ou igual ao hirário solicitade
    //o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
    `)
    console.log(selectClassesSchedules)
})