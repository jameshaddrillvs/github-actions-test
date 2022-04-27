module.exports = { 
    root: true,
    env: {
      browser: true,
      node: true
    },
    extends: [
      'plugin:vue/strongly-recommended',
      'plugin:vue/essential',  
    ],
    // add your custom rules here
    rules: {
      "semi": "error",
      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": "error",
      "vue/no-side-effects-in-computed-properties": "off",
      "vue/no-async-in-computed-properties": "off",     
    }, 
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "babel-eslint",
      "sourceType": "module"
    },
    plugins: [
      //plugins list
    ],
  };