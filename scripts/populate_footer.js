function load_footer_data() {
    fetch('../data/site_info.json')
        .then(response => response.json())
        .then(data => {
            const footer = data.find(d => d.data === "footer_info")
            if (!footer) {
                console.error("Room not found:", name);
                return;
            }
        
            const date = footer.edit_date;
            const creator = footer.creator;
            const dateContainer = document.getElementById('edit_date');
            const creatorContainer = document.getElementById('creator');
            dateContainer.textContent = `Updated on ${date}`;
            creatorContainer.textContent = `Website created by ${creator}`;
        }
    );
}

document.addEventListener('DOMContentLoaded', () => {
    load_footer_data();
}); 