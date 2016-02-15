(function () {
    'use strict';

    angular
        .module('app')
        .factory('projectRepo', projectRepo);

    function projectRepo() {
        var projectRepo = {
            list: []
        };

        projectRepo.list = [
            {
                title: 'Go Bucket',
                alt: 'Go bucket detail shot with sign up form',
                image: 'public/img/portfolio/gobucket_detail.png',
                description: 'A detail shot for go bucket, this is more of a wireframe for how the sign up form should be displayed.',
                tags: []
            },
            {
                title: 'Lucky Fun Colors Controls',
                alt: 'Lucky fun colors card game controls and footer',
                image: 'public/img/portfolio/lfc_bottom.png',
                description: 'Lucky fun colors is a card game using bitcoin as a currency. The idea was to make the controls as prominent as possible to really put emphasis on continuing to place bets.',
                tags: []
            },
            {
                title: 'Creative Robot',
                alt: 'Creative robot logo',
                image: 'public/img/portfolio/creative_logo.png',
                description: 'A logo done for a friend. It was fun drawing expressional eyes for the robot.',
                tags: ['logo']
            },
            {
                title: 'Lucky Fun Colors',
                alt: 'Lucky fun colors card game details and payment options',
                image: 'public/img/portfolio/lfc_detail.png',
                description: 'Tabbed content to display how to load your bitcoin wallet for the completely anonymous url for the game.',
                tags: []
            },
            {
                title: 'Machovy Blog Post',
                alt: 'Machovy blog post detail section',
                image: 'public/img/portfolio/machovy_blog_detail.png',
                description: 'A blog post page for machovy. I wanted the post image to really stand out.',
                tags: []
            },
            {
                title: 'Flatship Logo',
                alt: 'Flatship Logo',
                image: 'public/img/portfolio/flatship_logo.png',
                description: 'One of my first logo bid concepts!',
                tags: ['logo']
            },
            {
                title: 'Machovy Product Detail Concept',
                alt: 'Machovy product detail page with price and details',
                image: 'public/img/portfolio/machovy_detail.png',
                description: 'This was one of the earlier concepts for Machovys product detail page.',
                tags: []
            },
            {
                title: 'Machovy Navigation',
                alt: 'Machovy landing page navigation and header',
                image: 'public/img/portfolio/machovy_header.png',
                description: 'Refreshing the navigation for Machovy was a really fun project, I also added the tags to the nav for ease of use.',
                tags: []
            },
            {
                title: 'Machovy Product List',
                alt: 'Machovy product list',
                image: 'public/img/portfolio/machovy_items.png',
                description: 'I used a varied grid for Machovys product list. The idea was to sell different size spots for vendor products.',
                tags: []
            },
            {
                title: 'Marianna Canoe Race Web Banner',
                alt: 'Marianna canoe race web banner',
                image: 'public/img/portfolio/marianna_welcome.png',
                description: 'Although this wasnt used, this was a logo concept for the Marianna Canoe Race.',
                tags: []
            },
            {
                title: 'Open Book Pittsburgh contract list',
                alt: 'List of city contracts',
                image: 'public/img/portfolio/ob_list.png',
                description: 'Organizing the contributors in the Open Book Pittsburgh search was really fun. I strayed away from the traditional table layout.',
                tags: []
            },
            {
                title: 'Pixelspot Logo',
                alt: 'Pixelspot Logo',
                image: 'public/img/portfolio/pixelspot_logo.png',
                description: 'The idea was to show the creative process of designing logos which was the core concept of the group.',
                tags: ['logo']
            },
            {
                title: 'Open Book Pittsburgh contract search and filter',
                alt: 'Concept for open book pittsburgh contract search and filter',
                image: 'public/img/portfolio/ob_search.png',
                description: 'I wanted to have a Kyak feel for the Open Book Pittsburgh contract search page instead of just displaying them in a table.',
                tags: []
            },
            {
                title: 'PPG Industries Career Portal Details',
                alt: 'PPG Industries career portal detail page',
                image: 'public/img/portfolio/ppg_career_detail.png',
                description: 'A career portal detail page. I really liked having the summary being so prominent on the page.',
                tags: []
            },
            {
                title: 'Pots for Paws Logo',
                alt: 'Pots for Paws logo',
                image: 'public/img/portfolio/pots_for_paws_logo.png',
                description: 'Pots for Paws is a local Pittsburgh non profit to where funds made from the pots were donated to an animal charity.',
                tags: ['logo']
            },
            {
                title: 'PPG Industries Career Portal List',
                alt: 'PPG Industries career portal search list',
                image: 'public/img/portfolio/ppg_career_list.png',
                description: 'This was a unique way to display the career list. You could based off of the position type.',
                tags: []
            },
            {
                title: 'Color Chaser Friends List',
                alt: 'PPG Industries Color Chaser friends list',
                image: 'public/img/portfolio/ppg_cc_friendslist.png',
                description: 'Friends list concept for the Color Chaser App.',
                tags: []
            },
            {
                title: 'PPG Industries Color Chaser Modal',
                alt: 'PPG Industries Color Chaser modal',
                image: 'public/img/portfolio/ppg_cc_modal.png',
                description: 'Modal concept for the Color Chaser App.',
                tags: []
            },
            {
                title: 'Voice of Color Newsletter Email',
                alt: 'Voice of Color newsletter email',
                image: 'public/img/portfolio/ppg_newsletter.png',
                description: 'Newsletter for The Voice of Color, this wasnt used but it was really fun coming up with the color scheme. The social icons could have been less bold though.',
                tags: []
            },
            {
                title: 'Panacea Pharmacy Logo',
                alt: 'Panacea Pharmacy Logo',
                image: 'public/img/portfolio/pp_logo.png',
                description: 'I created this logo for a client in Lebanon the country.',
                tags: ['logo']
            },
            {
                title: 'Voice of Color Home Page',
                alt: 'Voice of color home page design and slider',
                image: 'public/img/portfolio/ppg_voc_homepage.png',
                description: 'One of many layouts for The Voice of Color home page. This wasnt used in production as is but coming up with how the slider should work was an experience.',
                tags: []
            },
            {
                title: 'PTI Belly Buster Poster',
                alt: 'PTI Belly Buster Poster',
                image: 'public/img/portfolio/pti_bellybuster.png',
                description: 'Belly buster poster for PTI student events. The font treatment was done to represent being filled. I kept the yellow color from the mustard for repetition.',
                tags: []
            },
            {
                title: 'Prenulin Logo',
                alt: 'Prenulin Logo',
                image: 'public/img/portfolio/prenulin_logo.png',
                description: 'One of many.. many concepts.',
                tags: ['logo']
            },
            {
                title: 'PTI 2011 Calendar Header',
                alt: 'PTI 2011 Calendar header',
                image: 'public/img/portfolio/pti_calendar.png',
                description: 'One of my first projects when I was a Visual Communications Assistant. This calendar was a great project to show off my photoshop skill.',
                tags: []
            },
            {
                title: 'Viva Verde Logo',
                alt: 'Viva Verde Logo',
                image: 'public/img/portfolio/viva_logo.png',
                description: 'Logo concept.',
                tags: ['logo']
            },
            {
                title: 'PTI Carnival Poster',
                alt: 'PTI Carnival poster design',
                image: 'public/img/portfolio/pti_carnival.png',
                description: 'The PTI Carnival is one of my favorite student activities and I wanted to give it the feel of a traditional carnival.',
                tags: []
            },
            {
                title: 'PTI Community Day Sign',
                alt: 'PTI Community Day Sign',
                image: 'public/img/portfolio/pti_community.png',
                description: 'Very basic layout that uses a simple typography treatment.',
                tags: []
            },
            {
                title: 'Visualbam Logo',
                alt: 'Visualbam logo',
                image: 'public/img/portfolio/visualbam_old_logo.png',
                description: 'One of my older logo concepts.',
                tags: ['logo']
            },
            {
                title: 'PTI ESOP Invitation',
                alt: 'PTI ESOP Invitation',
                image: 'public/img/portfolio/pti_esop.png',
                description: 'ESOP invitation for faculty. It was Mardi-Gras themed so I carried it to the invite.',
                tags: []
            },
            {
                title: 'PTI Fall Festival Poster',
                alt: 'PTI Fall Festival Poster',
                image: 'public/img/portfolio/pti_fallfestival.png',
                description: 'The Fall Festival was hosted by the school library. The birds represent free knowledge.',
                tags: []
            },
            {
                title: 'Tap Logo',
                alt: 'Tap Logo',
                image: 'public/img/portfolio/tap2_logo.png',
                description: 'A concept for a personal project called TAP.',
                tags: ['logo']
            },
            {
                title: 'PTI Head Start Sign',
                alt: 'PTI Head Start Sign',
                image: 'public/img/portfolio/pti_headstart.png',
                description: 'The goal for this display was to use remedial colors with a bunch of hero images of the children being treated.',
                tags: []
            },
            {
                title: 'PTI Humans VS Zombie Poster',
                alt: 'PTI Humans VS Zombie Poster',
                image: 'public/img/portfolio/pti_hvz.png',
                description: 'Probably one of the best student activities at PTI, I wanted this poster to be special. I added a lot of custom illustration to the zombie with a retro movie theme and typography.',
                tags: []
            },
            {
                title: 'PTI New Years Poster',
                alt: 'PTI New Years Poster',
                image: 'public/img/portfolio/pti_newyears.png',
                description: 'I experimented a lot with the typography treatment in this poster using a lot of insets and borders.',
                tags: []
            },
            {
                title: 'PTI Outstanding Students Sign',
                alt: 'PTI Outstanding Students Sign',
                image: 'public/img/portfolio/pti_os.png',
                description: 'Outstanding students were celebrated each quarter. I wanted to represent the growth of the students using a large tree with very clean and legible text.',
                tags: []
            },
            {
                title: 'Tap Logo',
                alt: 'Tap Logo',
                image: 'public/img/portfolio/tap1_logo.png',
                description: 'A concept for a personal project called TAP.',
                tags: ['logo']
            },
            {
                title: 'PTI Rocky Horror Picture Show Poster',
                alt: 'PTI Rocky Horror Picture Show Poster',
                image: 'public/img/portfolio/pti_rvhps.png',
                description: 'My very first poster which was completely drawn from scratch using a wacom tablet.',
                tags: []
            },
            {
                title: 'PTI Saint Patricks Day Poster',
                alt: 'PTI Saint Patricks Day Poster',
                image: 'public/img/portfolio/pti_stpatrick.png',
                description: 'I think this needs a few more four leaf clovers.',
                tags: []
            },
            {
                title: 'Scrum and Coke Logo',
                alt: 'Scrum and Coke Logo',
                image: 'public/img/portfolio/scrum_logo.png',
                description: 'Scrum and coke was the name of my scrum team at Branding Brand. We had shirts made as well.',
                tags: ['logo']
            },
            {
                title: 'PTI Summer Camp Display',
                alt: 'PTI Summer Camp Display',
                image: 'public/img/portfolio/pti_summercamp.png',
                description: 'Probably my favorite display to date, from the typography to using my Sony camera technical illustration to represent the media class.',
                tags: []
            },
            {
                title: 'PTI Welcome Students Display',
                alt: 'PTI Welcome Students Display',
                image: 'public/img/portfolio/pti_welcome.png',
                description: 'Although cliche, using the torn green board was very effective.',
                tags: []
            },
            {
                title: 'Reward Recognition Logo',
                alt: 'Reward Recognition Logo',
                image: 'public/img/portfolio/reward_logo.png',
                description: 'An internal logo done while I was at PPG. It was used for a rewards program for employees',
                tags: ['logo']
            }
        ];

        return projectRepo;
    }

})();