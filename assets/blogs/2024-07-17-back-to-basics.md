# Back to Basics

<img class="cover-photo" src="https://images.ctfassets.net/kftzwdyauwt9/4HGPvb9dhHOzl8BVIah0ZG/af1d09bade2e153599c6c7d7c04bc33c/apple-art-2a-2x1.jpg?w=1920&q=90&fm=webp" />

When I first started web development, there were just a fraction of the tools we have today. Each modern tool aims to solve a specific problem.

Tailwind is a tool for creating beautiful websites, fast. By using "utility classes". For those unfamiliar with that topic; you can think of these as a single (or very simple) CSS style.

> **Side note**: If you have to battle with your tool, it might be a sign you're using the wrong one.

The appeal for Tailwind is exactly what it was created for &mdash; really fast UI development. At the cost of making your HTML really messy (we'll dive into fixing this shortcoming though). This makes Tailwind a great solution for proof-of-concepts, simple websites, or one-time-use websites. Which, by nature, can be messy since they won't scale. In a POC's case &mdash; isn't meant to be used in production.

Here's an example of what Tailwind looks like versus the same example without Tailwind.

**With Tailwind**

```html
<header class="bg-white p-[20px] rounded-[20px] shadow-md">
  <h1 class="font-bold text-xl">{{ reviewerName() }}</h1>
  <span class="text-sm text-primary">{{ applicationName() }}</span>
</header>
```

**Pure CSS**

```html
<header>
  <h1>{{ reviewerName() }}</h1>
  <span>{{ applicationName() }}</span>
</header>
```

```css
header {
  background: var(--white);
  padding: 20px;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
}

h1 {
  font-size: var(--text-xl);
}

span {
  font-size: var(--text-sm);
  color: var(--primary);
}
```

You can see that I had to write a little more and create an extra file. However, the template code becomes a lot more readable and you're separating concerns (styling and content). CSS by itself is extraordinarily powerful. Tailwind makes that easy, but it's not required. For example, this website is built without Tailwind.

Some of the cons of using Tailwind can actually be mitigated by using `@apply` in a stylesheet. Essentially, it'll act like CSS but will apply your Tailwind utility classes. This keeps your template clean and separates out your style definitions.

For example, we can rewrite our example above like so:

```html
<header>
  <h1>{{ reviewerName() }}</h1>
  <span>{{ applicationName() }}</span>
</header>
```

```css
header {
  @apply bg-white shadow-md p-8 rounded-lg;
}

h1 {
  @apply text-xl;
}

span {
  @apply text-sm text-primary;
}
```

This approach takes Tailwind and makes it much more clean and easier to maintain. In general, try to follow these two practices when working with Tailwind.

- Keep components small
- Use `@apply` in a separate `*.css` file.

Keep it simple and go back to the basics.