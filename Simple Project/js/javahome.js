


window.onload = function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        
        // إظهار جميع العناصر بعد انتهاء التحميل
        document.querySelector('header').style.display = 'block';
        document.querySelector('nav').style.display = 'block';
        document.querySelector('aside').style.display = 'block';
        document.querySelector('main').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
        
        
        document.body.style.overflow = 'auto'; // إعادة تمكين التمرير
    }, 2000); 
};


function Menu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // إضافة أو إزالة الفئة "show" لإظهار العناصر
}
function showInfo(type) {
    const info = {
        novels: {
            text: "A novel is a lengthy fictional narrative that explores complex themes, characters, and plots. Typically written in prose, novels delve into the human experience, often reflecting societal issues, personal struggles, and emotional journeys. They can vary in genre, including romance, science fiction, fantasy, mystery, and historical fiction, allowing readers to immerse themselves in diverse worlds and perspectives. Novels have been a significant form of literature for centuries, influencing culture and thought across generations.",
           
        },
        Short_Stories: {
            text: "Brief fictional tales.",

        },
        Historical_fiction: {
            text: "Historical novels are a literary genre that combines fictional storytelling with historical events, settings, and figures. These novels aim to immerse readers in a specific time period, often blending real historical facts with imaginative characters and plots. Through rich descriptions and detailed narratives, historical novels provide insights into the culture, struggles, and experiences of people from the past, making history more accessible and engaging for readers.",
 
        },
        Self_help: {
            text: "Self-development is the ongoing process of improving oneself through various means, such as education, skill acquisition, and personal growth. It involves setting goals, reflecting on experiences, and taking actionable steps to enhance one’s abilities, mindset, and overall well-being. The journey of self-development empowers individuals to reach their full potential and lead more fulfilling lives.",
     
        },
        Science_and_technology: {
            text: "Technology is the application of scientific knowledge for practical purposes, particularly in industry. It encompasses a wide range of tools, machines, systems, and processes that enhance human capabilities and improve efficiency. Technology plays a crucial role in various fields, including communication, transportation, healthcare, and education, shaping the way we live and interact with the world.",
            
        },
        Science_fiction: {
            text: "Science fiction is a genre of speculative fiction that explores imaginative concepts often based on advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It allows writers and readers to explore the potential consequences of scientific advancements and societal changes, often reflecting contemporary issues and human experiences through futuristic or alternative settings.",
            
        }
    };
    const selectedBook = info[type];
    document.getElementById('bookInfo').innerHTML = `
        <p>${selectedBook.text}</p>
        
    `;
}

