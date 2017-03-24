# MMM-toggleFullscreen
MagicMirror Module to toggle browser into fullscreen mode

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/). It provides a simple way to switch a browser into full screen mode (mainly relevant for serveronly mode with different browsers).


## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: "MMM-fullscreenToggle",
	    position: "top_right", // Any position is possible, only relevant if useBody is not set
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

## Configuration options

| Option    | Default  | Description
|-----------|----------|------------
| `useBody` | true     | If set to true, the whole document can be clicked (i.e., the HTML body). If false, a small "Toggle Fullscreen" text will be shown to click. 


## Notes

The `useBody` can conflict with other modules which are touch enabled. 