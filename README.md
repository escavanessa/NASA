# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
<h1>The Goal</h1>
Is it even necessary to say, who doesnt love space? I ran into NASA's open API and I needed to put some of this information in one place. Initially, I wanted to just create a dashboard but I wanted to challenge myself and create a mobile design before I attempted the dashboard. I have to say that this has been my most ambitious project yet. Not only was the UI/CSS completely up to me, but having to make all the API calls, map over the information i wanted based off the functionality of each tab, and then also figure out how im going to rerender the app for a larger screen/ make it responsive - has been quite the ride. The ultimate goal was to publish it to the app store BUT I didnt use React Native and im not sure if there is an easy way around the fact I used regular React/Vite. I want to add one other piece of functionality which is the ability to 'star' images that you like so you can easily come back to them.

<h1>The Process</h1>
I started with the API calls. I wanted to make sure I had the information I needed before I started building anything. I went one component at a time, moving to the next 'tab' once the previous was fully completed (once the jsx was completed, css is still up for reworking) Once I had all the tabs completed I hooked them up to React Router DOM. This was pretty straight forward although it has left me a little clueless to how im going to create a dashboard out of tabs that are housed in seperate routes? Regardless, I moved onto the landing page. I created some minimalistic designs using CSS. All that is left is to create the dashbaord format.

<h1>What I Learned</h1>
APIs!!!!! I learned so much about asynchronous functions. I learned a ton about promises too. I had never really put my knowledge of promises into practice until this project and wow, I didnt know much. I buffed up my CSS skills too and encountered some pretty weird solutions to mapping over data that comes through an asynchronous function like using the || operator to force React into waiting for the data to come through before it tries to map over images/ data.

<h1>What to Improve?</h1>
Definently the 'cleanliness' of the code. Each component has its own API call (this can be moved out into one folder since the calls are basically all the same -except for the endpoints i thnk- and imported into the components) I also made the mistake of copying and pasting some essential CSS without changing class names. WHat was the result of this? Having random divs break and not being able to find the css file that is overiding the styling im adding. 
