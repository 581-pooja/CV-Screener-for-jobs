// console.log("This is CV Screener Project");

const data = [
    {
        name : 'Pooja Bhagat',
        age : 20,
        city : 'Kolkata',
        languages : 'python',
        framework : 'Django',
        Image : 'https://randomuser.me/api/portraits/women/70.jpg'
    },

    {
        name : 'Siddharth Bhagat',
        age : 19,
        city : 'Mumbai',
        languages : 'python',
        framework : 'Django',
        Image : 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name : 'Aditya Bhagat',
        age : 13,
        city : 'Mumbai',
        languages : 'python',
        framework : 'Flask',
        Image : 'https://randomuser.me/api/portraits/men/35.jpg'
    },

    {
        name : 'Priyanka Bhagat',
        age : 20,
        city : 'Kolkata',
        languages : 'JavaScript',
        framework : 'React js',
        Image : 'https://randomuser.me/api/portraits/women/79.jpg'
    },


    {
        name : 'Preti Bhagat',
        age : 12,
        city : 'Mumbai',
        languages : 'Javascript',
        framework : 'Agular',
        Image : 'https://randomuser.me/api/portraits/women/67.jpg'
    },

    {
        name : 'Guddi',
        age : 22,
        city : 'Goa',
        languages : 'Javascript',
        framework : 'View',
        Image : 'https://randomuser.me/api/portraits/women/12.jpg'
    }
]


// CV Iterator
function cvIterator(profile){
    // it wil return a number i.e. candidate number
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < profile.length ? {value: profile[nextIndex++], done: false} : {done : true}
            // ternary operator : (condition) ? {done: false} : {done : true}
        }
    };
}

const candidates = cvIterator(data);

nextCV(); // calling the nextCV() to get first candidate as page is loaded

// Action listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
        // To show the image of the candidate
        image.innerHTML = `<img src= '${currentCandidate.Image}'>`;
        // To show the details of the candidate
        profile.innerHTML = `
        <ul class="list-group">
                <li class="list-group-item">Name: ${currentCandidate.name}</li>
                <li class="list-group-item">${currentCandidate.age} years old</li>
                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                <li class="list-group-item">Primarily works on ${currentCandidate.languages}</li>
                <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
            </ul>`;
    }
    else{
        alert('End of candidate applications.');
        window.location.reload(); // it will reload the page and start with first candidate
    }

}