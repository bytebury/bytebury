# Back to Basics

<img class="cover-photo" src="https://images.ctfassets.net/kftzwdyauwt9/4HGPvb9dhHOzl8BVIah0ZG/af1d09bade2e153599c6c7d7c04bc33c/apple-art-2a-2x1.jpg?w=1920&q=90&fm=webp" />

When I first started web development, there were just a fraction of the tools we have today. Each modern tool aims to solve a specific problem. However, have you ever wondered how these tools work under the hood?

You might be surprised (or not) to learn that they’re built on the same fundamentals I used when I began web development at 12 years old. For example, TailwindCSS, is just a library of utility classes that are just plain-old CSS.

Tailwind is a tool for creating beautiful websites, fast. By using "utility classes". For those unfamiliar with that topic; you can think of these as a single (or very simple) CSS style.

> **Side note**: If you have to battle with your tool, it might be a sign you're using the wrong one.

Tailwind, like _everything_ in software development, has its downsides. It makes your HTML really, and I mean really messy. Essentially, the TL;DR version of Tailwind is that it moves your CSS to your HTML in ways of Utility Classes. Interestingly, if you did something similar in your code, like having a class do more than one thing, people would agree that’s bad practice.

The appeal for Tailwind is exactly what it was created for &mdash; really fast UI development. At the cost of making your HTML really messy. This makes Tailwind a great solution for proof-of-concepts, simple websites, or one-time-use websites. Which, by nature, can be messy since they won't scale. In a POC's case &mdash; isn't meant to be used in production.

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

You can see that I had to write a little more and create an extra file. However, the template code becomes a lot more readable and you're separating concerns (Styling and Content).

If you haven't written CSS in a while, I would recommend some of the following resources:

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [CSS ZEN GARDEN](https://www.csszengarden.com/)

I think you'll be surprised at how many amazing features and just how truly powerful CSS can be.

If you still feel compelled to use Tailwind &mdash; and there are good reasons to &mdash; consider following these two practices:

- Keep components small
- Use `@apply` in a separate `*.css` file.

Ultimately, you should do what works best for you and your team.
