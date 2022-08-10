let jonathan, joseph, jotaro, josuke, giorno, jolyne;
jonathan = joseph = jotaro = josuke = giorno = jolyne = 0;

const questions = [
    {
        title: 'Would you make a joke at a funeral?',
        options: [
            {textAnswer: 'Yes', joseph: 3, josuke: 1, jolyne: 1},
            {textAnswer: 'No', jonathan: 3, giorno: 3, jotaro: 1}
        ]
    },
    {
        title: 'Which is your favorite sport?',
        options: [
            {textAnswer: 'Football', giorno: 3, jonathan: 1},
            {textAnswer: 'Baseball', jolyne: 3, jotaro: 1, joseph: 1},
            {textAnswer: 'Rugby', jonathan: 3},
            {textAnswer: 'Videogames', josuke: 3, jotaro: 3}
        ]
    },
    {
        title: 'What would you rather have for dinner?',
        options: [
            {textAnswer: 'Squid Ink Spaghetti', joseph: 3, giorno: 1},
            {textAnswer: 'Cigarettes and a Mojito', jotaro: 3},
            {textAnswer: 'Caprese Salad', josuke: 3, giorno: 3},
            {textAnswer: 'Hot Dog and Coca Cola', jolyne: 3, joseph: 1}
        ]
    }
];

export default questions;