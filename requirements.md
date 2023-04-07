# Software Requirements

This application will help users find fun parks recommendations that they can go to based on their interests and activities they want to partake in.

This application will hope to make the process of finding fun destinations for you and your friends and family more simple and convineient.

You shoud care because this website would save people time on looking and allow them to spend their time where it really matters.

## Scope

### In

* This website will let users to select, from a list of activities, the ones that they're interested in.

* It will then display a list of national parks that host this actvity for the user to see.

* If the user clicks on a speciffic park, the website will then send them to a page that contains information about the park and and video or pictues the park may have associated to it.

* The user will be able to write comments about a park they like and save those comments for future use.

### Out

* This website will not give directions to any National Park, just the address.

* This website will only be designed for web browsers on PC.

## Minimum Viable Product

The MVP would be a basic website that allows the user to chose at least five activities and gives the basic information about the park.

## Functional Requirements

### Functionality

1. The user will create a profile in our website using Auth0

2. The user will chose whichever park they want to visit and write a comment on it.

3. The user will get information on the park.

## Data Flow

1. When the user clicks on a acivity, the keyword relating to that activity is added to the search query to the url that links to the backend.

2. The backend connects to the API using the clicked items as queries in the API search.

3. The frontend will take the selected data from the API filtered through the backend and prints it on the page.

## Non-Functional Requirements

The website will need readable text font and color. It wii need a lighthouse score of at least 80. It's important that a website looks profesional because if a functional website has no css customers and employers might take away points.
