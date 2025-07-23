document.addEventListener("DOMContentLoaded", () => {

    const roomContainer = document.getElementById('room-container');


    function createRoomCard(title, description, imageURL, pageURL) {
        const roomCard = document.createElement('div');
        roomCard.classList.add('room-card');

        const roomTitle = document.createElement('h3');
        roomTitle.textContent = title;
        roomCard.appendChild(roomTitle);

        const roomImage = document.createElement('img');
        roomImage.src = imageURL;
        roomImage.alt = title + ' image';
        roomCard.appendChild(roomImage);

        const room_description = document.createElement('p');
        room_description.textContent = description;
        roomCard.appendChild(room_description);

        const roomLink = document.createElement('a');
        roomLink.href = pageURL;
        roomLink.textContent = 'View Room';
        roomCard.appendChild(roomLink);

        return roomCard;
    }


    function loadRooms() {
        fetch('rooms.json')
            .then(response => response.json())
            .then(rooms  => {
                rooms.forEach(room => {
                    const card = createRoomCard(
                        room.title,
                        room.short_description,
                        room.imageURL,
                        room.pageURL
                    );
                    roomContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Error loading rooms:', error));
    }

    loadRooms();
});