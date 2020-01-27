# `React`

## `Pure React`

Starting off at the most barebones you can even write React directly in the `index.html` file likeso

```html
// index.html file
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root">not rendered</div>
    <script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
    <script>
      // your code is going to go here, for now
      const App = () => {
        return React.createElement(
          "div",
          { id: "unique-div" },
          React.createElement("h1", {}, "Adopt Me!")
        );
      };
      ReactDOM.render(
        React.createElement(App),
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

Here we just load in `React` and `ReactDOM` via CDN to start but later it will directly be installed. Additionally we create a simple `h1` element with the text `Adopt Me!` and then with `ReactDOM` we render that React element to the our `root` div. The `createElement` will take 3 parameters

1. What kind of elemnt will this be? h1, div etc.
2. All the attributes that you want to give, so in our case an id would be `unique-div`
3. The children for that element, so the child of the `div` will be an `h1` and the child of that `h1` will be the text `Adopt me!`. This could even be an array to accept multiple children.

We can also extract

```js
const App = () => {
  return React.createElement(
    "div",
    { id: "unique-div" },
    React.createElement("h1", {}, "Adopt Me!")
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

into it's own `App.js` file and reference that js file in our `index.html` file and it still works just fine.
We can also create a simple `Pet` component still using `React.createElement()`

```js
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Stark"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Pomerian")
  ]);
};
```

and render that is our `App` component and pass `Pet`(we will make 3 pets) into the array for children

```js
const App = () => {
  return React.createElement("div", { id: "unique-div" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
};
```

Now our current version of `Pet` isn't so useful so we want to generalize it so we can pass in props to customize our component.

```js
const App = () => {
  return React.createElement("div", { id: "unique-div" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Stark",
      animal: "Dog",
      breed: "Pomerian"
    }),
    React.createElement(Pet, {
      name: "Suzie",
      animal: "Dog",
      breed: "shizu"
    }),
    React.createElement(Pet, {
      name: "Oskar",
      animal: "Cat",
      breed: "Cat breed"
    })
  ]);
};
```

so now we are passing in the `name`, `breed` and `animal` and will pass it in through `props` in react. Now we need to change our `Pet` component to read those props.

```js
// set props as a param for our component so we can read from those props
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};
```

We can also destructure our props to make this a bit more readable as props is still our parameter but we destructure to grab the pieces we want

```js
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};
```

Now instead of using the CDN for installing react we will install react locally and get rid of

```html
<script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
```

in our `index.html` file. Then we want to change our `App.js` file to directly import it.

```js
import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "unique-div" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Stark",
      animal: "Dog",
      breed: "Pomerian"
    }),
    React.createElement(Pet, { name: "Suzie", animal: "Dog", breed: "shizu" }),
    React.createElement(Pet, {
      name: "Oskar",
      animal: "Cat",
      breed: "Cat breed"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
```

One great part of `React` is being able to split our code into seperate files in new modules. So we are going to split our `Pet` into a seperate file that we will import. So our `Pet.js` file should now be

```js
import React from "react";

export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
}
```

and we delete that section from `App.js` and just import this import statement at the top

```js
import Pet from "./Pet";
```

## `JSX`

We are gonna switch to using `jsx` which is essentially markup so we don't have to use `React.createElement` and can just write regular html in our file so that our file can look much more readable. So our `Pet.js` file will become

```js
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
```

and our `App.js` will not become

```js
import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Stark" animal="Dog" breed="Pomerian" />
      <Pet name="Suzie" animal="Dog" breed="Shizu" />
      <Pet name="Oskar" animal="Cat" breed="Cat breed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
```

Take note that we call our `Pet` component like an html tag because it kinda does work like that! So we can invoke our component like `<Pet />` and can pass props via `name="Stark` and in our `Pet.js` file we can evaluate those javascript values with curly braces so we can use `{name}` in our `Pet.js` file.

- Note: `jsx` expects one wrapper element for everything return. So `div` is the single uppermost element returned. It is possible to return 2 uppermost elements with `React` then we can wrap everything in `<React.Fragement></React.Fragment>`

## `Hooks`

We will create a new component called `SearchParams.js` that will look like this

```js
import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    // class reserved in html
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
```

where here we use `className` to give the `div` a `class` and `htmlFor` to associate our label with the `input`. The reason we use `className` instead of `class` and `htmlFor` instead of `for` is those are reserved keywords in `html` so to get around that `react` has made it's own keywords that will compile to what they are in `html`. So `className` will become `class` and `htmlFor` will become `for`. Let's replace our `Pet` with that `SearchParamas` so our `App.js` return will now be

```js
<div>
  <h1>Adopt Me</h1>
  <SearchParams />
</div>
```

We do have an issue though if you try and type into the field you can't! The issue is on the `onChange` event triggered from your keystroke it rerenders `App` and therefore re-renders `SearchParams` where our `value` is our `location` which we have set to `Seattle, WA`. Here we can start using `hooks` and `useState` to set our location for the input where there is a keystroke. We change our `SearchParams` to now be

```js
import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
```

With the `useState` we set our default state of `Seattle, WA` and we have our `onChange` for the input call the `setLocation` function that we grab from `useState`. The line

```js
const [location, setLocation] = useState("Seattle, WA");
```

is what is known as a hook and all hooks will begin with a function of `use` in our case it is `useState`. These `hooks` are used to help us with our `stateful` components and help with updating them. A hook should never go in a conditional statement as the `hooks` order matters so if your order changes you will see failures in your logic. For example say you had

```js
if (someThing) {
  const [location, setLocation] = useState("Seattle, WA");
}
const [animal, setAnimal] = useState("dog");
```

on the first run your `location` hook and `animal` hook would be created so your first hook deals with `location` state and your second hook with `animal` state. If on a re-render `someThing` is false and only the `animal` hook runs then with the order on inital create the `animal` hook will incorrectly be mapped to the `location` state as that was already created and was the first created on the first render.

Now we want to render a list of animals so that the user can pick from a list of animals. First we will import the list of animals at the top

```js
// SearchParams.js
import { ANIMALS } from "@frontendmasters/pet";
```

then we want to use another `hook` for our animal

```js
// SearchParams.js
const [animal, setAnimal] = useState("dog");
```

Where animal is our current value in this case `dog` and `setAnimal` is the function we call when we want to set the value of our `animal` variable. Now we want to render our a `select` element that has options for our animals and in react we can do that using the javascript `map` function.

```js
// ANIMALS is the list of animals we imported
<label htmlFor="animal">
  Animal
  <select
    id="animal"
    value={animal}
    onChange={event => setAnimal(event.target.value)}
    onBlur={event => setAnimal(event.target.value)}
  >
    <option>All</option>
    {ANIMALS.map(animal => (
      <option value={animal} key={animal}>
        {animal}
      </option>
    ))}
  </select>
</label>
```

with the map function we can iterate through our `ANIMALS` list and map it to something else. In this instance we grab our `animal` from the list and map each one to a `option` value in our `select`. Also, in a list item `react` expects each item to have a unique `key` so that if there is a change of state say reordering the list then `react` can use the `keys` to re-render in an intelligent way to help with performance.

### `Custom Hook`

To create our own custom hook we will first create a new file called `useDropdown.js`. Before that let's say we also want a breed select so in our `SearchParams` we add

```js
const [breed, setBreed] = useState("");
const [breeds, setBreeds] = useState([]);
...
<label htmlFor="breed">
  Breed
  <select
    id="breed"
    value={breed}
    onChange={event => setBreed(event.target.value)}
    onBlur={event => setBreed(event.target.value)}
    disabled={breeds.length === 0}
  >
    <option>All</option>
    {breeds.map(breedString => {
      <option value={breedString} key={breedString}>
        {breedString}
      </option>;
    })}
  </select>
</label>
```

Now you may have noticed this looks very similar to our animals select and hook. Let's generalize it and create that hook in our `useDropdown.js` file, which should look like this

```js
import React, { useState } from "react";

// label - label for our select
// defaultState - initial value for our select
// options - list of options to put in the select
const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={event => setState(event.target.value)}
        onBlur={event => setState(event.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map(item => (
          <option value={item} key={item}>
            {item}
          </option>;
        ))}
      </select>
    </label>;
  );
  // return the current state, our dropdown element and our function to set the state.
  return [state, Dropdown, setState];
};

export default useDropdown;
```

Here we have generalized our `select` elements and can now use this dropdown that will serve the same purpose and keep track of our state for us. Now we need to hook it up in our `SearchParams` file. So now these lines

```js
const [animal, setAnimal] = useState("dog");
const [breed, setBreed] = useState("");
```

becomes

```js
const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
```

and in our return function we can replace the dropdowns jsx with

```js
<AnimalDropdown />
<BreedDropdown />
```

and boom we have a reusable dropdown that tracks its own state!

## `Effects`

We will also be using `effects` which will replace some of the lifecycle hooks in react like `componentDidMount`, `componentWillMount` and `componentDidUpdate`. First we import `useEffect` and pet from the frontendmasters package.

```js
import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
```

then we will declare the function `useEffect` that will fire after everything has already rendered. We want to use the `useEffect` method in order to make our API requests.

```js
const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

useEffect(() => {
  setBreeds([]);
  setBreed("");

  pet.breeds(animal).then(({ breeds }) => {
    const breedStrings = breeds.map(breedObj => breedObj.name);
    setBreeds(breedStrings);
  }, console.error);
});
```

here we set our `breeds` and `breed` to their initial value and then make the api request with `pet.breeds`. We grab the list of breeds, grab the name from each object and set those list of breed names so our `breeds` by calling the `setBreeds(breedStrings)` function.

One thing we need to change is we want to declare a list of dependencies for the `useEffect` call. If we don't then anytime any state changes the `useEffect` function will run so our API request will run each time, which is something we don't want. We want to only run it when `animal`, `setBreed`, or `setBreeds` change. If say our `location` changes it won't run as that doesn't affect which breeds to show, so our new `useEffect` function will look like this

```js
useEffect(() => {
  setBreeds([]);
  setBreed("");

  pet.breeds(animal).then(({ breeds }) => {
    const breedStrings = breeds.map(breedObj => breedObj.name);
    setBreeds(breedStrings);
  }, console.error);
}, [animal, setBreed, setBreeds]);
```

Say we wanted to only run it once then we could change our dependencies list from `[animal, setBreed, setBreeds]` to `[]`. And if we wanted it to run every time anything changes we just don't even pass the second parameter and so it would be

```js
useEffect(() => {
  ...
}); // no second parameter
```

## `Async request`

We want to now make an async request for a list of pets. We can declare a function to do so and use the `pet.animals` method to get that list for us.

```js
async function requestPets() {
  const { animals } = await pet.animals({
    location,
    breed,
    type: animal
  });

  // if nothing is returned set empty array
  setPets(animals || []);
}
```

and then we want to call that function on our submit so change your form tag to now be

```js
<form
  onSubmit={e => {
    e.preventDefault();
    requestPets();
  }}
>
  ...
</form>
```

and in our network tab you will see a list of pets returned! Now we want to actually see our list of pets so create a file called `Results.js` that will be as follows

```js
import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            name={pet.name}
            key={pet.id}
            breed={pet.breeds.primary}
            animal={pet.type}
            media={pet.photos}
            id={pet.id}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
```

where for each pet in the `pets` list we put our `pet` component and we add the `Results` component to our `SearchParams` file.

```js
// SearchParams.js
import Results from "./Results";
...
</form>
<Results pets={pets} />
```

and now we can see the results to the right! But we have so much more info being fed to our `Pet` component compared to what we had before. Let's refactor our `Pet` component to make use of that new data.

```js
import React from "react";

export default function Pet({ name, animal, breed, media, location, id }) {
  // grab a placeholder from placecorgi if there is no image
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
}
```

and now our results look much nicer and have pictures!!

## `Routing - Reach Router`

We want to make a details page for each of our pets so we need a new route and to help with our routing we are gonna use `reach-router`. First let's create a skeleton for our `details` component in `Details.js`

```js
import React from "react";

const Details = () => {
  return <h1>Hi</h1>;
};

export default Details;
```

and then we want to import the `router` in our `App` and wrap our components in a `<Router>` component.

```js
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParmas";
import Details from "./Details";

const App = () => {
  // strict mode will give warnings for things that will soon be deprecated
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me</h1>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
```

where the `path` is the url we expect for this component. So our `SearchParams` will be our default `/` page and the `Details` component will be `/details` with an id for the pet it is currently displaying. Let's add a link back to our home page when we are on our details page with the `Link` component from react-router! We will replace our `<h1>Adopt Me</h1>`

```js
import { Router, Link } from "@reach/router";
...
<header>
  <Link to="/">Adopt Me!</Link>
</header>
<Router>
...
```

and now we can navigate back and forth between our pages! Let's change our links in `Pet.js` as well to be

```js
// Pet.js
<Link to={`/details/${id}`} className="pet">
  <div className="image-container">
    <img src={hero} alt={name} />
  </div>
  <div className="info">
    <h1>{name}</h1>
    <h2>{`${animal} - ${breed} - ${location}`}</h2>
  </div>
</Link>
```

## `Class Components`

Up until now we have been using `pure` components for react but we want to use the class component now for our `Details` page.

```js
import React from "react";

class Details extends React.Component {
  render() {
    <h1>Hi</h1>;
  }
}

export default Details;
```

Some things to note are `effects` cannot be used in a class component and we instead need to user lifecycle hook methods such as `componentDidMount`, `componentWillMount` and `componentDidUpdate`. For now we will use `componentDidMount` which will run once and it where we should put any API requests. In this case we have the id for our details in the url which we can grab from our props via `this.props.id`. Additionally for handling our state we will use `this.state` and `this.setState` for changing our state. `this.props` are things passed to our class component from it's container but the classes `state` is self contained as it is its own state and we use `setState` to change our state and tell `React` to re-render. We will be following a common practice of having a loading jsx returned until we have set `loading` to false in our state.

- Note: values in the props are immutable

```js
import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    });
  }
  render() {
    if (this.state.loading) return <h1>loading...</h1>;
    return <h1>Loaded</h1>;
  }
}

export default Details;
```

Note we have set our state for name, animal, media, etc and then set our loading to false. So while the request is running our loading is true so in our `render` we see in our state `this.state.loading` is true and return `loading...` once loading is set to false then we re-render and display `loaded`. Lets replace loaded with info for our pet.

```js
// Details.js
render() {
  if (this.state.loading) return <h1>loading...</h1>;
  const { animal, breed, location, description, name } = this.state;
  return (
    <div className="details">
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
}
``
```

so now we see some relevant info about our `pet`. Next up, lets create a carousel component so we can pictures about our favorite animals!

```js
// Carousel.js
import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0
    };

    // need to bind the function to the this pointing to the class Carousel
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  // grabs some props and does filtering on them in a way we expect so we have a nice array with photos
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleImageClick(event) {
    this.setState({
      active: +event.target.dataset.index
    });
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleImageClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
```

above we grab a list of pgotos and display them in a way where we have an `active` image and smaller images where once they are clicked they become our `active` image. Additonally we have the `getDerivedStateFromProps` method which just grabs our props in this case `media` from props and allows us to format in a way that is easier for us to read, in this case just grabbing the large images and setting them in the array. Now we import it in our `Details` component

```js
// Details.js
render() {
  if (this.state.loading) return <h1>loading...</h1>;
  const { animal, breed, location, description, name, media } = this.state;
  return (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
}

```

and now we can see a carousel and flip through the pictures!

## `Error Boundaries`

`Error` boundaries can also be used in `classes` and cannot be used with `effects`. Let's create a file called `ErrorBoundary.js`

```js
import React from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false;
    }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    console.error("ErrorBondary caught an error ", error, info);
  }
  render() {
    if(this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link> to go back to the home page or wait five seconds
        </h1>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary;
```

Here we set out state has Error to initially be false but in our `getDerivedStateFromError` function we are returning `hasError` is true to be able to see what our error state will look like. We are also using a hook here called `componentDidCatch` that will fire when an error occurs and here we log out what that error is and some info on it. Lastly, in our render if there is an error we show the user an error message and if there is no error then we render whatever children were passed to `ErrorBoundary`.

When wrapping `ErrorBoundary` it needs to be a higher level wrapper to catch everything, so we need to wrap our `Details` with it and to do so we will change our `export default Details` to

```js
// Details.js
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
```

notice we pass the props to the `Details` component by spreading them with `{...props}` and with this change now if there is an error thrown for `Details` we will see our error message from `ErrorBoundary` appear.

Next let's build on this an this and the `componentWillUpdate` hook that will run each time there is a new update or new props. We can set this up to redirect us back to our home page on an error after 5 seconds. So we can set our state to check if we need to redirect or not.

```js
// ErrorBoundary.js
import { Link, Redirect } from "@reach/router";
...
this.state = {
  hasError: false,
  redirect: false
};
...
componentDidUpdate() {
  if (this.state.hasError) {
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }
}

render() {
  if (this.state.redirect) {
    return <Redirect to="/" />;
  }
  ...
}
```

so here one state has changed so we hit an error then `componentDidUpdate` will fire and check if there is an error in the state. If there it, it will set a timeout to set out state for redirect to true after 5 seconds. Once `redirect` is set to true then the component will re-render and the first if statement will be true and return teh `<Redirect>` component which will send our user to the home page.

## `Context`

Context is like state, but instead of being confined to a component, it's global to your application. It's an application-level state. Context mostly replaces Redux, at least it fills the same need to for it. For this imagine we wanted to make the search box at the top of the page appear on the search-params page and results page and re-use that component. We want our state to stick between the two so it needs to live outside of those two routes, so for this we can use context. Let's create a file called `ThemeContext.js`

```js
import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
```

where `createContext` now has `green` for the theme and a placeholder function for the context if there was no provider assoicaited with it, which should never happen. Now let's use this context in `App.js`, note these context do serve as hooks so we will be making use of `useState`.

```js
// App.js
import React, { useState } from "react";
...
import ThemeContext from './ThemeContext';
...
const themeHook = useState("darkblue");
...
 <React.StrictMode>
    <ThemeContext.Provider value={themeHook}>
        ...
    </ThemeContext.Provider>
  </React.StrictMode>
```

which will provide context to our entire application. We can now access that context in `SearchParams.js` with the following changes

```js
// SearchParams.js
import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
...
const [theme] = useContext(ThemeContext);
...
<button style={{ backgroundColor: theme }}>Submit</button>
```

which will make our `backgroundColor` for our button the `darkblue` we declared in `App.js`. Let's also use in it `Details.js` which is actually a class component so we can't use hooks! so in order to get it working in a class we need to use the `<ThemeContext.Consumer>` component to have access to our context.

```js
import ThemeContext from "./ThemeContext";
...
<ThemeContext.Consumer>
  {themeHook => (
    <button style={{ backgroundColor: themeHook[0] }}>
      Adopt {name}
    </button>
  )}
</ThemeContext.Consumer>
```

where the `<ThemeContext.Consumer>` provides a function that we use to access the context which we call `themeHook` and then we render our button in that function. `themeHook[0]` is our color and `themeHook[1]` would be our setter so we want the actual value in `themeHook[0]`. Now you can see the `darkblue` button on details! If you change the color in `App.js` it will change the color in both cases! If you wanted say multiple colors you can change `App.js` to be

```js
// App.js
import React, { useState } from "react";
...
import ThemeContext from './ThemeContext';
...
const themeHook = useState(
  {
    button: "darkblue",
    text: "red"
  }
);
```

and then in the consuming files instead of just `theme` or `themeHooks[0]` it would be `theme.button` and `themeHooks[0].button`. Now that reading the context is done we want to be able to update it from our app and we will do so in `SearchParams` by adding another select.

```js
// SearchParams.js
const [theme, setTheme] = useContext(ThemeContext);
...
<BreedDropdown />
<label htmlFor="theme">
  Theme
  <select
    value={theme}
    onChange={event => setTheme(event.target.value)}
    onBlur={event => setTheme(event.target.value)}
  >
    <option value="peru">Peru</option>
    <option value="darkblue">Dark Blue</option>
    <option value="mediumorchid">Medium Orchid</option>
    <option value="chartreuse">Chartreuse</option>
  </select>
</label>
```

where now if you change the color and navigate to the `details` route by clicking on animal then you can see the change has peristed to that page as well! If you refresh the page you can see that the change resets and we are back to `darkblue`.

You may be wondering why we use another dropdown without using the `useDropdown` hook we created and this is because with the `useDropdown` we are using our own hook function whereas for context we need to use their custom hook not one that we create for updating the hook.

## `Portals`

We will be adding a modal to function as a confirmation check for adopting a pet and will add this modal with portals. First let's change our `index.html` file to have a container for our modal

```html
<!-- index.html -->
<body>
  <div id="modal"></div>
  <div id="root">not rendered</div>
  <script src="./App.js"></script>
</body>
```

and then create a `Modal.js` file like so

```js
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("root");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
```

Two new things here first is the `useRef`. `refs` in react are used to keep track of certain items in this case we use it to check if our ref is currently bound to our `div` modal element and we check that through `elRef.current`. If our ref has no modal(`div`) on it's current we create that modal and set it to our ref. The second change to notice is in our `useEffect` we append that ref div to the modal container in our `index.html` file and return a function this time from `useEffect`. That return function will run when the modal is gone and is used for cleanup, so in this case we remove the element from the DOM. Let's now add this to `Details.js`.

```js
// Details.js
...
import { navigate } from "@reach/router";
import Modal from "./Modal";
...
constructor(props) {
  super(props);

  this.state = {
    loading: true,
    showModal: false
  };

  this.toggleModal = this.toggleModal.bind(this);
  this.adopt = this.adopt.bind(this);
}
componentDidMount() {
  pet.animal(this.props.id).then(({ animal }) => {
    this.setState({
      url: animal.url,
      name: animal.name,
      animal: animal.type,
      location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
      description: animal.description,
      media: animal.photos,
      breed: animal.breeds.primary,
      loading: false
    });
  });
}
toggleModal() {
  this.setState({ showModal: !this.state.showModal });
}
adopt() {
  navigate(this.state.url);
}
...
<p>{description}</p>
{showModal ? (
  <Modal>
    <div>
      <h1>Would you like to adopt {name}?</h1>
      <div className="buttons">
        <button onClick={this.adopt}>Yes</button>
        <button onClick={this.toggleModal}>No, I'm a monster</button>
      </div>
    </div>
  </Modal>
) : null}
```

and boom we have a working Modal where if you click yes it takes you to the adopt page and if no then you return to the page you were on.
