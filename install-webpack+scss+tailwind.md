To use webpack with Tailwind CSS and SCSS, you can follow these steps:

Step 1: Set up a new project
Start by creating a new directory for your project and navigating to it in your terminal. Initialize a new npm project by running the command:

```
npm init -y
```

Step 2: Install webpack and required loaders
Next, you need to install webpack and the necessary loaders. Run the following command to install webpack, webpack-cli, and the loaders for handling SCSS and CSS:

```
npm install webpack webpack-cli css-loader sass-loader style-loader mini-css-extract-plugin postcss-loader autoprefixer tailwindcss
```

Step 3: Create necessary files
Create the following files in your project directory:

- `webpack.config.js`: This file will contain the configuration for webpack.
- `src/index.js`: This will be your main JavaScript file where you import your SCSS files.
- `src/style.scss`: This will be your main SCSS file where you import Tailwind CSS.

Step 4: Configure webpack
Open `webpack.config.js` and add the following configuration:

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
```

Step 5: Create Tailwind CSS configuration
Generate a Tailwind CSS configuration file by running the following command:

```
npx tailwindcss init
```

This will create a `tailwind.config.js` file in your project directory.

Step 6: Customize your Tailwind CSS
Open `tailwind.config.js` and modify it according to your project's needs. You can define custom colors, fonts, breakpoints, etc.

Step 7: Import Tailwind CSS in SCSS
Open `src/style.scss` and import Tailwind CSS by adding the following line:

```scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

Step 8: Build your project
Finally, build your project by running the following command:

```
npx webpack
```

This will generate the `bundle.js` and `style.css` files in a `dist` folder.

Step 9: Include built files in your HTML
In your HTML file, include the generated `bundle.js` and `style.css` files. For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dist/style.css">
  <title>Webpack + Tailwind + SCSS</title>
</head>
<body>
  <!-- Your content here -->
  <script src="dist/bundle.js"></script>
</body>
</html>
```

That's it! Now you can start writing your SCSS styles using Tailwind CSS classes, and webpack will compile them into the `style.css` file for use in your project.