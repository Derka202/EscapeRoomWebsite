document.addEventListener("DOMContentLoaded", () => {

    const roomContainer = document.getElementById('room-container');


    function createRoomCard(title, description, imageURL, pageURL) {
        const roomCard = document.createElement('div');
        roomCard.classList.add('room-card');

        const link = document.createElement('a');
        link.href = pageURL;
        roomCard.appendChild(link);
                
        const roomImage = document.createElement('img');
        roomImage.src = imageURL;
        roomImage.alt = title + ' image';
        link.appendChild(roomImage);

        const roomTitle = document.createElement('h3');
        roomTitle.textContent = title;
        link.appendChild(roomTitle);

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('card-description');
        link.appendChild(descriptionElement);

        const room_description = document.createElement('p');
        room_description.textContent = description;
        descriptionElement.appendChild(room_description);

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