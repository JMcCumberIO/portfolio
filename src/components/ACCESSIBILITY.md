# Skip to Content Link

This component adds an accessibility feature that allows keyboard users to skip directly to the main content.

```jsx
// src/components/SkipToContent.jsx
import React from 'react';

function SkipToContent() {
  return (
    <a 
      href="#main-content" 
      className="skip-to-content"
    >
      Skip to main content
    </a>
  );
}

export default SkipToContent;
```

## Usage

Add this component at the top of your App component, before the Navbar:

```jsx
<SkipToContent />
<Navbar />
<main id="main-content" className="...">
  // content...
</main>
```

Also ensure that the following CSS is included in your index.css:

```css
.skip-to-content {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 1em;
  background-color: white;
  color: black;
  opacity: 0;
}

.skip-to-content:focus {
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}
```
