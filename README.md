# BlogProject
Blog website to stay up to date with the last stories from mountain trips.

# Steps to run the project:
```
 1. Copy the repo link local
 2. Open the project in Visual Studio Code
 3. From menu bar -> Terminal -> NewTerminal
 4. cd server-blog-project
 5. npm install - this will install all dependencies and packages
 6. npm start - this will start the server which will run on localhost:5000
 7. Open another terminal from menu bar
 8. cd client-blog-roject
 9. npm install - this will install all dependencies and packages
10. npm start - this will start the client which will run on localhost:3000
```
## Project arhitecture
The project is built on the server-client concept. 

> [!NOTE]
> The server side is built with Express/Node.js, which handles data storage and the application's logic, particularly the APIs. When the client makes a request, the corresponding API is called, and the data is fetched to the client side. To store the data I used JSON files.

> [!NOTE]
The client side is built with **React** library, organized on components, assets, pages, routing file and so on.
Also for a faster development it was used **Bootstrap** framework, more for the containers arrangaments. The routing part and component implementation was easy to do using some packages from **React**, like: _BrowserRouter_, _Routes_, _Route_.

Compared to **Angular**, I found easier to build my project with React, and the fact that JavaScript code could be implementd where is also the HTML part, but in an organized manner, made also easier to organize. The files _.jsx_ are in fact scripts, but to differentiate than other JavaScript files is added _'x'_.  


## Project structure
The blog website has more sections which can be accessed from navigation menu bar.

First page, called also _Home_ is a welcoming page. The slideshow of images is a _Carousel_ from Bootstrap.
![image](https://github.com/user-attachments/assets/f46d20aa-74f0-4bea-bf89-8919e6914542)

The next menu item, _Blog_, has two submenus. There are wrote the articles about different trips on mountains or at countryside. 
![image](https://github.com/user-attachments/assets/7fa3baf9-2fd2-4393-be98-d5a03413650d)
![image](https://github.com/user-attachments/assets/8e55e9f5-0297-421d-b359-fb8534e3c414)



_Articles_ section contains different stories from people. At first there is only the article's introduction, but if you press the button _Read More_ you'll be redirected to see the entire article. This behavior was made using _Link_ library, a progressively enhanced _<a href>_ wrapper to enable navigation. It is sent through this tag the article _id_ and opened in another page the entire text.
![image](https://github.com/user-attachments/assets/6e45bd14-e360-4a7d-b278-cba1044eb131)


_Newsletter_ page has a form for subscribtion but it doesn't have any API to send to the e-mail address. 
![image](https://github.com/user-attachments/assets/c5738d36-bb5a-47b9-b408-afc84b80877c)


Last page, _Your story_ is the heart of the website, anyone could send their story and some photos (max 3) and then their story to be published in _Articles_ section. Currently, it works to send the data, without photos, to the server.
![image](https://github.com/user-attachments/assets/5934b3af-2dfb-4904-809b-9b8d853921fb)
![image](https://github.com/user-attachments/assets/d218db60-0bd5-4c6a-ac52-2984da20b4ed)

The _Footer_ has also active links to my social media profiles and it is a separated component integrated in each page.

