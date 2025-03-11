# <center>TypeScript</center>

## 1. Annotations

- Making annotations in TypeScript is a easy thing; not too difficult.

- 1st you have to create a variable;

>  <center> Ex:- <font color="yellow"> <font color=lightGreen>let</font> firstName;</font> </center>

- Then you have to assign a value for that and initialize it.

> <center> Ex:- <font color="yellow"> <font color=lightGreen>let</font> firstName = <font color="orange">"Johnathan"</font>;</font> </center>

- End of the process you have to put the specific data type like this;

> <center> Ex:- <font color="yellow"> <font color=lightGreen>let </font>
> firstName : <font color="pink">string</font> =<font color="orange"> "Johnathan"</font>;</font> </center>

Don't do these steps one by one. I explained it to understand.  
 You have to write that steps in one single line. Like this;

> <center> 
> Ex:- <font color="yellow"> 
>  <font color=lightGreen>let</font> firstName : <font color="pink">string</font> = <font color="orange">"Billy Butcher"</font>;</font> </center>

## 2. Inferring

- In TypeScript you can initialize variables without mentioning the data type.

- Why? TypeScript is automatically detecting your variable data type.

- But, you can't assign number value to a string value. You can't assign string value to a number value.  
  That's the main point.

- And if you try to do it. TypeScript shows you an error.

<figure>
    <img src="assets/img/2. TypeInferring .png"
         alt="Inferring Errors">
    <figcaption>Error sample</figcaption>
</figure>
