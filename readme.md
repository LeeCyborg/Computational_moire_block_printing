# Moire Simulator for computational block printing 
###### lee cyborg 2025

This is a small piece of code used to simulate moire effects for the purpose of block printing (or whatever you like). Generate a pattern and then test how it might create a moire effect. Once the desired patterns are found you can export the as SVG and use them to block print (or whatever!)

## basic usage 
Create a pattern using one of the 4 functions (dots, lines, circles, grid). By changing the x, y and angle of each pattern you can create moire effects. 
example: 
``` makeLines(4, 10, 0, 0, 0);``` 
creates a line pattern at 0 angle at the top left. 
``` makeLines(4, 10, 10, 0, 0);``` 
offsets that by 10 degrees to create a moire effect. Effects can be made by combining different types of patterns. 

You can use the global variables ```xPos``` ```yPos``` and ```angle``` to dynamically change the pattern. For example, you can create 1 static pattern and move another on top of it to see how the moire works. 

``` 
makeLines(4, 10, angle, xPos, yPos);  
makeLines(10, 20, 100, 0, height/2);
```
In that example you'll get 2 sets of lines, one of which you can alter with W A S D and B and V. 

## functions 
```makeLines(thickness, padding, degrees, xPos, yPos)``` 

```makeDots(size, padding, degrees,xPos,yPos)```

```makeGrid(size, thickness, degrees, xPos, yPos)```

```makeCircles(circles, thickness, padding, x, y)```
