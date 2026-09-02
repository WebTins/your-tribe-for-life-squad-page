# Afspraken over samenwerking
[Figma](https://www.figma.com/design/zsrLhtyXdZ4oehOyeBvTDR/Untitled?node-id=0-1&t=uEoXInM6LWD9o8cZ-1)
<img width="4756" height="3364" alt="image" src="https://github.com/user-attachments/assets/1e13a37f-5001-4474-bf97-e53e07406867" />

## Code Conventions

### Whitespace

We use whitespace to keep our code clean, readable, and easy to follow. A blank line is used between logical sections of code to clearly separate different elements.

Nested elements are indented with **one tab**. This makes it clear which elements belong to a parent element.

**Example:**

```css
* {
    margin: 0;
    box-sizing: border-box;
    font-family: Inter;
}

@media (prefers-reduced-motion: no-preference) {
    @view-transition {
        navigation: auto;
    }

    :root {
        view-transition-name: none;
    }
}
```

### HTML Structure and CSS Nesting

The order of our HTML structure should be reflected in the CSS. This makes it easier to find the styling belonging to a specific HTML element.

We use CSS nesting when styles belong to a specific parent element or class. Unnecessary or overly deep nesting should be avoided to keep the code maintainable and easy to understand.

### Semantic HTML

We use structured and [semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics). HTML elements should be chosen based on their meaning and purpose rather than their default visual appearance.

Our HTML should be logical, robust, and accessible.

### Custom Properties

We use CSS custom properties to avoid repeating values and follow the **DRY (Don't Repeat Yourself)** principle.

Custom properties use a clear and descriptive name written in **kebab-case**.

**Example:**

```css
:root {
    --head-accent: #ffffff;
    --background-color: #f5f5f5;
    --text-color: #222222;
}
```

### Class Naming

Classes are always written in **English** and use **kebab-case**. Class names should describe the purpose or function of an element rather than its visual appearance.

**Good:**

```html
<button class="submit-button">Submit</button>
```

**Avoid:**

```html
<button class="purple-button">Submit</button>
```

`submit-button` describes the purpose of the element, while `purple-button` describes its current visual appearance.

---

## JavaScript Conventions

### Naming

JavaScript variables, functions, and other identifiers use **camelCase**. Names should clearly describe what a variable contains or what a function does.

**Example:**

```javascript
const userName = 'Tin'

function getUserData() {
    // ...
}
```

### Indentation

We use **one tab** for indentation. This keeps the structure of nested code consistent across our HTML, CSS, and JavaScript.

### Strings

We use **single quotes** for strings.

```javascript
const message = 'Hello world'
```

### Semicolons

We do **not** use semicolons at the end of a line.

```javascript
const message = 'Hello world'
```

### Comments

Comments should be used to explain complicated or non-obvious logic. Avoid comments that simply describe what the code already makes clear.

```javascript
// Check authentication before requesting user data
if (user.isAuthenticated) {
    getUserData()
}
```

### Template Literals

Use template literals when working with dynamic values inside strings. This improves readability compared to string concatenation.

```javascript
const greeting = `Hello ${userName}`
```

See the [FDND code conventions](https://docs.fdnd.nl/conventies.html#use-template-literals-where-possible-instead-of-string-concatenation) for more information.

### Const and Let

Use **const** by default when a variable does not need to be reassigned. Use **let** when the value needs to change.

```javascript
const name = 'Tin'
let counter = 0

counter++
```

We do not use `var`.

See the [FDND code conventions](https://docs.fdnd.nl/conventies.html#when-to-use-const-let-and-var) for more information.

### SvelteKit Conventions

When working with SvelteKit, we follow the framework-specific conventions and guidelines in addition to our general JavaScript conventions.

---

## Git and Pull Request Conventions

### Pull Requests

Before creating a Pull Request (PR), we review our own code first. We check whether the code works correctly, is readable, and follows our project conventions.

We keep Pull Requests as small as possible. Multiple small PRs are preferred over one large PR because they are easier to review and understand.

Every PR must be reviewed by **at least one team member** before it is merged.

We use the [Pull Request template](https://github.com/fdnd-agency/.github/blob/main/pull_request_template.md).

### Branching Strategy

We use the following branch structure:

```text
Main
└── Develop
    └── Team member name
        └── Feature
```

Features are developed on their own branch. Once a feature has been completed and merged, the corresponding branch should be deleted.

### Branch Management

Branches should be removed after the corresponding feature or fix has been merged. This keeps the repository clean and prevents old branches from accumulating.

### Commit Messages

Commit messages should reference the **issue number** related to the change.

We use conventional commit types to clearly communicate the purpose of a commit:

* `build` – changes to build systems or dependencies
* `docs` – documentation changes
* `feat` – adding new functionality
* `fix` – fixing a bug
* `perf` – performance improvements
* `refactor` – restructuring code without changing its functionality
* `style` – formatting or styling changes
* `test` – adding or modifying tests
* `chore` – other maintenance tasks

**Example:**

```text
feat: add pokemon filter (#42)
```

### Sources

When external sources, documentation, or solutions are used, we include the relevant sources in issues, commits, or Pull Requests. This allows team members to find the information later and learn from each other's solutions.

### README

Every repository should contain a clear and useful README. It should explain at minimum:

* What the project is
* How to install and run the project locally
* Any important information needed to work with the project

---

## Design Conventions

### Typography

We follow the following guidelines to improve readability and accessibility:

* Use a minimum **16px font size** for body text.
* Use a minimum **1.5 line-height** for body text.
* Keep text lines around **10–12 words** where possible to prevent overly long lines.

### Figma

We use **Figma variables** for reusable design values such as colors, spacing, and typography.

This helps keep the design consistent and makes it easier to translate design decisions into code.

See the [FDND code conventions](https://docs.fdnd.nl/conventies.html#figma) for more information.