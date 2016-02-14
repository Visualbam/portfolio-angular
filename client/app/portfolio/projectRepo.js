(function () {

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
                description: 'A detail shot for go bucket, this is more of a wireframe for how the sign up form should be displayed.'
            },
            // {
            //     title: 'Go Bucket Landing Page',
            //     alt: 'Go bucket navigation and call to action header',
            //     image: 'public/img/portfolio/gobucket_header.png',
            //     description: ''
            // },
            {
                title: 'Lucky Fun Colors Controls',
                alt: 'Lucky fun colors card game controls and footer',
                image: 'public/img/portfolio/lfc_bottom.png',
                description: 'Lucky fun colors is a card game using bitcoin as a currency. The idea was to make the controls as prominenant as possible to really put emphasis on continueing to place bets.'
            },
            {
                title: 'Lucky Fun Colors',
                alt: 'Lucky fun colors card game details and payment options',
                image: 'public/img/portfolio/lfc_detail.png',
                description: 'Tabbed content to display how to load your bitcoin wallet for the completely anonymous url for the game.'
            },
            {
                title: 'Machovy Blog Post',
                alt: 'Machovy blog post detail section',
                image: 'public/img/portfolio/machovy_blog_detail.png',
                description: 'A blog post page for machovy. I wanted the post image to really stand out.'
            },
            // {
            //     title: 'Machovy Blog Recommended Products',
            //     alt: 'Machovy blog recommended products',
            //     image: 'public/img/portfolio/machovy_blog_recent.png',
            //     description: ''
            // },
            {
                title: 'Machovy Product Detail Concept',
                alt: 'Machovy product detail page with price and details',
                image: 'public/img/portfolio/machovy_detail.png',
                description: 'This was one of the earlier concepts for Machovys product detail page.'
            },
            {
                title: 'Machovy Navigation',
                alt: 'Machovy landing page navigation and header',
                image: 'public/img/portfolio/machovy_header.png',
                description: 'Refreshing the navigation for Machovy was a really fun project, I also added the tags to the nav for ease of use.'
            },
            {
                title: 'Machovy Product List',
                alt: 'Machovy product list',
                image: 'public/img/portfolio/machovy_items.png',
                description: 'I used a varied grid for Machovys product list. The idea was to sell different size spots for vendor products.'
            },
            {
                title: 'Marianna Canoe Race Web Banner',
                alt: 'Marianna canoe race web banner',
                image: 'public/img/portfolio/marianna_welcome.png',
                description: 'Although this wasnt used, this was a logo concept for the Marianna Canoe Race.'
            },
            {
                title: 'Open Book Pittsburgh contract list',
                alt: 'List of city contracts',
                image: 'public/img/portfolio/ob_list.png',
                description: 'Organizing the contributers in the Open Book Pittsburgh search was really fun. I strayed away from the traditional table layout.'
            },
            {
                title: 'Open Book Pittsburgh contract search and filter',
                alt: 'Concept for open book pittsburgh contract search and filter',
                image: 'public/img/portfolio/ob_search.png',
                description: 'I wanted to have a Kyak feel for the Open Book Pittsburgh contract search page instead of just displaying them in a table.'
            },
            {
                title: 'PPG Industries Career Portal Details',
                alt: 'PPG Industries career portal deatil page',
                image: 'public/img/portfolio/ppg_career_detail.png',
                description: 'A career portal detail page. I really liked having the summary being so prominent on the page.'
            },
            {
                title: 'PPG Industries Career Portal List',
                alt: 'PPG Industries career portal search list',
                image: 'public/img/portfolio/ppg_career_list.png',
                description: 'This was a unique way to display the career list. You could based off of the position type.'
            },
            {
                title: 'Color Chaser Friends List',
                alt: 'PPG Industries Color Chaser friends list',
                image: 'public/img/portfolio/ppg_cc_friendslist.png',
                description: 'Friends list concept for the Color Chaser App.'
            },
            {
                title: 'PPG Industries Color Chaser Modal',
                alt: 'PPG Industries Color Chaser modal',
                image: 'public/img/portfolio/ppg_cc_modal.png',
                description: 'Modal concept for the Color Chaser App.'
            },
            {
                title: 'Voice of Color Newsletter Email',
                alt: 'Voice of Color newsletter email',
                image: 'public/img/portfolio/ppg_newsletter.png',
                description: 'Newsletter for The Voice of Color, this wasnt used but it was really fun coming up with the color scheme. The social icons could have been less bold though.'
            },
            // {
            //     title: 'Olympic Paint and Stains password reset email',
            //     alt: 'Olympic Paint and Stains password reset email',
            //     image: 'public/img/portfolio/ppg_olympic_email.png',
            //     description: ''
            // },
            {
                title: 'Voice of Color Home Page',
                alt: 'Voice of color home page design and slider',
                image: 'public/img/portfolio/ppg_voc_homepage.png',
                description: 'One of many layouts for The Voice of Color home page. This wasnt used in producntion as is but coming up with how the slider should work was an experience.'
            },
            {
                title: 'PTI Belly Buster Poster',
                alt: 'PTI Belly Buster Poster',
                image: 'public/img/portfolio/pti_bellybuster.png',
                description: 'Belly buster poster for PTI student events. The font treatment was done to represent being filled. I kept the yellow color from the mustard for repetition.'
            },
            {
                title: 'PTI 2011 Calendar Header',
                alt: 'PTI 2011 Calendar header',
                image: 'public/img/portfolio/pti_calendar.png',
                description: 'One of my first projects when I was a Visual Communications Assistant. This calendar was a great project to show off my photoshop skill.'
            },
            {
                title: 'PTI Carnival Poster',
                alt: 'PTI Carnival poster design',
                image: 'public/img/portfolio/pti_carnival.png',
                description: 'The PTI Carnival is one of my favorite student activities and I wanted to give it the feel of a traditional carnival.'
            },
            {
                title: 'PTI Community Day Sign',
                alt: 'PTI Community Day Sign',
                image: 'public/img/portfolio/pti_community.png',
                description: 'Very basic layout that uses a simple typography treatment.'
            },
            {
                title: 'PTI ESOP Invitation',
                alt: 'PTI ESOP Invitation',
                image: 'public/img/portfolio/pti_esop.png',
                description: 'ESOP invitation for faculty. It was Mardi-Gras themed so I carried it to the invite.'
            },
            {
                title: 'PTI Fall Festival Poster',
                alt: 'PTI Fall Festival Poster',
                image: 'public/img/portfolio/pti_fallfestival.png',
                description: 'The Fall Festival was hosted by the school library. The birds represent free knowledge.'
            },
            {
                title: 'PTI Head Start Sign',
                alt: 'PTI Head Start Sign',
                image: 'public/img/portfolio/pti_headstart.png',
                description: 'The goal for this display was to use remedial colors with a bunch of hero images of the children being treated.'
            },
            {
                title: 'PTI Humans VS Zombie Poster',
                alt: 'PTI Humans VS Zombie Poster',
                image: 'public/img/portfolio/pti_hvz.png',
                description: 'Probably one of the best student activities at PTI, I wanted this poster to be special. I added a lot of custom illustration to the zombie with a retro movie theme and typography.'
            },
            {
                title: 'PTI New Years Poster',
                alt: 'PTI New Years Poster',
                image: 'public/img/portfolio/pti_newyears.png',
                description: 'I experimented a lot with the typography treatment in this poster using a lot of insets and borders.'
            },
            {
                title: 'PTI Outstanding Students Sign',
                alt: 'PTI Outstanding Students Sign',
                image: 'public/img/portfolio/pti_os.png',
                description: 'Outstanding students were celebrated each quarter. I wanted to represent the growth of the students using a large tree with very clean and legible text.'
            },
            {
                title: 'PTI Rocky Horror Picture Show Poster',
                alt: 'PTI Rocky Horror Picture Show Poster',
                image: 'public/img/portfolio/pti_rvhps.png',
                description: 'My very first poster which was completely drawn from scratch using a wacom tablet.'
            },
            {
                title: 'PTI Saint Patricks Day Poster',
                alt: 'PTI Saint Patricks Day Poster',
                image: 'public/img/portfolio/pti_stpatrick.png',
                description: 'I think this needs a few more four leaf clovers.'
            },
            {
                title: 'PTI Summer Camp Display',
                alt: 'PTI Summer Camp Display',
                image: 'public/img/portfolio/pti_summercamp.png',
                description: 'Probably my favorite display to date, from the typography to using my Sony camera technical illustration to represent the media class.'
            },
            {
                title: 'PTI Welcome Students Display',
                alt: 'PTI Welcome Students Display',
                image: 'public/img/portfolio/pti_welcome.png',
                description: 'Although cliche, using the torn green board was very effective.'
            }
        ];

        return projectRepo;
    }

})();