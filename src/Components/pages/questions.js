//let jonathan, joseph, jotaro, josuke, giorno, jolyne;
//jonathan = joseph = jotaro = josuke = giorno = jolyne = 0;

const questions = [
    {
        title: 'Would you make a joke at a funeral?',
        options: [
            {id: 0, textAnswer: 'Yes', jonathan:0, joseph: 3, jotaro: 0, josuke: 1, giorno:0, jolyne: 1},
            {id: 1, textAnswer: 'No', jonathan: 3, joseph: 0, jotaro: 1, josuke: 0, giorno: 3, jolyne: 0}
        ]
    },
    {
        title: 'Which is your favorite sport?',
        options: [
            {id: 0, textAnswer: 'Football', jonathan: 1, joseph:0, jotaro: 0, josuke:0, giorno: 3, jolyne: 0},
            {id: 1, textAnswer: 'Baseball', jonathan: 0, joseph: 1, jotaro: 1, josuke: 0, giorno: 0, jolyne: 3},
            {id: 2, textAnswer: 'Rugby', jonathan: 3, joseph: 0, jotaro: 0, josuke: 0, giorno: 0, jolyne: 0},
            {id: 3, textAnswer: 'Videogames', jonathan: 0, joseph: 0, jotaro: 3, josuke: 3, giorno: 0, jolyne: 0 }
        ]
    }/*,
    {
        title: 'What would you rather have for dinner?',
        options: [
            {id: 0, textAnswer: 'Squid Ink Spaghetti', joseph: 3, giorno: 1},
            {id: 1, textAnswer: 'Cigarettes and a Mojito', jotaro: 3},
            {id: 2, textAnswer: 'Caprese Salad', josuke: 3, giorno: 3},
            {id: 3, textAnswer: 'Hot Dog and Coca Cola', jolyne: 3, joseph: 1}
        ]
    },
    {
        title: 'What are your plans for the weekend?',
        options: [
            {id: 0, textAnswer: 'Look at yourself in the mirror for 8 straight hours', joseph: 3, giorno: 1},
            {id: 1, textAnswer: 'Go to a poker tournament', jotaro: 3, josuke: 1, joseph: 1},
            {id: 2, textAnswer: 'Wait eagerly until the hour of tea arrives', jonathan: 3},
            {id: 3, textAnswer: 'Befriend with an alien', josuke: 3, jolyne: 3}
        ]
    }*/
];

export default questions;