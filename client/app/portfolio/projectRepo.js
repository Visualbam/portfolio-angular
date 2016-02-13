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
                description: ''
            },
            {
                title: 'Go Bucket Landing Page',
                alt: 'Go bucket navigation and call to action header',
                image: 'public/img/portfolio/gobucket_header.png',
                description: ''
            },
            {
                title: 'Lucky Fun Colors Controls',
                alt: 'Lucky fun colors card game controls and footer',
                image: 'public/img/portfolio/lfc_bottom.png',
                description: ''
            },
            {
                title: 'Lucky Fun Colors',
                alt: 'Lucky fun colors card game details and payment options',
                image: 'public/img/portfolio/lfc_detail.png',
                description: ''
            },
            {
                title: 'Machovy Blog Post',
                alt: 'Machovy blog post detail section',
                image: 'public/img/portfolio/machovy_blog_detail.png',
                description: ''
            },
            {
                title: 'Machovy Blog Recommended Products',
                alt: 'Machovy blog recommended products',
                image: 'public/img/portfolio/machovy_blog_recent.png',
                description: ''
            },
            {
                title: 'Machovy Product Detail Concept',
                alt: 'Machovy product detail page with price and details',
                image: 'public/img/portfolio/machovy_detail.png',
                description: ''
            },
            {
                title: 'Machovy Navigation',
                alt: 'Machovy landing page navigation and header',
                image: 'public/img/portfolio/machovy_header.png',
                description: ''
            },
            {
                title: 'Machovy Product List',
                alt: 'Machovy product list',
                image: 'public/img/portfolio/machovy_items.png',
                description: ''
            },
            {
                title: 'Marianna Canoe Race Web Banner',
                alt: 'Marianna canoe race web banner',
                image: 'public/img/portfolio/marianna_welcome.png',
                description: ''
            },
            {
                title: 'Open Book Pittsburgh contract list',
                alt: 'List of city contracts',
                image: 'public/img/portfolio/ob_list.png',
                description: ''
            },
            {
                title: 'Open Book Pittsburgh contract search and filter',
                alt: 'Concept for open book pittsburgh contract search and filter',
                image: 'public/img/portfolio/ob_search.png',
                description: ''
            },
            {
                title: 'PPG Industries Career Portal Details',
                alt: 'PPG Industries career portal deatil page',
                image: 'public/img/portfolio/ppg_career_detail.png',
                description: ''
            },
            {
                title: 'PPG Industries Career Portal List',
                alt: 'PPG Industries career portal search list',
                image: 'public/img/portfolio/ppg_career_list.png',
                description: ''
            },
            {
                title: 'Color Chaser Friends List',
                alt: 'PPG Industries Color Chaser friends list',
                image: 'public/img/portfolio/ppg_cc_friendslist.png',
                description: ''
            },
            {
                title: 'PPG Industries Color Chaser Modal',
                alt: 'PPG Industries Color Chaser modal',
                image: 'public/img/portfolio/ppg_cc_modal.png',
                description: ''
            },
            {
                title: 'Voice of Color Newsletter Email',
                alt: 'Voice of Color newsletter email',
                image: 'public/img/portfolio/ppg_newsletter.png',
                description: ''
            },
            {
                title: 'Olympic Paint and Stains password reset email',
                alt: 'Olympic Paint and Stains password reset email',
                image: 'public/img/portfolio/ppg_olympic_email.png',
                description: ''
            },
            {
                title: 'Voice of Color Home Page',
                alt: 'Voice of color home page design and slider',
                image: 'public/img/portfolio/ppg_voc_homepage.png',
                description: ''
            },
            {
                title: 'PTI Belly Buster Poster',
                alt: 'PTI Belly Buster Poster',
                image: 'public/img/portfolio/pti_bellybuster.png',
                description: ''
            },
            {
                title: 'PTI 2011 Calendar Header',
                alt: 'PTI 2011 Calendar header',
                image: 'public/img/portfolio/pti_calendar.png',
                description: ''
            },
            {
                title: 'PTI Carnival Poster',
                alt: 'PTI Carnival poster design',
                image: 'public/img/portfolio/pti_carnival.png',
                description: ''
            },
            {
                title: 'PTI Community Day Sign',
                alt: 'PTI Community Day Sign',
                image: 'public/img/portfolio/pti_community.png',
                description: ''
            },
            {
                title: 'PTI ESOP Invitation',
                alt: 'PTI ESOP Invitation',
                image: 'public/img/portfolio/pti_esop.png',
                description: ''
            },
            {
                title: 'PTI Fall Festival Poster',
                alt: 'PTI Fall Festival Poster',
                image: 'public/img/portfolio/pti_fallfestival.png',
                description: ''
            },
            {
                title: 'PTI Head Start Sign',
                alt: 'PTI Head Start Sign',
                image: 'public/img/portfolio/pti_headstart.png',
                description: ''
            },
            {
                title: 'PTI Humans VS Zombie Poster',
                alt: 'PTI Humans VS Zombie Poster',
                image: 'public/img/portfolio/pti_hvz.png',
                description: ''
            },
            {
                title: 'PTI New Years Poster',
                alt: 'PTI New Years Poster',
                image: 'public/img/portfolio/pti_newyears.png',
                description: ''
            },
            {
                title: 'PTI Outstanding Students Sign',
                alt: 'PTI Outstanding Students Sign',
                image: 'public/img/portfolio/pti_os.png',
                description: ''
            },
            {
                title: 'PTI Rocky Horror Picture Show Poster',
                alt: 'PTI Rocky Horror Picture Show Poster',
                image: 'public/img/portfolio/pti_rvhps.png',
                description: ''
            },
            {
                title: 'PTI Saint Patricks Day Poster',
                alt: 'PTI Saint Patricks Day Poster',
                image: 'public/img/portfolio/pti_stpatrick.png',
                description: ''
            },
            {
                title: 'PTI Summer Camp Display',
                alt: 'PTI Summer Camp Display',
                image: 'public/img/portfolio/pti_summercamp.png',
                description: ''
            },
            {
                title: 'PTI Welcome Students Display',
                alt: 'PTI Welcome Students Display',
                image: 'public/img/portfolio/pti_welcome.png',
                description: ''
            }
        ];

        return projectRepo;
    }

})();