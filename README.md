# [star-course.com](http://star-course.com/)

--------------------------------------------------

##About:

Our website is hosted as a single page static site on Github. Our domain is owned and operated by UIUC so you never have to worry about paying to renew it. I’ve used Bootstrap and some Javascript to make the website pretty and interactive. If you’re making any updates to the website you won’t have to do anything except make a few changes to the HTML code.

This isn’t a drag and drop website; you’ll have to actually write code to make changes. But don’t worry, you can do it :)

Only make edits to index.html and history.html. Leave all the other files alone!

###What you have to change on the website:
1. Information under “Upcoming Events” (adding ticket links and information, adding information about quad booths or meetings, thanks for a great semester, etc.)
2. Adding show posters under “Previous Events”
3. Adding shows under “History”
4. Senior Manager names

Save all poster files under Website/img/posters as a .png or .jpg.

I would HIGHLY recommend doing some HTML and Github tutorials before starting. They’ll do a better job explaining the basics of the process than I can.

#####See the Google Drive document for screenshots and more info on what to actually change!

---------------------------------------------------

###The best way to go about updating the website:

1. Install git on your computer (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   - Log in with the SC username and password whenever prompted.
   - If you’re familiar with Github, just make yourself a contributor to the repo and save yourself some hassle with multiple accounts.

2. Download the Website folder to your personal machine
   - Use git commands to import it onto your computer: (Make sure you’re in the desired folder where you want the “website” folder to be saved)
'''
		git clone https://github.com/starcourse/website.git
		cd website
    git add .
    git commit -m "initial commit"
    git push origin master
'''
   - OR download it as a .zip file from Github and initialize git after saving (I’m assuming you’ve already extracted and saved the .zip folder into its desired location. In this example you’ve named it “existing_folder” so replace the command with the actual folder name):
'''
    cd existing_folder
    git init
	  git remote add origin https://github.com/starcourse/website.git
	  git add .
	  git commit -m "initial commit"
	  git push origin master
'''

3. Open index.html in a text editor and make all edits
   - I recommend Atom, Sublime, or Brackets
   - SAVE all changes! If you don’t save before a push/refresh nothing changes.
   - Test locally: open index.html in browser and refresh it whenever you save to see your changes in action. Voila! Local development.

The nice thing about using Github pages is that the code on the site is almost immediately updated as changes are pushed to the repository. So once you push, it's live within seconds.

BECAUSE OF THIS, YOU SHOULD ONLY MAKE CHANGES LOCALLY!

Adding new content: If you need to add a poster/change a background image, be sure to add it to the proper folder and have Git recognize it (using a  git add . command). You can also upload it into github manually but this can be a pain.

4. Push changes to the Github repository. Push updated code using git commands (make sure your terminal is in the Website folder root):
'''
		git add .
		git commit -m “[comment here about changes made]”
		git push origin master
'''

And BOOM you’re done!

Best of luck to you all. xoxo.
