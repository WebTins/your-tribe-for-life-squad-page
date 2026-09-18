# Squadpage CoffeeTime

[Live Website](https://coffee-time-s13.netlify.app/)

In this project we had to create a squadpage of the 2nd year students and teachers of our squad in SvelteKit. This is our first project working with a framework where we have learned a lot of new things with SvelteKit where we use HTML, CSS and JS. 

The point of this project is to see an overview of all the students and teachers where you are able to see the details of a person on another page.

**Team of Developers**

- [Tin](https://github.com/WebTins)
- [Isaac](https://github.com/IsaacEswa)
- [Jasin](https://github.com/JasinAhmed)

## Table of Contents

1. [Description](https://github.com/WebTins/your-tribe-for-life-squad-page/blob/main/README.md#description)
2. [Design](https://github.com/WebTins/your-tribe-for-life-squad-page/blob/main/README.md#design)
3. [Mockups](https://github.com/WebTins/your-tribe-for-life-squad-page/blob/main/README.md#website-mockups)
4. [Usage of the website](https://github.com/WebTins/your-tribe-for-life-squad-page/blob/main/README.md#usage-of-the-website)
5. [Features](https://github.com/WebTins/your-tribe-for-life-squad-page/blob/main/README.md#features)
6. [Installation](https://github.com/WebTins/your-tribe-for-life-squad-page/blob/main/README.md#installation)

## Description

In this project we design and build an overview of our tribe on the basis of headless CMS and framework. The framework that is used in this project is [SvelteKit](https://svelte.dev/docs/kit/introduction) where we use [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to build the project. The data we use comes from [Directus](https://directus.com/). 

During this project we have setup arrangements with the team and also code conventions that we have to follow. To read our arrangements and code conventions please read our [Contributing file](https://github.com/WebTins/your-tribe-for-life-squad-page/blob/main/CONTRIBUTING.md).

## Design

[Figma designs](https://www.figma.com/design/zsrLhtyXdZ4oehOyeBvTDR/CoffeeTime?node-id=21-2&t=NQxHHL6orzvz0Y06-1)

To start with this project we had to analyse and do our research with the design by looking at other designs on Pinterest as an inspiration to pick an official design. All 3 of us have picked a few design and compared it with each other. To pick an offical design we've voted for the best inspiration out of all the designs we've seen from Pinterest.

Tin's picks: 

<img width="440" height="316" alt="image" src="https://github.com/user-attachments/assets/d17e7a58-615a-4a80-aad1-4b0665fd9de0" />

Isaac's picks:

<img width="671" height="356" alt="image" src="https://github.com/user-attachments/assets/8e66ac84-e4cd-478c-8d14-bebe7b71baaf" />

Jasin's picks:

<img width="687" height="195" alt="image" src="https://github.com/user-attachments/assets/34ef700d-fde9-460d-9ce1-70926f633b96" />

After looking for inspiration we've voted for the best design and eventually we picked Isaac's picks.

---

**Final Design**

<img width="686" height="362" alt="image" src="https://github.com/user-attachments/assets/657ba561-bf0f-4093-a47d-4c69b7328f83" />

---

**Design in Figma Overview page**

<img width="670" height="332" alt="image" src="https://github.com/user-attachments/assets/7f985a52-eb4f-4988-bd3c-314985c16685" />

---

**Design in Figma Detail page**

<img width="730" height="267" alt="image" src="https://github.com/user-attachments/assets/60ebf258-9160-405b-badd-4e0a47d2fb5d" />

## Website Mockups

### Overview Page

<img width="854" height="384" alt="mockup-all-framed" src="https://github.com/user-attachments/assets/2a7518b2-c738-4cf8-8166-00e9b08d3ae9" />


### Detail Page

<img width="854" height="384" alt="mockup-all-framed (1)" src="https://github.com/user-attachments/assets/0a43595c-e36f-4641-b42c-b71fca83120f" />

### Error Page

<img width="850" height="275" alt="image" src="https://github.com/user-attachments/assets/164fa43f-691a-4a07-82f2-6cddee67fa46" />


## Usage of the Website

### Overview Page

On the overview page, visitors can view all students and teachers in the squad. The page shows the profile of each person in a clear overview. Visitors can click on a person to view more information.

<img width="1901" height="866" alt="Overview page showing all students and teachers" src="https://github.com/user-attachments/assets/a6e15656-0b57-46f8-9055-760d0af2beba" />

### Detail Page

After selecting a person, the visitor is taken to their detail page. This page shows more information about the selected person, such as their name, profile picture, hobbies and other personal details.

<img width="1915" height="852" alt="Detail page showing information about the selected person" src="https://github.com/user-attachments/assets/21f5e756-c73a-4cda-9e68-43814d56ea38" />

### Error Page

If a visitor opens a page that does not exist or uses an incorrect URL, a custom error page is shown. The error page explains that the requested page could not be found and gives the visitor an option to return to the homepage.

<img width="1916" height="861" alt="Custom error page" src="https://github.com/user-attachments/assets/ea0ae60d-39d0-4fa2-a493-55ba9cbca74f" />

---

## Features

This project is built with SvelteKit, HTML, CSS and Javascript

### view-transitions

On the website I added view transitions to the Name, image and the countdown clock because those 3 things are on the overview page and detail page. So whenever a user lands on the detail page (or back home). The 3 elements will transition to the other page which can give the user a pleasurable feeling.

https://github.com/user-attachments/assets/bd887149-82de-481a-9657-4080d2acfa2d

```html
<CountdownClock isOverview={true} transitionName="countdown-clock" />

<div class="person-information">
  <h2 style="view-transition-name: name-{person.id};">{person.name}</h2>
  <p>{person.residency}</p>
</div>

 <img
    class="masked-image"
    src="https://fdnd.directus.app/assets/{person.mugshot_year2}?height=700&quality=80"
    width={person.mugshot_year2.width}
    height={person.mugshot_year2.height}
    alt="Afbeelding van {person.name}"
    style="view-transition-name: transfer-{person.id};"
  />
```

```html
<style>
  @media (prefers-reduced-motion: no-preference) {
    :root {
      view-transition-name: none;
    }
  }
</style>
```

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Installation

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.17.0 create --template minimal --no-types --install npm ./
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


## Sources

- Svelte `$state`  
  https://svelte.dev/docs/svelte/$state

- Svelte `$lib`
  https://svelte.dev/docs/kit/$lib

- Svelte `onMount`  
  https://svelte.dev/docs/svelte/lifecycle-hooks

- MDN Date  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- MDN Date.setHours()  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours

- MDN Date.setDate()  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate

- MDN Math.floor()  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

- MDN Remainder operator  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

- MDN setInterval()  
  https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval

- MDN clearInterval()  
  https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval

- MDN String.padStart()  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

- MDN CSS position  
  https://developer.mozilla.org/en-US/docs/Web/CSS/position

- MDN justify-content  
  https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content

- MDN clip-path  
  https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

- SvelteKit view-transitions
  https://svelte.dev/blog/view-transitions

