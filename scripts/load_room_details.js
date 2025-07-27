function load_room (name) {
    fetch('../data/rooms.json')
        .then(response => response.json())
        .then(data => {
            const room = data.find(r => r.name === name);
            if (!room) {
                console.error("Room not found:", name);
                return;
            }

        const titleContainer = document.querySelector('.room-title-container');
        const title = document.createElement('h1');
        title.textContent = room.title;
        const titleDiv = document.createElement('div').appendChild(title);
        titleDiv.classList.add('title');
        titleContainer.appendChild(titleDiv);

        const image = document.createElement('img');
        image.classList.add('room-image');
        image.src = `img/${name}.png`;
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('room-image-container');
        imageDiv.appendChild(image);    
        titleContainer.appendChild(imageDiv);

        const desc = document.querySelector('.blurb');
        const blurb = document.createElement('p');
        ///TODO: split on \n to create paragraphs
        blurb.textContent = room.long_description;
        desc.appendChild(blurb);

        const infoContainer = document.querySelector('.room-details');
        const info = document.createElement('ul');
        const difficulty = document.createElement('li');
        const duration = document.createElement('li');
        const capacity = document.createElement('li');
        const age = document.createElement('li');
        difficulty.textContent = `Difficulty: ${room.difficulty}`;
        duration.textContent = `Duration: ${room.duration}`;
        capacity.textContent = `Capacity: ${room.capacity}`;
        age.textContent = `Recommended Age: ${room.age}`;
        info.appendChild(difficulty);
        info.appendChild(duration);
        info.appendChild(capacity);
        info.appendChild(age);
        infoContainer.appendChild(info);
        }
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    load_room(name);
});
