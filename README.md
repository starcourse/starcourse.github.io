# [http://star-course.com](http://star-course.com/)

### DO NOT RENAME THE REPOSITORY. 
#### The repo name "starcourse.github.io" is what makes this site publishable.

--------------------------------------------------

### About

Our website is hosted as a single page static site on Github. Our domain is owned and operated by UIUC so you never have to worry about paying to renew it. The website uses Bootstrap for styling (make things look nice) and some Javascript for dynamics (make things change and move). If you’re making any updates to the website you won’t have to do anything except make a few changes to the HTML code in `index.html` or  `history.html`.

This isn’t a drag and drop website; you’ll have to actually write code to make changes. But don’t worry, you can do it! ☺

Again, only make edits to `index.html` or `history.html`. Leave all the other files alone!

--------------------------------------------------

### What to Update on the Website
1. Information under “Upcoming Events” in `index.html`
   - poster for current show
   - ticket links and information
   - end of semester thank you,  quad booths / meeting info, etc.
2. Adding show posters under “Previous Events” in `index.html`
3. Adding shows under “History” in `history.html`
4. Senior Manager names in `index.html`

All theses locations in the code are marked with 'TODO', so you can ctrl-F for these.
Save all poster files under website/img/posters as a .png or .jpg.

##### See the Google Drive document for screenshots and more info on what to actually change!

---------------------------------------------------
### Coding Tutorials
I HIGHLY recommend doing some HTML and Github tutorials before starting. They’ll do a better job explaining the basics of the process than I can. (Bootstrap and CSS tutorials are necessary for more complex, stylistic alterations.)

---------------------------------------------------
### CodeBase Description
#### This is a brief description of all the files, languages, frameworks, etc. and their functions.
#### You don't have to understand (or even read) this section to change the website.
 - `index.html` - the main HTML site
 - `history.html` - the 'history' portion of the site, navigated to from the 'see more history' button on index.html
 - css - responsible for styling the webpage, i.e. changing colors, sizes, text styles, etc.
    - `bootstrap.min.css` - [Bootstrap](https://getbootstrap.com/) is a free service available for creating and styling webpages. We are using Bootstrap's CSS styling so we don't have to write a lot of it ourselves. For example we can give write `<div class="row">` which gives this div the class of 'row', a class bootstrap has written to specify how that row will look. Class descriptions are available [here](https://getbootstrap.com/docs/3.4/css/). The 'min' in the file name means that the file doesn't contain much whitespace, making it fairly unreadable, but giving it a smaller file size. 
     - `theme.css` - this is the CSS that we've written especially for the site. In this file, you can change the cover photo at the top of the page under `.intro` and the variable theme color that is used on many elements (buttons, titles, etc.) under `:root` at the top.
 - font-awesome - makes available a library of icons and fonts. The little arrow on the 'See more history' button uses fontawesome's caret icon`<i id="historyButton" class="fa fa-caret-right fa-fw"></i>`.
 - fonts - Bootstrap's library of glyphicons, which are also little icons.
 - `img` - for posters, live photos, sc logo, and website icon
 - js - javascript controlls any moving part of a webpage
    - `botstrap.min.css` is the js that comes with Bootstrap. It also requires `jquery.js` which is a commonly-used js library.
    - `validate.js` checks that information entered into a contact form (which the site is not currently using) is valid
    - `theme.js` is the js that we've written especially for the site. It makes the navbar appear/dissapear when scrolling. It also controlls the automatic scroll to a section when you click on that section ('Events', 'Staff', etc.) in the navbar.
 - CNAME - specifies the domain name
 - favicon.ico - the little icon that appears in top-left of the tab
 - license.txt - legal license for use of theme from wowtheme.net
 - README.md - contains the very text that you're reading right now.
 - makingchanges.txt - a duplicated of the README, in .txt form

---------------------------------------------------

### How to Update the Website

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your computer
   - If you’re familiar with Github, make yourself a contributor to the repo and save yourself some hassle with multiple accounts.
   - If you do not have your own Github account, log in with the SC username and password whenever prompted.

2. Download the Website folder to your personal machine
   There are 2 ways to do this
   - in your computer's terminal, navigate to the desired folder where you want the “website” folder to be saved (use `cd` commands)
   - Use the following git commands to import it onto your computer
      ```
      git clone https://github.com/starcourse/website.git
      cd website
      git add .
      git commit -m "initial commit"
      git push origin master
      ```
   - OR download it as a .zip file from Github and initialize git after saving
(I’m assuming you’ve already extracted and saved the .zip folder into its desired location. In this example you’ve named it “existing_folder” so replace the command with the actual folder name)
      ```
      cd existing_folder
      git init
      git remote add origin https://github.com/starcourse/website.git
      git add .
      git commit -m "initial commit"
      git push origin master
      ```

   - #### If you've completed step 2 previously and it has been a while since last editing, and you suspect that someone else (or you on a different computer) has edited the website since you've last touched it, run `git pull` to get the most-recent version of the website on your computer.


3. Open `index.html` (or `history.html`) in a text editor and make all edits
   - reccomended editors: Atom, Sublime, or VS Code
   - SAVE all changes! If you don’t save before a push or refresh nothing changes.
   - Test locally: open `index.html` (double click on the icon in the website folder) in browser and refresh it whenever you save to see your changes in action. This lets you see your changes before the whole world does. Voila! Local development.

 * The nice thing about using Github pages is that the code on the site is almost immediately updated as changes are pushed to the repository. So once you push, it's live within a couple of minutes.

* #### BECAUSE OF THIS, ONLY MAKE CHANGES LOCALLY!

 * Adding new content: If you need to add a poster or change a background image, add it to the proper folder ( img/posters, img/livephotos, etc.). Then use the `git add .` command so that Git recognizes it. Otherwise, the uploaded website won't have access to or display the new picture. (You can also upload it into Github manually, but this can be annoying and cause pull/merge issues)


4. Push changes to the Github repository:
      ```
      git add .
      ```
      optional: run `git status`. Make sure all files are green, meaning they are tracked by git and will be uploaded in the next step.
      
      ```
      git commit -m “[write comment here about changes made]”
      git push origin master
      ```

   ### And BOOM you’re done!

   ### Best of luck to you all.
