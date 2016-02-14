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
                logo: 'public/img/acatar.png',
                company: 'Acatar',
                location: 'Pittsburgh, PA',
                title: 'Software Engineer',
                startDate: new Date('January 2015'),
                endDate: new Date('January 2016'),
                responsibilities: [
                    'Modify existing software to correct errors, allow it to adapt to new hardware, or to improve its performance.',
                    'Analyze user needs and software requirements to determine feasibility of design within time and cost constraints.'
                ]
            },
            {
                logo: 'public/img/brandingbrand.png',
                company: 'Branding Brand',
                location: 'Pittsburgh, PA',
                title: 'Software Engineer',
                startDate: new Date('November 2013'),
                endDate: new Date('Auguest 2014'),
                responsibilities: [
                    'Evaluate code to ensure that it is valid, is properly structured, meets industry standards and is compatible with browsers, devices, or operating systems.',
                    'Maintain understanding of current web technologies or programming practices through continuing education, reading, or participation in professional conferences, workshops, or groups.'
                ]
            },
            {
                logo: 'public/img/ppg.png',
                company: 'PPG Industries',
                location: 'Pittsburgh, PA',
                title: 'Frontend Developer',
                startDate: new Date('August 2012'),
                endDate: new Date('November 2013'),
                responsibilities: [
                    'Write supporting code for web applications or web sites.',
                    'Analyze user needs to determine technical requirements.'
                ]
            },
            {
                logo: 'public/img/kolano.png',
                company: 'Kolano Design',
                location: 'Pittsburgh, PA',
                title: 'Graphic Designer',
                startDate: new Date('August 2011'),
                endDate: new Date('August 2012'),
                responsibilities: [
                    'Create designs, concepts, and sample layouts based on knowledge of layout principles and esthetic design concepts.',
                    'Develop graphics and layouts for product illustrations, company logos, and Internet websites.'
                ]
            }
        ];

        return positionRepo;
    }

})();