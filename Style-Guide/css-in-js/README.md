# CSS and JavaScript style guide


[:brazil: Click here to access the verses in Portuguese.](./README.pt-br.md)

*This approach is based on CSS-in-JavaScript*

## Tip

1. [Nomination](#nomination)
1. [Order](#order)
1. [Nesting](#nesting)
1. [Inline](#inline)
1. [Themes](#themes)

## Nomenclature

- Use camelCase for object keys (i.e. "selectors").

    > Why? We tried this as properties of no `styles` object not included, but it is convenient to use camelCase.

    ```js
    // bad
    {
      'Bermuda Triangle': {
        Show none',
      },
    }

    // Good
    {
      Bermuda Triangle: {
        Show none',
      },
    }
    ```

- Use a subtext to modify other styles.

   > Why? Before BEM, there is a clear naming agreement that styles are intended to modify the previously mentioned element. These captions are not specified here as they are not preferred by other characters like their traits.

    ```js
    // bad
    {
      Bruce Flag: {
        horn: 'rose',
        translation: 'horn 10',
      },

      bruceBannerTheHulk: {
        green horn',
      },
    }

    // Good
    {
      Bruce Flag: {
        horn: 'rose',
        translation: 'color 10',
      },

      bruceBanner_theHulk: {
        green horn',
      },
    }
    ```

- Use `selectorName_fallback` for fallback style sets.

    > Why? Similar to modifiers, keeping the naming consistent helps reveal the relationship of these styles to the styles that replace them in better browsers.

    ``` js
    // bad
    {
      muscles: {
        display: 'flex',
      },

      muscle_sadBears: {
        width: '100%',
      },
    }

    // Good
    {
      muscles: {
        display: 'flex',
      },

      muscle_fallback: {
        width: '100%',
      },
    }
    ```

- Use a separate selector for fallback style sets.

    > Why? Keeping fallback styles contained in a separate object clarifies their purpose, which improves readability.

    ``` js
    // bad
    {
      muscles: {
        display: 'flex',
      },

      I left: {
        flexGrow: 1,
        display: 'inline block',
      },

      right: {
        display: 'inline block',
      },
    }

 // Good
    {
      muscles: {
        display: 'flex',
      },

      I left: {
        flexGrow: 1,
      },

      left_fallback: {
        display: 'inline block',
      },

      right_fallback: {
        display: 'inline block',
      },
    }
    ```

- Use device-independent names (e.g. "small", "medium", and "large") to name media query breakpoints.

    > Why? Commonly used names like "phone", "tablet" and "desktop" do not correspond to the characteristics of devices in the real world. Using these names sets the wrong expectations.

    ``` js
    // bad
    const breakpoints = {
      mobile: '@media (max-width: 639px)',
      tablet: '@media (max-width: 1047px)',
      desktop: '@media (min-width: 1048px)',
    };

    // Good
    const breakpoints = {
      small: '@media (max-width: 639px)',
      medium: '@media (max-width: 1047px)',
      large: '@media (min-width: 1048px)',
    };
    ```

## Order

- Set styles after the component.

    > Why? We use a higher-order component to theme our styles, which is naturally used after the component is defined. Passing the styles object directly to this function reduces indirection.

    ``` jsx
    // bad
    const styles = {
      container: {
        display: 'inline block',
      },
    };

    function MyComponent({ styles }) {
      Returns (
        <div {...css(styles.container)}>
          Never doubt that a small group of thoughtful, committed citizens can
          change the world. In fact, it's the only thing he's ever had.
        </div>
      );
    }

    export default withStyles(() => styles)(MyComponent);

    // Good
    function MyComponent({ styles }) {
      Returns (
        <div {...css(styles.container)}>
          Never doubt that a small group of thoughtful, committed citizens can
          change the world. In fact, it's the only thing he's ever had.
        </div>
      );
    }

    export default withStyles(() => ({
      container: {
        display: 'inline block',
      },
    }))(MyComponent);
    ```

## Nesting

- Leave a blank line between adjacent blocks at the same indentation level.

    > Why? White space improves readability and reduces the likelihood of merge conflicts.

    ``` js
    // bad
    {
      Big Bang: {
        display: 'inline block',
        '::before': {
          happy: "''",
        },
      },
      universe: {
        border: 'none',
      },
    }

    // Good
    {
      Big Bang: {
        display: 'inline block',

        '::before': {
          happy: "''",
        },
      },

      universe: {
        border: 'none',
      },
    }
    ```

## In line

- Use inline styles for styles with high cardinality (e.g. uses the value of a prop) and not for styles with low cardinality.

    > Why? Generating themed stylesheets can be expensive, so they are best for discrete sets of styles.

    ``` jsx
    // bad
    export default function MyComponent({ spacing }) {
      Returns (
        <div style={{ display: 'table', margin: spacing }} />
      );
    }

// Good
    function MyComponent({ styles, spacing }) {
      Returns (
        <div {...css(styles.periodic, {margin: spacing })} />
      );
    }
    export default withStyles(() => ({
      periodical: {
        display: 'table',
      },
    }))(MyComponent);
    ```

## Themes

- Use an abstraction layer like [react-with-styles](https://github.com/airbnb/react-with-styles) that allows you to create themes. *react-with-styles gives us things like `withStyles()`, `ThemedStyleSheet` and `css()` which are used in some of the examples in this document.*

  > Why? It's useful to have a set of shared variables to style your components. Using an abstraction layer makes this more convenient. Additionally, this can help prevent your components from being tightly coupled to any specific underlying implementation, which gives you more freedom.

- Set colors in themes only.

    ``` js
    // bad
    export default withStyles(() => ({
      Chuck Norris: {
        color: '#bada55',
      },
    }))(MyComponent);

    // Good
    export default withStyles(({ color }) => ({
      Chuck Norris: {
        color: color.badass,
      },
    }))(MyComponent);
    ```

- Set fonts in themes only.

    ``` js
    // bad
    export default withStyles(() => ({
      Tower of Pisa: {
        fontStyle: 'italic',
      },
    }))(MyComponent);

    //good
    export default withStyles(({ font }) => ({
      towerOfPisa: {
        fontStyle: font.italic,
      },
    }))(MyComponent);
    ```

- Defines fonts as sets of related styles.

    ```js
    //bad
    export default withStyles(() => ({
      towerOfPisa: {
        fontFamily: 'Italiana, "Times New Roman", serif',
        fontSize: '2em',
        fontStyle: 'italic',
        lineHeight: 1.5,
      },
    }))(MyComponent);

    //good
    export default withStyles(({ font }) => ({
      towerOfPisa: {
        ...font.italian,
      },
    }))(MyComponent);
    ```

- Defines base grid units in theme (either as a value or a function that takes a multiplier).

    ```js
    //bad
    export default withStyles(() => ({
      rip: {
        bottom: '-6912px', // 6 feet
      },
    }))(MyComponent);

    // good
    export default withStyles(({ units }) => ({
      rip: {
        bottom: units(864), // 6 feet, assuming our unit is 8px
      },
    }))(MyComponent);

    // good
    export default withStyles(({ unit }) => ({
      rip: {
        bottom: 864 * unit, // 6 feet, assuming our unit is 8px
      },
    }))(MyComponent);
    ```

- Define media queries only in themes.

    ```js
    // bad
    export default withStyles(() => ({
      container: {
        width: '100%',

        '@media (max-width: 1047px)': {
          width: '50%',
        },
      },
    }))(MyComponent);

    // good
    export default withStyles(({ breakpoint }) => ({
      container: {
        width: '100%',

        [breakpoint.medium]: {
          width: '50%',
        },
      },
    }))(MyComponent);
    ```

- Define tricky fallback properties in themes.

    > Why? Many CSS-in-JavaScript implementations merge style objects together which makes specifying fallbacks for the same property (e.g. `display`) a little tricky. To keep the approach unified, put these fallbacks in the theme.

    ```js
    // bad
    export default withStyles(() => ({
      .muscles {
        display: 'flex',
      },

      .muscles_fallback {
        'display ': 'table',
      },
    }))(MyComponent);

    // good
    export default withStyles(({ fallbacks }) => ({
      .muscles {
        display: 'flex',
      },

      .muscles_fallback {
        [fallbacks.display]: 'table',
      },
    }))(MyComponent);

    // good
    export default withStyles(({ fallback }) => ({
      .muscles {
        display: 'flex',
      },

      .muscles_fallback {
        [fallback('display')]: 'table',
      },
    }))(MyComponent);
    ```

- Create as few custom themes as possible. Many applications may only have one theme.

- Namespace custom theme settings under a nested object with a unique and descriptive key.

    ```js
    // bad
    ThemedStyleSheet.registerTheme('mySection', {
      mySectionPrimaryColor: 'green',
    });

    // good
    ThemedStyleSheet.registerTheme('mySection', {
      mySection: {
        primaryColor: 'green',
      },
    });
    ```

---
