(function () {
    'use strict';

    angular
        .module('app')
        .factory('detailRepo', detailRepo);

    function detailRepo() {
        var detailRepo = {
            list: []
        };

        detailRepo.list = [
            {
                title: 'Design',
                content: 'Understanding core design principles is key to expanding your capabilities. My degree is in design but I consider it a skillset in my developer toolbox.',
                image: './public/img/design.png'
            },
            {
                title: 'Development',
                content: 'Developing has become a passion of mine. I keep up with the latest frameworks and technologies to keep a professional advantage in my work.',
                image: './public/img/develop.png'
            },
            {
                title: 'UI/UX',
                content: 'I create engaging mobile, tablet and desktop experiences. User experience is an essential aspect of any website or application.',
                image: './public/img/userexp.png'
            },
            {
                title: 'Batman',
                content: 'Always be yourself, unless you can be Batman. Then always be Batman. I get some of my best work done in the night.',
                image: './public/img/batman.png'
            }
        ];

        return detailRepo;
    }

})();