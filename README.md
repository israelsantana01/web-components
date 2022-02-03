# Web Components

## What is the purpose?
When i was studying Ionic Framework i face out this term "web components", so i decided to study what this means, which concepts are behind the scenes and how i can implement it without a framework.

## What did i do in this project?
First, what is a web component? It is concept that allow us to create our personalizated HTML component reusing the code and making easy the maintain process, because you only need to write the code one time.

I made a simple card component implementing the main concepts of web components that are: **shadow DOM and custom elements**

- Custom Elements: A concept that allows you create you own HTML tag. We create our custom tag extending **HTMLElement** class and this class offer to us some **lifecycle hooks** like: connectedCallback, disconnectedCallback and attributeChangedCallback.

- Shadow DOM: Basically, means that your components has to be isolated of the others HTML things. I mean, the style and structure must to be encapsulated.

## How to run the project?
Just install the **live-server** library and execute locally.

![image](https://ik.imagekit.io/ntsapal2yx/img4_HpFm1_5TS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643896756913)



