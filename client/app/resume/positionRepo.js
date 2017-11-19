(function () {
    'use strict';

    angular
        .module('app')
        .factory('positionRepo', positionRepo);

    function positionRepo() {
        var positionRepo = {
            list: []
        };

        positionRepo.list = [
            {
                logo: 'public/img/bvh.png',
                company: 'Berryville Holdings, LLC',
                location: 'Herndon, VA',
                title: 'Software Engineer',
                startDate: '2016-02-01T05:00:00.000Z',
                endDate: '2017-11-01T05:00:00.000Z',
                responsibilities: [
                    'Confer with management and development teams to prioritize needs, resolve conflicts, develop content criteria, and provide solutions.',
                    'Responsible for the design and development of three products using Angular, NGRX and Material while working remotely and managing my time effectively.',
                    'Lead initiative to use reactive programming leveraging RxJs to help with overhead in using constant interval polling while minimizing duplicate and stacking requests.',
                    'Create and delegate Jira tickets to frontend team to ensure tasks are being completed by developers in a timely manner recognizing each developers strengths and weaknesses.',
                    'Train backend team to understand basic web and project specific concepts such as SCSS, HTML, Javascript, Angular, Angular CLI and NPM.',
                    'Use github to review all code submitted to project, providing feedback for more maintainable solutions while avoiding common pitfalls.'
                ]
            },
            {
                logo: 'public/img/acatar.png',
                company: 'Acatar',
                location: 'Pittsburgh, PA',
                title: 'Software Engineer',
                startDate: '2015-01-01T05:00:00.000Z',
                endDate: '2016-01-01T05:00:00.000Z',
                responsibilities: [
                    'Help other developers keep up to date with best practices and provide resources to continue education for modern development.',
                    'Assisted in architecting development stack using LESS, Knockout.js, Sammy.js and a custom dependency injection library using vanilla javascript.',
                    'Work closely with design team and provide valuable feedback for direction of the project.'
                ]
            },
            {
                logo: 'public/img/brandingbrand.png',
                company: 'Branding Brand',
                location: 'Pittsburgh, PA',
                title: 'Software Engineer',
                startDate: '2013-11-01T05:00:00.000Z',
                endDate: '2014-08-01T05:00:00.000Z',
                responsibilities: [
                    'Evaluate code to ensure that it is valid, is properly structured, meets industry standards and is compatible with browsers, devices, or operating systems.',
                    'Maintain understanding of current web technologies or programming practices through continuing education, reading, or participation in professional conferences, workshops, or groups.',
                    'Support and debug node.js/express mobile web applications across multiple teams of developers while using similar practices used in project.'
                ]
            },
            {
                logo: 'public/img/ppg.png',
                company: 'PPG Industries',
                location: 'Pittsburgh, PA',
                title: 'Frontend Developer',
                startDate: '2012-08-01T05:00:00.000Z',
                endDate: '2013-11-01T05:00:00.000Z',
                responsibilities: [
                    'Write supporting code for web applications or web sites.',
                    'Analyze user needs to determine technical requirements.',
                    'Meet with marketing to define project requirements and specifications to deliver content and designs in a timely manner.'
                ]
            },
            {
                logo: 'public/img/kolano.png',
                company: 'Kolano Design',
                location: 'Pittsburgh, PA',
                title: 'Graphic Designer',
                startDate: '2011-08-01T05:00:00.000Z',
                endDate: '2012-08-01T05:00:00.000Z',
                responsibilities: [
                    'Create designs, concepts, and sample layouts based on knowledge of layout principles and esthetic design concepts.',
                    'Develop graphics and layouts for product illustrations, company logos, and Internet websites.'
                ]
            }
        ];

        return positionRepo;
    }

})();