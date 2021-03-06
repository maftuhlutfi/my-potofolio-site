const projectData = [
    {
        title: 'Absensi Bimbel Cakra Yudha',
        slug: 'absensi-bimbel-cakra-yudha',
        image: 'absensi-bimbel.jpg',
        description: `A web app to record student attendance by admin. Student’s parent can see the attendance data by choose their child.`,
        case_study: `Cakra Yudha is a youth organizaton in Temanggung, Central Java. They  held a program to help with the education of children from elementary school to junior high school. With quite a lot of students, attendance record is needed. Currently, they record attendance data on paper. The paper is photographed and sent to the parents of the students so that they know the presence of their child. It is not effective. From these problems, they asked to make an application to record attendance. The application is expected to make admin and parents able to view and process attendance data more easily`,
        solution: `After discussing their needs. I decided to make a progressive web application so that it can be opened easily via the homepage. The application design is made as simple as possible so that admins and parents are not confused. Because the application needs to be accessed online, the application is hosted on a free hosting service from Vercel. For database, google sheet is used with API they provide.`,
        tech: ['next-js', 'google-sheets', 'tailwind', 'vercel', 'github', 'figma'],
        link: {
            design: 'https://www.figma.com/file/tCO6eD55BEOUCTOVvgueuB/Absen-Bimbel-CY?node-id=0%3A1',
            website: 'https://absenbimbelcy.vercel.app/'
        }
    },
    {
        title: 'DeBut Website',
        slug: 'debut-website',
        image: 'debut-website.jpg',
        description: `This is a website project for FAITH INTERNATIONAL COMPETITION 2021. The purpose of the website is to educate someone with fun quiz.`,
        case_study: `The theme of the web development competition in this competition is the COVID-19 pandemic. Participants must create a website that keeps users entertained so that they stay at home. The language and framework used are free but can be run offline on the jury's computer. The website must have at least 3 pages, namely landing page, about, and contact. Our team of three people named Men n Dem decided to create a quiz website. The quiz contains questions related to COVID-19 in a relaxed language. The quiz results will provide a different experience according to the correct number. Quiz results are made as funny as possible following the memes that are trending on the internet. Users can share their results and invite friends to participate then compare results.`,
        solution: 'In making a website that provides funny quizzes about covid, the colors used and illustrations must be fun. We are looking for illustrations and colors to match which are purple and cyan. After that, the application design is made with figma. The website has several pages, namely landing page, quiz list, about the team, login and register, quiz details, quiz work, and quiz results. Due to the tight time, we use sanity cms for content management.',
        tech: ['next-js', 'sanity', 'tailwind', 'figma'],
        link: {
            design: 'https://www.figma.com/file/B3glhs6tQ6b4EzSWPXXBoR/DeBut?node-id=181%3A80',
            website: 'https://debut.vercel.app/'
        }
    },
    {
        title: 'JoyOut Website',
        slug: 'joyout-website',
        image: 'joyout-app.jpg',
        description: `The JoyOut website is a project from Saudi Arabia via freelancer.com. I won the landing page design contest and they want me to develop it. Because my work is good for them, they want me to design and develop their main site.`,
        case_study: 'Joyout is already have their backend and API. They need to design the web application which is responsive and can be used on mobile well. There are several pages, namely discover, offer, restaurant details, favorites, and booking. The application must support two languages, namely English and Arabic. So later there will be two layouts.',
        solution: 'Development begins with designing the appearance of the application for mobile and desktop. I use figma to do this. After the design is accepted by the client, development continues by slicing from figma to next js. After all the pages have been sliced, the feature for the Arabic language begins to work. The library used is next-i18. After the language and layout can be switched from Arabic to English, the web application is connected to the backend via an available API.',
        tech: ['next-js', 'tailwind', 'figma'],
        link: {
            design: 'https://www.figma.com/file/P2VINUxx5GkkLqzl0K8UEE/JoyOut?node-id=33%3A115',
            website: 'https://joyout-app.vercel.app/'
        }
    },
    {
        title: 'MTs Negeri 9 Sleman Website',
        slug: 'mts-negeri-9-sleman-website',
        image: 'mts-website.jpg',
        description: `Website for junior high schools in Yogyakarta, Indonesia. The contents of the website are information about schools such as news, announcements, teacher lists, galleries, and so on.`,
        case_study: 'Currently, schools use websites from free wordpress to provide information about schools. The website design is too old and difficult to access because it is not responsive. This makes finding information about schools difficult. They need a new, up-to-date website so that school information can be accessed easily and conveniently.',
        solution: 'Schools already have their color palette which is green. After searching some school web references, the design was made with figma. After that, the development of cms with sanity is carried out according to the data in the design. After that, the frontend was developed with next js to meet the demands of SEO. The pages created are home/landing pages, news, announcements, galleries, alumni, PPDB.',
        tech: ['next-js', 'styled', 'sanity', 'figma', 'vercel'],
        link: {
            design: 'https://www.figma.com/file/F29CJDswiYVcZJh5ficuYl/MtsN-9-Sleman?node-id=1%3A3',
            website: 'https://www.mtsn9sleman.sch.id/'
        }
    },
    {
        title: 'Dolla Financial Website',
        slug: 'dolla-financial-website',
        image: 'dolla-web.jpg',
        description: `A website for financial company from Jamaica. This is my first web development project in my freelance career. I got this project by winning the contest in freelancer.com.`,
        case_study: 'This financial company already has a website, but the design is less professional and unattractive. They held a contest on Freelancer.com to find the design they wanted. I won that contest and was asked to build it too.',
        solution: `Existing websites are built with WordPress Elementor. Therefore, a new website must also be built with elementor. Since I've never used Elementor to build a website, I needed to adapt. There are some limitations such as not being able to use modal components because they have to be premium. This problem can be solved by creating your own modal via the available html components.`,
        tech: ['elementor', 'figma'],
        link: {
            design: '#',
            website: 'https://dollafinancial.com/'
        }
    },
]

export default projectData