Hi Everyone!

I’d like to introduce to you my very first project, in which every line of the code has been written all by myself. No copy/paste from other solutions shared in the web. I know that coding a stopwatch in JS isn’t very demanding challenge, although during this exercise I had faced some quite interesting, unexpected troubles. One of the consequences of using „digital” type of font is that „1” digit is not the same width as other digits - after all, number „11” displayed as on the image below - which is not an actual performance for digital watches.

![Uncorrect performance](https://github.com/mroch4/oventimer/blob/master/11.png)

The solution was to code two (two for minutes and two for seconds) separate poles for digits instead of one double. In turn, this created another problem - set time should have been calculated not only to seconds and minutes, but also to tens-part and ones-part for both individually. What’s more, separator pole was assumpted to blink, which means, every charakter one the screen is located in detached area. 
As long as there are only two poles to represent minutes, the timer can be set to 1:39:59 at most (99 minutes and 59 seconds). Minutes incrementation/decrementation equals 1 unit (minute), while for the seconds step equals 5 seconds. Turn down the volume - at the end of the countdown the ringing sounds!

![Inspiration](https://github.com/mroch4/oventimer/blob/master/photo.png)

