(function() {
    var playersArr = [
        { name: 'Мануэль Нойер', birth: '27/03/1986', position: 'goalkeeper', number: 1, img: '../img/1.png' },
        { name: 'Том Штарке', birth: '18/03/1981', position: 'goalkeeper', number: 22, img: '../img/22.png' },
        { name: 'Матс Хуммельс', birth: '16/12/1988', position: 'defender', number: 5, img: '../img/5.png' },
        { name: 'Рафинья', birth: '07/09/1985', position: 'defender', number: 13, img: '../img/13.png' },
        { name: 'Жером Боатенг', birth: '03/09/1988', position: 'defender', number: 17, img: '../img/17.png' },
        { name: 'Хуан Бернат', birth: '01/03/1993', position: 'defender', number: 18, img: '../img/18.png' },
        { name: 'Филипп Лам', birth: '11/11/1983', position: 'defender', number: 21, img: '../img/21.png' },
        { name: 'Давид Алаба', birth: '24/06/1992', position: 'defender', number: 27, img: '../img/27.png' },
        { name: 'Хольгер Бадштубер', birth: '13/03/1989', position: 'defender', number: 28, img: '../img/28.png' },
        { name: 'Тьяго', birth: '11/04/1991', position: 'midfield', number: 6, img: '../img/6.png' },
        { name: 'Франк Рибери', birth: '07/04/1983', position: 'midfield', number: 7, img: '../img/7.png' },
        { name: 'Арьен Роббен', birth: '23/01/1984', position: 'midfield', number: 10, img: '../img/10.png' },
        { name: 'Хави Мартинес', birth: '14/09/1990', position: 'midfield', number: 8, img: '../img/8.png' },
        { name: 'Хаби Алонсо', birth: '25/11/1981', position: 'midfield', number: 14, img: '../img/14.png' },
        { name: 'Никлас Дорш', birth: '05/01/1998', position: 'midfield', number: 30, img: '../img/30.png' },
        { name: 'Роберт Левандовски', birth: '21/08/1988', position: 'forward', number: 9, img: '../img/9.png' },
        { name: 'Томас Мюллер', birth: '13/09/1989', position: 'forward', number: 25, img: '../img/25.png' },
        { name: 'Кингсли Коман', birth: '13/06/1996', position: 'forward', number: 29, img: '../img/29.png' },
        { name: 'Джулиан Грин', birth: '06/06/1995', position: 'forward', number: 37, img: '../img/37.png' }
    ];

    var teamModule = angular.module('teamModule', ['angular.filter']);

    teamModule.controller('TeamCtrl', function() {
        this.players = playersArr;

    });

    teamModule.controller('PositionCtrl', function(){
        this.position = 'all';

        this.setPosition = function(newPosition) {
            this.position = newPosition;
        };

        this.equalPosition = function(somePosition) {
            //if show all of players
            if(this.position === 'all') {
                return true;
            }
            return somePosition == this.position;
        };


    });
})();
